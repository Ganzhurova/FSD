import BaseDropdown from '../js/dropdown/BaseDropdown';
import bodyDesc from './data/body-desc';
import bodyMap from './data/body-map';

class Dropdown extends BaseDropdown {
  constructor(el) {
    const options = {
      targetSelector: '.js-dropdown-input',
      closeClass: 'dropdown--hidden',
      openClass: 'dropdown--show',
    };
    super(el, options);

    this.mode = '';
    this.body = null;

    this.setMode();
    this.setBody();
  }

  setMode() {
    this.mode = this.el.querySelector('[data-mode]').dataset.mode;
  }

  setBody() {
    const body = bodyDesc[this.mode];
    const BodyClass = bodyMap[body.name]();
    this.body = new BodyClass(this, body.data);
  }

  updateOutput(txt) {
    const output = this.el.querySelector(this.options.targetSelector);
    output.value = txt;
  }

  // handlerBodyClick(evt) {
  //   const availableEl = this.body.getAvailableEl(evt);
  //   super.handlerBodyClick({ target: availableEl });
  // }

  handlerDataAction(evt) {
    const { action } = evt.target.dataset;

    if (action && this[action]) {
      this[action]();
    }
  }

  addEventListeners() {
    super.addEventListeners();
    this.handlerDataAction = this.handlerDataAction.bind(this);

    this.el.addEventListener('click', this.handlerDataAction);
  }
}

export default Dropdown;
