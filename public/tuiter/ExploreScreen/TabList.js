import TabItem from "./TabItem.js";
import tabs from "./tabs.js";

const TabList = (active) => {
  return(`
    <ul class="nav mb-2 nav-tabs mt-2">
      ${
        tabs.map(tab => {
          const isActive = active.toUpperCase() === tab.name.toUpperCase();
          return(TabItem(tab, isActive));
        }).join('')
      }
    </ul>
  `);
}
export default TabList;