import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/config'
import { FormLogin } from "../../Pages/Login/Login";




export const signup: any = createAsyncThunk(
    "signup",
    async (data: FormLogin, thunkAPI) => {
        try {
            const { email, password } = data
            const result = await signInWithEmailAndPassword(auth, email, password)
            return result.user
        } catch (error) {
            return thunkAPI.rejectWithValue("error?.message");
        }
    }
)