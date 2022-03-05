import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
                             active = 'explore'
                           }
) => {
  return(
    <>
      <div className="list-group">
        <Link to="/" className={`list-group-item`}>
          <i className="fab fa-twitter"/>
        </Link>
        <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
          <i className="fa fa-home"/>
          <span className="d-none d-xl-inline-block ms-1">Home</span>
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
          <i className="fa fa-hashtag"/>
          <span className="d-none d-xl-inline-block ms-1">Explore</span>
        </Link>
        <Link to="#" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
          <i className="fa fa-bell"/>
          <span className="d-none d-xl-inline-block ms-1">Notifications</span>
        </Link>
        <Link to="#" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
          <i className="fa fa-envelope"/>
          <span className="d-none d-xl-inline-block ms-1">Messages</span>
        </Link>
        <Link to="#" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
          <i className="fa fa-bookmark"/>
          <span className="d-none d-xl-inline-block ms-1">Bookmarks</span>
        </Link>
        <Link to="#" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
          <i className="fa fa-list"/>
          <span className="d-none d-xl-inline-block ms-1">Lists</span>
        </Link>
        <Link to="#" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
          <i className="fa fa-user"/>
          <span className="d-none d-xl-inline-block ms-1">Profile</span>
        </Link>
        <Link to="#" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
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
