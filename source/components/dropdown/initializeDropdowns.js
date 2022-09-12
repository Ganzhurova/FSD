import Dropdown from './Dropdown';

function initializeDropdowns(selector) {
  const dropdowns = [...document.querySelectorAll(selector)];
  dropdowns.forEach((dropdown) => {
    (() => new Dropdown(dropdown))();
  });
}

export default initializeDropdowns;
