import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeuser: {},
};

const activeuserSlice = createSlice({
  name: "activeuser",
  initialState,
  reducers: {
    setActiveuser: (state, action) => {
      state.activeuser = action.payload;
    },
  },
});

export const { setActiveuser } = activeuserSlice.actions;

export default activeuserSlice.reducer;
