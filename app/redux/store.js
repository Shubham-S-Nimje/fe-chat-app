import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth";

export const authActions = AuthSlice.actions;

const store = configureStore({
  reducer: { auth: AuthSlice.reducer },
});

export default store;
