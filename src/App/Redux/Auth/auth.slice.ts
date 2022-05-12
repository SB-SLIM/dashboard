import { createSlice } from "@reduxjs/toolkit";
import useToast from "../../Hooks/useToast";
import { addToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from "../../utils/localStorage";
import { logout, signup } from "./auth.thunk";


interface IUser {
    uid: string, displayName?: string, email: string, photo: string
}
export interface IUserAuth {
    isLoading: boolean,
    error: { isError: boolean, msg: string }
    user: IUser | null
}

const initialState: IUserAuth = { isLoading: false, user: getFromLocalStorage('user'), error: { isError: false, msg: "" } }

const userAuth = createSlice({
    name: "userAuth",
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [signup.pending]: (state) => {
            state.isLoading = true;
        },
        [signup.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = { isError: false, msg: "" }
            useToast("user logged in successfully", "success");
            addToLocalStorage('user', state.user)
        },
        [signup.rejected]: (state, action) => {
            state.error = { isError: true, msg: action.payload };
            useToast(state.error.msg, "error");
            state.isLoading = false;
        },
        [logout.pending]: (state) => {
            state.isLoading = true;
        },
        [logout.fulfilled]: (state) => {
            state.user = null;
            state.error = { isError: false, msg: "" }
            useToast("user logged out successfully", "success");
            removeFromLocalStorage('user')
            state.isLoading = false;
        },
        [logout.rejected]: (state, action) => {
            state.error = { isError: true, msg: action.payload };
            useToast(state.error.msg, "error");
            state.isLoading = false;
        },
    }
})


export default userAuth.reducer