import { createSlice } from "@reduxjs/toolkit";
import useLocaleStorage from "../../Hooks/useLocaleStorage";
import { addToLocalStorage, getFromLocalStorage } from "../../utils/localStorage";
import { signup } from "./auth.thunk";

export interface IUserAuth {
    isLoading: boolean,
    user: {
        uid: string, name?: string, email: string, token: string
    } | null
}


const initialState: IUserAuth = { isLoading: false, user: getFromLocalStorage('user') }




const userAuth = createSlice({
    name: "userAuth",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [signup.pending]: (state) => {
            state.isLoading = true;
        },
        [signup.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            addToLocalStorage('user', JSON.stringify(action.payload))
        },
        [signup.rejected]: (state, action) => {
            state.isLoading = false;


            // state.error = { isError: true, msg: action.error.message };
        },
    }
})


export default userAuth.reducer