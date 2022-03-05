import React from "react";
import './index.css';

const WhoToFollowListItem = ({
                               who = {
                                 avatarIcon: '/tuiter/assets/nasa.png',
                                 userName: 'NASA',
                                 handle: 'NASA',
                               }
                             }) => {
  return(
    <li className="list-group-item d-flex justify-content-between">
      <img src={who.avatarIcon} className="img-fluid rounded-circle wd-follow-avatar-icon" alt={who.handle} />
      <div className="ms-2 me-auto">
        <div className="fw-bold">{who.userName} <i className="fa fa-check-circle" /></div>
        <div>@{who.handle}</div>
      </div>
      <button className="btn btn-primary btn-block rounded-pill">Follow</button>
    </li>
  );
}

export default WhoToFollowListItem;

