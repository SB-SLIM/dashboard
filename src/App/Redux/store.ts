import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./Employees";
import modalReducer from './Modal/index';

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    modal: modalReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;