import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import { getEmployees } from "./employees.actions";
import axios from "axios";
import requests from "../../Constants/requests";

export const getEmployees: any = createAsyncThunk(
  "employees/getEmployees",
  async (name, thunkAPI) => {
    try {
      const res = await axios(requests.fetchUsers);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    isLoading: true,
    error: { isError: false, msg: "" },
    data: [],
  },
  reducers: {},
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

// export const {} = employeesSlice.actions;

export default employeesSlice.reducer;
