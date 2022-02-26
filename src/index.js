import React from "react";
import ReactDOM from "react-dom";
 
const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src=""/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Bem
          </a>
          <div className="metadata">
            <span className="date">Yesterday at 12:12 AM</span>
          </div>
          <div className="text">Nice blog Post</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src=""/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Bem
          </a>
          <div className="metadata">
            <span className="date">Yesterday at 12:12 AM</span>
          </div>
          <div className="text">Nice blog Post</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src=""/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Bem
          </a>
          <div className="metadata">
            <span className="date">Yesterday at 12:12 AM</span>
          </div>
          <div className="text">Nice blog Post</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src=""/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Bem
          </a>
          <div className="metadata">
            <span className="date">Yesterday at 12:12 AM</span>
          </div>
          <div className="text">Nice blog Post</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src=""/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Bem
          </a>
          <div className="metadata">
            <span className="date">Yesterday at 12:12 AM</span>
          </div>
          <div className="text">Nice blog Post</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
