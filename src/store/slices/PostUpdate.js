import { createSlice } from "@reduxjs/toolkit";

const PostUpdateSlice = createSlice({
  name: "postupdateslice",
  initialState: {
    postupdate: {
      userimg: "https://randomuser.me/api/portraits/men/59.jpg",
      username: "Shaaswat Tiwari",
      dateandtime: "",
      caption: "",
      imageurl: "",
    },
  },
  reducers: {
    setdateandtime(state, action) {
      var x = new Date();
      state.postupdate.dateandtime = `${x.toLocaleDateString()}, ${x.toLocaleTimeString()}`;
    },
    setcaption(state, action) {
      state.postupdate.caption = action.payload;
    },
    setimageurl(state, action) {
      state.postupdate.imageurl = action.payload;
    },
  },
});
export default PostUpdateSlice;
export const postUpdateActions = PostUpdateSlice.actions;
