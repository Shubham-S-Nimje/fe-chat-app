import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activechats: {},
};

const activechatsSlice = createSlice({
  name: "activechats",
  initialState,
  reducers: {
    setActivechats: (state, action) => {
      state.activechats = action.payload;
    },
  },
});

export const { setActivechats } = activechatsSlice.actions;

export default activechatsSlice.reducer;
