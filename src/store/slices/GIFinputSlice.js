import { createSlice } from "@reduxjs/toolkit";

const GIFinputSlice = createSlice({
  name: "gifinput",
  initialState: { gifinput: "" },
  reducers: {
    setgifinput(state, action) {
      state.gifinput = action.payload;
    },
  },
});

export default GIFinputSlice;
export const gifInputActions = GIFinputSlice.actions;
