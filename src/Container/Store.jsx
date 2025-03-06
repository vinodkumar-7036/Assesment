import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../Container/UserSlice"

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});