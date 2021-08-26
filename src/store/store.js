import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./slices/SearchSlice";
import CreatePost from "./slices/CreatePost";
import PostSlice from "./slices/PostData";
import GIFSearchSlice from "./slices/GIFSearch";
import PostUpdate from "./slices/PostUpdate";
import IsloadingSlice from "./slices/Isloading";
import GIFinputSlice from "./slices/GIFinputSlice";
import GIFUrlListSlice from "./slices/GIFUrlList";

const store = configureStore({
  reducer: {
    search: SearchSlice.reducer,
    create: CreatePost.reducer,
    posts: PostSlice.reducer,
    postupdate: PostUpdate.reducer,
    gifinput: GIFinputSlice.reducer,
    gifsearch: GIFSearchSlice.reducer,
    gifurllist: GIFUrlListSlice.reducer,
    isloading: IsloadingSlice.reducer,
  },
});

export default store;
