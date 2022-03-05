import React from "react";
import ReactDOM from "react-dom";
import Comments from "./Comments";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comments
          author="Cicrano"
          message="Its sad for me, because a trusted you"
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comments
          author="Antoinio"
          message="You know when you love somebody and her loves you the same way back"
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comments
          author="Fernando"
          message="Fool me once, put the blame on me, fool me twice cant put the blame on you"
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comments author="Dercio" message="A man got to do what he got to do" />
      </ApprovalCard>
      <ApprovalCard>
        <Comments
          author="Americo"
          message="This is the moment to leave the boat"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
