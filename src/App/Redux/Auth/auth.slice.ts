import { createSlice } from "@reduxjs/toolkit";
import useToast from "../../Hooks/useToast";
import { addToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from "../../utils/localStorage";
import { logoutUser, loginUser, registerUser, googleAuthUser } from "./auth.thunk";


interface IUser {
    uid: string, displayName?: string, email: string, photo: string,
}
export interface IUserAuth {
    isLoading: boolean,
    isMember: boolean
    error: { isError: boolean, msg: string }
    user: IUser | null
}

const initialState: IUserAuth = { isLoading: false, isMember: true, user: getFromLocalStorage('user'), error: { isError: false, msg: "" } }

const userAuth = createSlice({
    name: "userAuth",
    initialState: initialState,
    reducers: {
        setIsMember: (state) => {
            state.isMember = !state.isMember
        }
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = { isError: false, msg: "" }
            useToast("user logged in successfully", "success");
            addToLocalStorage('user', state.user)
        },
        [loginUser.rejected]: (state, action) => {
            state.error = { isError: true, msg: action.payload };
            useToast(state.error.msg, "error");
            state.isLoading = false;
        },
        [logoutUser.pending]: (state) => {
            state.isLoading = true;
        },
        [logoutUser.fulfilled]: (state) => {
            state.user = null;
            state.isMember = true;
            state.error = { isError: false, msg: "" }
            useToast("user logged out", "success");
            removeFromLocalStorage('user')
            state.isLoading = false;
        },
        [logoutUser.rejected]: (state, action) => {
            state.error = { isError: true, msg: action.payload };
            useToast(state.error.msg, "error");
            state.isLoading = false;
        },
        [registerUser.pending]: (state) => {
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state) => {
            state.user = null;
            state.error = { isError: false, msg: "" }
            useToast("user register successfully", "success");
            state.isLoading = false;
        },
        [registerUser.rejected]: (state, action) => {
            state.error = { isError: true, msg: action.payload };
            useToast(state.error.msg, "error");
            state.isLoading = false;
        },
        [googleAuthUser.pending]: (state) => {
            state.isLoading = true;
        },
        [googleAuthUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = { isError: false, msg: "" }
            useToast("user logged in successfully", "success");
            addToLocalStorage('user', state.user)
        },
        [googleAuthUser.rejected]: (state, action) => {
            state.error = { isError: true, msg: action.payload };
            useToast(state.error.msg, "error");
            state.isLoading = false;
        },
    }
})

export const { setIsMember } = userAuth.actions

export default userAuth.reducer