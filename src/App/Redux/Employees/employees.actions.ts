import { createAsyncThunk } from "@reduxjs/toolkit";
import requests from "../../Constants/requests";
import axios from "axios";
import ActionType from "./employees.types";
import { useCallback } from "react";

export const getEmployees: any = createAsyncThunk(
  ActionType.GET_EMPLOYEES,
  async (n, thunkAPI) => {
    try {
      const res = await axios(requests.fetchUsers);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);


