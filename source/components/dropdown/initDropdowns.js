import Dropdown from './Dropdown';

function initDropdowns(selector) {
  const dropdowns = [...document.querySelectorAll(selector)];
  dropdowns.forEach((dropdown) => {
    // const i = new Dropdown(dropdown);
    // console.log(i);
    (() => new Dropdown(dropdown))();
  });
}

export default initDropdowns;
