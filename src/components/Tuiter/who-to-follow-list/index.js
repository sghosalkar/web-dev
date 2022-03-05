import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import who from "./who.json";

const WhoToFollowList = () => {
  return(
    <ul className="list-group">
      <li className="list-group-item">Who to follow</li>
      {
        who.map(who => {
          return(
            <WhoToFollowListItem who={who} key={who.handle}/>
          );
        })
      }
    </ul>
  );
}

export default WhoToFollowList;