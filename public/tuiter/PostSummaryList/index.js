import PostSummaryItem from "./PostSummaryItem.js";
import postSummaries from "./postSummaries.js";

const PostSummaryList = () => {
  return(`
    <ul class="list-group mb-2 me-auto">
      ${
        postSummaries.map(postSummary => {
          return(PostSummaryItem(postSummary));
        }).join('')
      }
    </ul>
  `);
}
export default PostSummaryList;

