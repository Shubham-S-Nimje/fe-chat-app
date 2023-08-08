"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

const AuthSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    userlogin(state) {
      state.isAuthenticated = true;
    },
    userlogout(state) {
      state.isAuthenticated = false;
    },
  },
});



export default AuthSlice.reducer;
export const { userlogin, userlogout } = AuthSlice.actions;
