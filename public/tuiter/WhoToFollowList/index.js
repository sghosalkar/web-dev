import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
  return(`
    <ul class="list-group">
      <li class="list-group-item">Who to follow</li>
      ${
    who.map(whoToFollow => {
          return(WhoToFollowListItem(whoToFollow));
        }).join('')
      }
    </ul>
  `);
}

export default WhoToFollowList;