import { createSlice } from "@reduxjs/toolkit";

const IsloadingSlice = createSlice({
  name: "Isloading",
  initialState: { isloading: false },
  reducers: {
    setisloading(state, action) {
      state.isloading = action.payload;
    },
  },
});

export default IsloadingSlice;
export const isloadingActions = IsloadingSlice.actions;
