"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { islogedin: false };

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setislogedin: (state, action) => {
      state.islogedin = action.payload;
    },
  },
});

export default AuthSlice.reducer;
export const { setislogedin } = AuthSlice.actions;
