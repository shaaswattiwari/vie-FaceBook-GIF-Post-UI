import React from "react";
import classes from "./createpost.module.css";
import { useSelector, useDispatch } from "react-redux";
import { postUpdateActions } from "../store/slices/PostUpdate";
import { postActions } from "../store/slices/PostData";
import { createPostActions } from "../store/slices/CreatePost";
import { gifSearchActions } from "../store/slices/GIFSearch";
import { gifInputActions } from "../store/slices/GIFinputSlice";
import GIFdialogbox from "./GIFdialogbox";
import { gifurlActions } from "../store/slices/GIFUrlList";

function CreatePost() {
  const postupdate = useSelector((store) => store.postupdate.postupdate);
  const gifsearch = useSelector((store) => store.gifsearch.gifsearch);
  const dispatch = useDispatch();
  const captionHandler = (e) => {
    dispatch(postUpdateActions.setcaption(e.target.value));
  };

  const submitHandler = (params) => {
    if (postupdate.caption.trim().length > 0 || postupdate.imageurl.length) {
      window.onscroll = function () {};
      dispatch(postActions.setpostinput(postupdate));
      dispatch(createPostActions.setcreatepost(false));
      dispatch(postUpdateActions.setcaption(""));
      dispatch(postUpdateActions.setimageurl(""));
      dispatch(gifSearchActions.setgifsearch(false));
      dispatch(gifInputActions.setgifinput(""));
      dispatch(
        gifurlActions.setgifurllist([
          "https://media1.giphy.com/media/l2JdXy8xasypvE0Ni/giphy.gif",
          "https://media0.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif",
          "https://media4.giphy.com/media/U4DswrBiaz0p67ZweH/giphy.gif",
          "https://media3.giphy.com/media/26n6R5HOYPbekK0YE/giphy.gif",
          "https://media2.giphy.com/media/kHmVOy84g8G6my09fu/giphy.gif",
          "https://media3.giphy.com/media/1GrsfWBDiTN60/giphy.gif",
        ])
      );
    } else {
      alert("Kindly enter a caption or a GIF");
    }
  };

  const cancelHandler = (params) => {
    window.onscroll = function () {};
    dispatch(createPostActions.setcreatepost(false));
    dispatch(postUpdateActions.setcaption(""));
    dispatch(postUpdateActions.setimageurl(""));
    dispatch(gifSearchActions.setgifsearch(false));
    dispatch(gifInputActions.setgifinput(""));
    dispatch(
      gifurlActions.setgifurllist([
        "https://media1.giphy.com/media/l2JdXy8xasypvE0Ni/giphy.gif",
        "https://media0.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif",
        "https://media4.giphy.com/media/U4DswrBiaz0p67ZweH/giphy.gif",
        "https://media3.giphy.com/media/26n6R5HOYPbekK0YE/giphy.gif",
        "https://media2.giphy.com/media/kHmVOy84g8G6my09fu/giphy.gif",
        "https://media3.giphy.com/media/1GrsfWBDiTN60/giphy.gif",
      ])
    );
  };

  dispatch(postUpdateActions.setdateandtime());
  return (
    <div className={classes.createpostbackground}>
      {gifsearch && <GIFdialogbox />}
      <div className={classes.createpostbody}>
        <div className={classes.heading}>
          <div className={classes.compose}>
            <h5
              style={{
                borderRight: "1px solid grey",
                borderLeft: "none",
                backgroundColor: "#f7f7f7",
              }}
            >
              <img src="https://img.icons8.com/material-outlined/32/000000/edit-message.png" />
              Compose Post
            </h5>
            <h5
              style={{
                border: "0px",
              }}
            >
              <img src="https://img.icons8.com/windows/32/000000/photo-video.png" />
              Photo / Video Album
            </h5>
            <h5
              style={{
                borderRight: "1px solid grey",
              }}
            >
              <img src="https://img.icons8.com/ios/32/000000/live-photos.png" />
              Live Video
            </h5>
          </div>
          <button className={classes.cancel} onClick={cancelHandler}>
            {" "}
            <img src="https://img.icons8.com/color/50/000000/cancel.png" />
          </button>
        </div>
        <div className={classes.contentarea}>
          <div className={classes.userdp}>
            <img src="https://randomuser.me/api/portraits/men/59.jpg" alt="" />
          </div>

          <div className={classes.textandimagearea}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Start Writing..."
              onChange={captionHandler}
              value={postupdate.caption}
            />
            <img src={postupdate.imageurl} alt="" />
          </div>
        </div>
        <div className={classes.colorarea}>
          <div className={classes.color}>
            <img src="https://img.icons8.com/material-outlined/24/000000/chevron-left.png" />
          </div>
          <div
            className={classes.color}
            style={{ backgroundColor: "slateblue" }}
          ></div>
          <div
            className={classes.color}
            style={{ backgroundColor: "mediumseagreen" }}
          ></div>{" "}
          <div
            className={classes.color}
            style={{ backgroundColor: "gray" }}
          ></div>{" "}
          <div
            className={classes.color}
            style={{ backgroundColor: "dodgerblue" }}
          ></div>{" "}
          <div
            className={classes.color}
            style={{ backgroundColor: "tomato" }}
          ></div>{" "}
          <div
            className={classes.color}
            style={{ backgroundColor: "purple" }}
          ></div>{" "}
          <div
            className={classes.color}
            style={{ backgroundColor: "wheat" }}
          ></div>{" "}
          <div
            className={classes.color}
            style={{ backgroundColor: "cyan" }}
          ></div>{" "}
          <div
            className={classes.color}
            style={{ backgroundColor: "darkgreen" }}
          ></div>{" "}
          <div
            className={classes.color}
            style={{ backgroundColor: "black" }}
          ></div>{" "}
          <div
            className={classes.color}
            style={{ backgroundColor: "blue" }}
          ></div>{" "}
          <div
            className={classes.color}
            style={{ backgroundColor: "green" }}
          ></div>{" "}
          <div
            className={classes.color}
            style={{ backgroundColor: "yellow" }}
          ></div>{" "}
          <div
            className={classes.color}
            style={{ backgroundColor: "orange" }}
          ></div>{" "}
          <div className={classes.color}>
            <img src="https://img.icons8.com/material-outlined/24/000000/chevron-right.png" />
          </div>
        </div>
        <div className={classes.options}>
          <button
            className={classes.gif}
            onClick={() => {
              dispatch(gifSearchActions.setgifsearch(true));
            }}
          >
            {" "}
            <img src="https://img.icons8.com/material-outlined/24/000000/gif.png" />{" "}
            Send GIF
          </button>
          <div className={classes.tagfriend}>
            <img src="https://img.icons8.com/material-outlined/24/000000/tags.png" />{" "}
            Tag Friends
          </div>
          <div className={classes.tagfriend}>
            <img src="https://img.icons8.com/material-outlined/24/000000/worldwide-location.png" />
            Location
          </div>
        </div>

        <div className={classes.endarea}>
          <div className={classes.tagfriend}>
            <img src="https://img.icons8.com/material-outlined/24/000000/hashtag-2.png" />
            HashTags
          </div>
          <div className={classes.tagfriend}>
            <img src="https://img.icons8.com/material-outlined/24/000000/labels.png" />
            Stickers
          </div>
          <button onClick={submitHandler}>
            {" "}
            <img src="https://img.icons8.com/color/24/000000/checked-2.png" />
            Let's Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
