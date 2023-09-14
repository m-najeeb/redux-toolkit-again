//create a folder named store and add a file store.js
//import configureStore from @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
