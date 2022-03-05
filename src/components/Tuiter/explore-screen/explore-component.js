import React from "react";
import './index.css';
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
  return(
    <>
      <div className="d-flex justify-content-between">
        <div className="w-100 me-3">
          <i className="fa fa-search text-muted wd-search-icon" />
          <input type="text" className="form-control wd-search" placeholder="Search Tuiter" />
        </div>
        <a className="wd-settings" href="/#"><i className="fa fa-cog" /></a>
      </div>
      <ul className="nav mb-2 nav-tabs mt-2">
        <li className="nav-item"><a className="nav-link active" href="/#">For you</a></li>
        <li className="nav-item"><a className="nav-link" href="/#">Trending</a></li>
        <li className="nav-item"><a className="nav-link" href="/#">News</a></li>
        <li className="nav-item"><a className="nav-link" href="/#">Sports</a></li>
        <li className="nav-item"><a className="nav-link" href="/#">Entertainment</a></li>
      </ul>
      <div className="row">
        <div className="carousel slide mb-2 me-auto" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" alt="" className="img-fluid"/>
              <div className="h2 carousel-caption fw-bold">SpaceX's Starship</div>
            </div>
          </div>
        </div>
      </div>
      <PostSummaryList />
    </>
  );
}
export default ExploreComponent;

