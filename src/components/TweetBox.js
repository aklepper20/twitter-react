import React from "react";
import "../css/TweetBox.css";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar alt="User Profile Image" />
          <input placeholder="What's going on?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Enter image Url"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
