import { createAsyncThunk } from "@reduxjs/toolkit";
import ActionType from "./employees.types";
import { fetchData, setData } from "../../Firebase/functions";

export const getEmployees: any = createAsyncThunk(
  ActionType.GET_EMPLOYEES,
  async (n, thunkAPI) => {
    try {
      const res = await fetchData("employees")
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }

  }
);

export const addEmployee: any = createAsyncThunk(
  ActionType.ADD_EMPLOYEES,
  async (data: object, thunkAPI) => {
    try {
      const res = await setData("employees", data)

      return { id: res, ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }

  }
);


