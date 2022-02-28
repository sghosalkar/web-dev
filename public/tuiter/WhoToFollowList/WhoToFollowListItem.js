const WhoToFollowListItem = (who) => {
  return(`
    <li class="list-group-item d-flex justify-content-between">
      <img src="${who.avatarIcon}" class="img-fluid rounded-circle wd-follow-avatar-icon" alt="${who.handle}">
      <div class="ms-2 me-auto">
        <div class="fw-bold">${who.userName} <i class="fa fa-check-circle"></i></div>
        <div>@${who.handle}</div>
      </div>
      <button class="btn btn-primary btn-block rounded-pill">Follow</button>
    </li>
  `);
}

export default WhoToFollowListItem;

