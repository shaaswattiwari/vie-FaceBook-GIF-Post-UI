import classes from "./body.module.css";
import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

function Body() {
  const inputvalue = useSelector((state) => state.search.searchinput);
  const postdata = useSelector((state) => state.posts.postinput);
  const mainbodyJSX = inputvalue.length
    ? postdata
        .filter((data) =>
          data.username.toLowerCase().includes(inputvalue.toLowerCase())
        )
        .map(Card)
    : postdata.map(Card);
  return (
    <div className={classes.mainbody} id="mainbody">
      {mainbodyJSX}
    </div>
  );
}

export default Body;
