"use client";
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authslice";
import userReducer from "./userslice";
import activegrpReducer from "./activegrpslice";
import activeuserReducer from "./activeuserslice";
import activechatsReducer from "./chatsslice";
import chatLastidReducer from "./chatLastid";
import groupReducer from "./groupslice";

const store = configureStore({
  reducer: {
    authentication: AuthSlice,
    user: userReducer,
    group: groupReducer,
    activegroup: activegrpReducer,
    activeuser: activeuserReducer,
    chatLastid: chatLastidReducer,
    activechats: activechatsReducer,
  },
});

export default store;
