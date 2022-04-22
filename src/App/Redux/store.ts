import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Employees/employees.reducer";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
