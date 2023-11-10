import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import blogSlice from "./blogSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blog: blogSlice,
  },
});

export default store;
