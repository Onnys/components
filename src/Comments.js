import React from "react";
//import faker from "faker";

const Comments = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src='' />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">Yesterday at 12:12 AM</span>
        </div>
        <div className="text">{props.message}</div>
      </div>
    </div>
  );
};

export default Comments;
