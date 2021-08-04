import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./people";

export const store = configureStore({
  reducer: {
    peopleData: peopleReducer,
  },
});
