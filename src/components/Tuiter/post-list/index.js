import React from "react";
import PostItem from "./post-item";
import posts from "./posts.json";
import './index.css';

const PostList = () => {
  return(
    <ul className="list-group">
      {
        posts.map(post => {
          return(
            <PostItem post={post} key={post.title}/>
          );
        })
      }
    </ul>
  );
}
export default PostList;

