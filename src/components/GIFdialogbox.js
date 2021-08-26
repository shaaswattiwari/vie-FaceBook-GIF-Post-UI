import classes from "./gifdialogbox.module.css";
import React, { useEffect } from "react";
import { gifSearchActions } from "../store/slices/GIFSearch";
import { useSelector, useDispatch } from "react-redux";
import { postUpdateActions } from "../store/slices/PostUpdate";
import { gifInputActions } from "../store/slices/GIFinputSlice";
import { gifurlActions } from "../store/slices/GIFUrlList";

function GIFdialogbox() {
  const gifinput = useSelector((store) => store.gifinput.gifinput);
  const gifurllist = useSelector((store) => store.gifurllist.gifurllist);
  const dispatch = useDispatch();
  const gifinputhandler = (e) => {
    dispatch(gifInputActions.setgifinput(e.target.value));
  };

  const gifclickhandler = (e) => {
    dispatch(gifSearchActions.setgifsearch(false));
    dispatch(postUpdateActions.setimageurl(e.target.src));
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

  useEffect(() => {
    if (gifinput.trim().length > 0) {
      const gofetch = setTimeout(() => {
        async function gifs() {
          try {
            var gifrequest = await fetch(
              `https://api.giphy.com/v1/gifs/search?api_key=hboUXDPEoujE5s3u4d0XcZdlOLXi8IPK&q=${gifinput}}&limit=15&offset=0&rating=g&lang=en`
            );
            var { data } = await gifrequest.json();
            dispatch(
              gifurlActions.setgifurllist(
                data.map((obj) => obj.images.downsized_medium.url.split("?")[0])
              )
            );
          } catch (e) {}
        }
        gifs();
      }, 800);
      return () => {
        clearTimeout(gofetch);
      };
    }
  }, [gifinput]);

  return (
    <div className={classes.gifbox}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search here..."
        onChange={gifinputhandler}
        value={gifinput}
      />
      <div className={classes.displaygif}>
        {gifurllist.length <= 6 && (
          <p
            style={{
              fontStyle: "italic",
              fontSize: "14px",
              margin: "0px 0px 5px 0px",
              padding: "0px",
            }}
          >
            Now Trending 🔥
          </p>
        )}
        {gifurllist.map((url) => (
          <button onClick={gifclickhandler} key={Math.random()}>
            <img src={url} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default GIFdialogbox;
