const NavigationItem = (navigation, isActive) => {
  return(`
    <a class="list-group-item ${isActive ? 'active' : ''}" href="${navigation.path}">
      <i class="${navigation.icon}"></i>
      <span class="d-none d-xl-inline-block">${navigation.title}</span>
    </a>
  `);
}

export default NavigationItem;

