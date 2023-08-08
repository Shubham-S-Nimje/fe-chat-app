"use client";
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authslice";

const store = configureStore({
  reducer: { authentication: AuthSlice },
});

export default store;
