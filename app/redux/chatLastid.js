import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatLastid: 5,
};

const chatLastidSlice = createSlice({
  name: "chatLastid",
  initialState,
  reducers: {
    setchatLastid: (state, action) => {
      state.chatLastid = action.payload;
    },
  },
});

export const { setchatLastid } = chatLastidSlice.actions;

export default chatLastidSlice.reducer;
