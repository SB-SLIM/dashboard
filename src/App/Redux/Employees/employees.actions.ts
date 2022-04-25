import { createAsyncThunk } from "@reduxjs/toolkit";
import requests from "../../Constants/requests";
import axios from "axios";

export const getEmployees = createAsyncThunk(
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
