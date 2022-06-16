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
    this.outputs = [];

    this.setOutputs();
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

  setOutputs() {
    this.outputs = [...this.el.querySelectorAll(this.options.targetSelector)];
  }

  updateOutput(txt) {
    let txtArr = [];

    if (this.outputs.length > 1) {
      txtArr = txt.split(',');
    } else {
      txtArr.push(txt);
    }

    this.outputs.forEach((output, i) => {
      output.value = txtArr[i] || '';
    });
  }
}

export default Dropdown;
