import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setGroup: (state, action) => {
      state.groups = action.payload;
    },
  },
});

export const { setGroup } = groupSlice.actions;

export default groupSlice.reducer;
