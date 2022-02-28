import NavigationItem from "./NavigationItem.js";
import navigations from "./navigations.js";

const NavigationSidebar = (active) => {
  return(`
    <div class="list-group">
      ${
        navigations.map(navigation => {
          const isActive = active.toUpperCase() === navigation.title.toUpperCase();
          return(NavigationItem(navigation, isActive));
        }).join('')
      }
    </div>
    <div class="d-grid mt-2">
      <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
    </div>
  `);
}
export default NavigationSidebar;

