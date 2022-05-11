import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, addToLocalStorage } from '../../utils/localStorage';


interface IInitialState { themeMode: PaletteMode }

const initialState: IInitialState = {
    themeMode: getFromLocalStorage<"dark" | "light">('theme-mode') || 'light'
}

const themeModeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setModeTheme: (state) => {
            const newTheme = state.themeMode === "light" ? "dark" : "light";
            state.themeMode = newTheme
            addToLocalStorage<"light" | "dark">('theme-mode', newTheme)
        },
    }
})

export const { setModeTheme } = themeModeSlice.actions

export default themeModeSlice.reducer