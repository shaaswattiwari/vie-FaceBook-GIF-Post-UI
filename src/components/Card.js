import React from "react";
import classes from "./card.module.css";
function Card(post) {
  return (
    <div className={classes.card} key={Math.random()}>
      <div className={classes.heading}>
        <div className={classes.dpandinfo}>
          <img src={post.userimg} alt="dp" />
          <div className={classes.nametime}>
            <p>
              {post.username}
              <br />
              {post.dateandtime}
            </p>
          </div>
        </div>
        <div className={classes.threedots}>. . .</div>
      </div>
      <div className={classes.caption}>{post.caption}</div>
      <div className={classes.image}>
        <img src={post.imageurl} alt="" />
      </div>
      <div className={classes.likeshare}>
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/Reaction_Icon.png"
          alt="reactions"
        />
        <img
          src="https://i.ibb.co/vv2LYnV/likecmnt-1-removebg-preview.png"
          alt="likecmnt"
        />
      </div>
    </div>
  );
}

export default Card;
