import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "searchinput",
  initialState: { searchinput: "" },
  reducers: {
    setsearchinput(state, action) {
      state.searchinput = action.payload;
    },
  },
});

export default SearchSlice;
export const searchActions = SearchSlice.actions;
