import { createSlice } from "@reduxjs/toolkit";
import { IEmployee } from "../../Components/Employees/AddEmployee/AddEmployeeForm";
import { getEmployees, addEmployee } from "./employees.thunks";


interface IInitialState {
  isLoading: boolean,
  error: { isError: boolean, msg: string },
  tmpData: any[];
  data: any[];
  formData: IEmployee;
  sort: "asc" | "desc"
}

const initialState: IInitialState = {
  isLoading: true,
  error: { isError: false, msg: "" },
  tmpData: [],
  data: [],
  formData: { name: "", email: '', phone: 0 },
  sort: "desc",
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
    [addEmployee.pending]: (state) => {
      state.isLoading = true;
    },
    [addEmployee.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = { isError: false, msg: "" };
      state.data = [...state.data, action.payload];
    },
    [addEmployee.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = { isError: true, msg: action.error.message };
    },

  },
});

export const { sortEmployees } = employeesSlice.actions;


export default employeesSlice.reducer;
