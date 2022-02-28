import PostSummaryList from "../PostSummaryList/index.js";
import TabList from "./TabList.js";

const ExploreComponent = () => {
  return(`
    <div class="d-flex justify-content-between">
      <div class="w-100 me-3">
        <i class="fa fa-search text-muted wd-search-icon"></i>
        <input type="text" class="form-control wd-search" placeholder="Search Tuiter" />
      </div>
      <a class="wd-settings" href="explore-setting.html"><i class="fa fa-cog"></i></a>
    </div>
    ${TabList('for you')}
    <div class="row">
      <div class="carousel slide mb-2 me-auto" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" alt="" class="img-fluid"/>
            <div class="h2 carousel-caption text-light fw-bold">SpaceX's Starship</div>
          </div>
        </div>
      </div>
    </div>
    ${PostSummaryList()}
  `);
}
export default ExploreComponent;

