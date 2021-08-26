import { createSlice } from "@reduxjs/toolkit";

const GIFSearchSlice = createSlice({
  name: "gifsearchslice",
  initialState: { gifsearch: false },
  reducers: {
    setgifsearch(state, action) {
      state.gifsearch = action.payload;
    },
  },
});

export default GIFSearchSlice;
export const gifSearchActions = GIFSearchSlice.actions;
