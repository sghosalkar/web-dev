import React from "react";
import './index.css';

const PostSummaryItem = ({
                           postSummary = {
                             "topic": "Web Development",
                             "userName": "ReactJS",
                             "time": "2h",
                             "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                             "image": "/tuiter/assets/react-logo.png"
                           }
                         }) => {
  return(
    <li className="list-group-item d-flex justify-content-between wd-post">
      <div>
        <div className="text-muted">{postSummary.topic}</div>
        <div>
          <span className="fw-bold">{postSummary.userName} </span>
          <i className="fa fa-check-circle" />
          <span className="text-muted">&nbsp;- {postSummary.time}</span>
        </div>
        <div className="fw-bold">{postSummary.title}</div>
        <div className="text-muted">{postSummary.tweets ? postSummary.tweets : ''}</div>
      </div>
      <img className="wd-post-summary-image" src={postSummary.image} alt=""/>
    </li>
  );
};

export default PostSummaryItem;