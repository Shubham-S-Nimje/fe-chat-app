"use client";
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authslice";
import userReducer from "./userslice";
import activegrpReducer from "./activegrpslice";
import activeuserReducer from "./activeuserslice";
import groupReducer from "./groupslice";

const store = configureStore({
  reducer: {
    authentication: AuthSlice,
    user: userReducer,
    group: groupReducer,
    activegroup: activegrpReducer,
    activeuser: activeuserReducer,
  },
});

export default store;
