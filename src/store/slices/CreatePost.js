import { createSlice } from "@reduxjs/toolkit";

const CreatePostSlice = createSlice({
  name: "createpost",
  initialState: { createpost: false },
  reducers: {
    setcreatepost(state, action) {
      state.createpost = action.payload;
    },
  },
});

export default CreatePostSlice;
export const createPostActions = CreatePostSlice.actions;
