import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activegroup: {},
};

const activegrpSlice = createSlice({
  name: "activegroup",
  initialState,
  reducers: {
    setActivegroup: (state, action) => {
      state.activegroup = action.payload;
    },
  },
});

export const { setActivegroup } = activegrpSlice.actions;

export default activegrpSlice.reducer;
