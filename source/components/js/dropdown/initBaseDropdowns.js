import BaseDropdown from './BaseDropdown';

function initBaseDropdowns(selector, options) {
  const dropdowns = [...document.querySelectorAll(selector)];
  dropdowns.forEach((dropdown) => {
    (() => new BaseDropdown(dropdown, options))();
  });
}

export default initBaseDropdowns;
