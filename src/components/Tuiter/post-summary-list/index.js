import React from "react";
import PostSummaryItem from "./post-summary-item";
import postSummaries from "./post-summaries.json";

const PostSummaryList = () => {
  return(
    <ul className="list-group mb-2 me-auto">
      {
        postSummaries.map(postSummary => {
          return(
            <PostSummaryItem postSummary={postSummary} key={postSummary.title}/>
          );
        })
      }
    </ul>
  );
}
export default PostSummaryList;

