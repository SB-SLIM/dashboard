import { createAsyncThunk } from "@reduxjs/toolkit";
import ActionType from "./employees.types";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config";

//FIXME: check the type
export const getEmployees: any = createAsyncThunk(
  'employees/getEmployees',
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


//FIXME: check the type
export const addEmployee: any = createAsyncThunk(
  'employees/addEmployee',
  async (data: object, thunkAPI) => {
    try {
      const res = await addDoc(collection(db, "employees"), data);
      return { id: res, ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }

  }
);


