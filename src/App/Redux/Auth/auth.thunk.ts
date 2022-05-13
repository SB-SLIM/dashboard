import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from '../../Firebase/config'
import { FormLogin } from "../../Pages/Login/Login";


// FIXME: check the type
export const loginUser: any = createAsyncThunk(
    "user/login",
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

// FIXME: check the type
export const logoutUser: any = createAsyncThunk(
    'user/logout', async (_, thunkAPI) => {
        await signOut(auth).then(() => {
            console.log('logout')
        }).catch((error) => {
            return thunkAPI.rejectWithValue("There is something wrong");
        });
    }
)

export const registerUser: any = createAsyncThunk(
    "user/register", async (data: any, thunkAPI) => {

        const { email, password } = data

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {

                return thunkAPI.rejectWithValue(error.message);

            });

}
)


export const googleAuthUser: any = createAsyncThunk('user/googleAuthUser',
    async (_, thunkAPI) => {
        return await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                //TODO: use Token 
                const token = credential?.accessToken;
                const { uid, email, displayName, photoURL: photo } = result.user
                console.log("🚀 ~ file: auth.thunk.ts ~ line 74 ~ .then ~ { uid, email, displayName, photoURL: photo }", { uid, email, displayName, photoURL: photo })

                return { uid, displayName, email, photo }

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                const err = `error code: ${errorCode}, ${errorMessage && `message:${errorMessage}`}, ${email && `email: ${email}`}, ${credential && `credential: ${credential}`}`
                return thunkAPI.rejectWithValue(err);

            });
    })