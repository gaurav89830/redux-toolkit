//steps
// 1. get configureStore from core redux
// 2. export bhi likhde last mein ek const bna kr of configureStore()
// 3. Make reducers ( or say slices)
// now go to features/todo/todoslice.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
