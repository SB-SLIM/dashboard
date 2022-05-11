import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/config'
import { FormLogin } from "../../Pages/Login/Login";

export const signup: any = createAsyncThunk(
    "signup",
    async (data: FormLogin, thunkAPI) => {
        try {
            const { email: emailData, password } = data

            const result = await signInWithEmailAndPassword(auth, emailData, password)
            const { uid, email, displayName, photoURL: photo } = result.user

            return { uid, displayName, email, photo }
        } catch (error: any) {

            if (error.code === ("auth/wrong-password" || "auth/user-not-found")) {
                return thunkAPI.rejectWithValue("Incorrect username or password. Please try again.");
            }
            if (error.code === 'auth/too-many-requests') {
                return thunkAPI.rejectWithValue("Access to this account has been temporarily disabled");
            }
            return thunkAPI.rejectWithValue("There is something wrong");

        }
    }
)