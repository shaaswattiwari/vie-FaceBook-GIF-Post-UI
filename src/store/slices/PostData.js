import { createSlice } from "@reduxjs/toolkit";

const postinput = localStorage.getItem("posts")
  ? JSON.parse(localStorage.getItem("posts"))
  : localStorage.setItem(
      "posts",
      JSON.stringify([
        {
          userimg: "https://randomuser.me/api/portraits/men/51.jpg",
          username: "Ravindra Jadeja",
          dateandtime: "6 Sep 2021, 02:26 PM",
          caption: `A random caption Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Fuga, laborum? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Architecto reiciendis voluptates non rerum dolores quae
        exercitationem, fuga ipsam rem quasi.`,
          imageurl:
            "https://media4.giphy.com/media/U4DswrBiaz0p67ZweH/giphy.gif",
        },
        {
          userimg: "https://randomuser.me/api/portraits/men/52.jpg",
          username: "Vikas Jha",
          dateandtime: "12 Jul 2021, 04:15 AM",
          caption: `Dolor sit amet consectetur, adipisicing
          elit. Fuga, laborum? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Architecto reiciendis voluptates non rerum dolores quae
          exercitationem, fuga ipsam rem quasi.`,
          imageurl:
            "https://media4.giphy.com/media/3rgXBQIDHkFNniTNRu/giphy.gif",
        },
        {
          userimg: "https://randomuser.me/api/portraits/men/53.jpg",
          username: "Randhir Mehta",
          dateandtime: "25 Jun 2021, 03:25 AM",
          caption: `Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Architecto reiciendis voluptates non rerum dolores quae
            exercitationem, fuga ipsam rem quasi.`,
          imageurl: "https://media3.giphy.com/media/wAxlCmeX1ri1y/giphy.gif",
        },
        {
          userimg: "https://randomuser.me/api/portraits/men/54.jpg",
          username: "Mukesh Mahajan",
          dateandtime: "31 Mar 2021, 05:30 AM",
          caption: `Architecto reiciendis voluptates non rerum dolores quae
          exercitationem, fuga ipsam rem quasi.`,
          imageurl: "https://media1.giphy.com/media/rumR5iFBxFjdC/giphy.gif",
        },
        {
          userimg: "https://randomuser.me/api/portraits/men/55.jpg",
          username: "Stephen Kohler",
          dateandtime: "21 Apr 2021, 10:26 AM",
          caption: `A random caption Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Fuga, laborum? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Architecto reiciendis voluptates non rerum dolores quae
            exercitationem, fuga ipsam rem quasi.`,
          imageurl: "https://media3.giphy.com/media/MJGxL8fxrQBfq/giphy.gif",
        },
      ])
    );

const PostSlice = createSlice({
  name: "postinput",
  initialState: {
    postinput: postinput
      ? postinput
      : JSON.parse(localStorage.getItem("posts")),
  },
  reducers: {
    setpostinput(state, action) {
      var post = JSON.parse(localStorage.getItem("posts"));
      post.unshift(action.payload);
      localStorage.setItem("posts", JSON.stringify(post));
      state.postinput = JSON.parse(localStorage.getItem("posts"));
    },
  },
});

export default PostSlice;
export const postActions = PostSlice.actions;
