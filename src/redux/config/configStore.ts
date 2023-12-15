import { configureStore } from "@reduxjs/toolkit";
import TodolistSlice from "../modules/TodolistSlice";

const store = configureStore({
  reducer: {
    TodolistSlice,
  },
});
export default store;
