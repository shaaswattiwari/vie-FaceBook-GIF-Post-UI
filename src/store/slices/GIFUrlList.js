import { createSlice } from "@reduxjs/toolkit";

const GIFUrlListSlice = createSlice({
  name: "gifurllist",
  initialState: {
    gifurllist: [
      "https://media1.giphy.com/media/l2JdXy8xasypvE0Ni/giphy.gif",
      "https://media0.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif",
      "https://media4.giphy.com/media/U4DswrBiaz0p67ZweH/giphy.gif",
      "https://media3.giphy.com/media/26n6R5HOYPbekK0YE/giphy.gif",
      "https://media2.giphy.com/media/kHmVOy84g8G6my09fu/giphy.gif",
      "https://media3.giphy.com/media/1GrsfWBDiTN60/giphy.gif",
    ],
  },
  reducers: {
    setgifurllist(state, action) {
      state.gifurllist = action.payload;
    },
  },
});

export default GIFUrlListSlice;
export const gifurlActions = GIFUrlListSlice.actions;
