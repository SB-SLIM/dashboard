import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./Auth";
import employeesReducer from "./Employees";
import modalReducer from './Modal/index';
import themeReducer from './Theme/index';

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    modal: modalReducer,
    userAuth: userAuthReducer,
    theme: themeReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;