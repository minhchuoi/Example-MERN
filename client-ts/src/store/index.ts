import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../pages/home/slice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
