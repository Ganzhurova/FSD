import Dropdown from './Dropdown';

function initDropdowns(selector) {
  const dropdowns = [...document.querySelectorAll(selector)];
  dropdowns.forEach((dropdown) => {
    (() => new Dropdown(dropdown))();
  });
}

export default initDropdowns;
