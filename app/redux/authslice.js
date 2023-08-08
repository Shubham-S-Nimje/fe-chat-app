"use client";
import { createSlice } from "@reduxjs/toolkit";

const isAuth = localStorage.getItem("UserToken") ? true : false;
// console.log(isAuth);

const initialAuthState = { isAuthenticated: isAuth };

const AuthSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default AuthSlice.reducer;
export const { login, logout } = AuthSlice.actions;
