const TabItem = (tab, isActive) => {
  return(`
    <li class="nav-item">
      <a class="nav-link ${isActive ? 'active' : ''}" href="${tab.path}">${tab.name}</a>
    </li>
  `);
}

export default TabItem;

