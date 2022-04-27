import { createSlice } from "@reduxjs/toolkit";
import { getEmployees } from "./employees.actions";


const initialState = {
  isLoading: true,
  error: { isError: false, msg: "" },
  tmpData: [],
  data: [],
  sort: "dec",
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    sortEmployees: (state, action) => {
      if (action.payload === "asc") {
        state.data = state.data.sort((a: any, b: any) => {
          const x = a.name.toLowerCase();
          const y = b.name.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
      }
    },
  },
  extraReducers: {
    [getEmployees.pending]: (state) => {
      state.isLoading = true;
    },
    [getEmployees.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = { isError: false, msg: "" };
      state.data = action.payload;
    },
    [getEmployees.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = { isError: true, msg: action.error.message };
    },
  },
});

export const { sortEmployees } = employeesSlice.actions;


export default employeesSlice.reducer;
