const PostSummaryItem = (postSummary) => {
  return(`
    <li class="list-group-item d-flex justify-content-between wd-post">
      <div>
        <div class="text-muted">${postSummary.topic}</div>
        <div>
          <span class="fw-bold">${postSummary.userName}</span>
          <i class="fa fa-check-circle"></i>
          <span class="text-muted">&nbsp;- ${postSummary.time}</span>
        </div>
        <div class="fw-bold">${postSummary.title}</div>
        <div class="text-muted">${postSummary.tweets ? postSummary.tweets : ''}</div>
      </div>
      <img class="wd-post-summary-image" src="${postSummary.image}" alt=""/>
    </li>
  `);
};

export default PostSummaryItem;