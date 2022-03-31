import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = () => {
  const location = useLocation();
  return(
    <>
      <div className="list-group">
        <Link to="/" className={`list-group-item`}>
          <i className="fab fa-twitter"/>
        </Link>
        <Link to="/tuiter/home" className={`list-group-item ${location.pathname.includes('home') ? 'active' : ''}`}>
          <i className="fa fa-home"/>
          <span className="d-none d-xl-inline-block ms-1">Home</span>
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item ${location.pathname.includes('explore') ? 'active' : ''}`}>
          <i className="fa fa-hashtag"/>
          <span className="d-none d-xl-inline-block ms-1">Explore</span>
        </Link>
        <Link to="#" className={`list-group-item ${location.pathname.includes('notifications') ? 'active' : ''}`}>
          <i className="fa fa-bell"/>
          <span className="d-none d-xl-inline-block ms-1">Notifications</span>
        </Link>
        <Link to="#" className={`list-group-item ${location.pathname.includes('messages') ? 'active' : ''}`}>
          <i className="fa fa-envelope"/>
          <span className="d-none d-xl-inline-block ms-1">Messages</span>
        </Link>
        <Link to="#" className={`list-group-item ${location.pathname.includes('bookmarks') ? 'active' : ''}`}>
          <i className="fa fa-bookmark"/>
          <span className="d-none d-xl-inline-block ms-1">Bookmarks</span>
        </Link>
        <Link to="#" className={`list-group-item ${location.pathname.includes('lists') ? 'active' : ''}`}>
          <i className="fa fa-list"/>
          <span className="d-none d-xl-inline-block ms-1">Lists</span>
        </Link>
        <Link to="/tuiter/profile" className={`list-group-item ${location.pathname.includes('profile') ? 'active' : ''}`}>
          <i className="fa fa-user"/>
          <span className="d-none d-xl-inline-block ms-1">Profile</span>
        </Link>
        <Link to="#" className={`list-group-item ${location.pathname.includes('more') ? 'active' : ''}`}>
          <i className="fa fa-minus-circle"/>
          <span className="d-none d-xl-inline-block ms-1">More</span>
        </Link>
      </div>
      <div className="d-grid mt-2">
        <a href="/#" className="btn btn-primary btn-block rounded-pill">Tweet</a>
      </div>
    </>
  );
}
export default NavigationSidebar;
