import { createAsyncThunk } from "@reduxjs/toolkit";
import ActionType from "./employees.types";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config";


export const getEmployees: any = createAsyncThunk(
  ActionType.GET_EMPLOYEES,
  async (_, thunkAPI) => {
    const data: any[] = [];

    await getDocs(collection(db, "employees")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
    }).catch((err) => {
      return thunkAPI.rejectWithValue("something went wrong");
    })

    return data;

  }
);

export const addEmployee: any = createAsyncThunk(
  ActionType.ADD_EMPLOYEES,
  async (data: object, thunkAPI) => {
    try {
      const res = await addDoc(collection(db, "employees"), data);
      return { id: res, ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }

  }
);


