import React, { useState } from "react";
import "./Sidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function Sidebar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes} </p>
      </div>
      <div className="sidebar__button">
        <MessageIcon />
        <p>{messages} </p>
      </div>
      <div className="sidebar__button">
        <ShareIcon />
        <p>{shares} </p>
      </div>
    </div>
  );
}

export default Sidebar;
