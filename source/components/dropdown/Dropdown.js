import BaseDropdown from '../js/dropdown/BaseDropdown';
import bodyDesc from './data/bodyDesc';
import bodyMap from './data/bodyMap';

class Dropdown extends BaseDropdown {
  constructor(element, parent, key) {
    const options = {
      targetSelector: '.js-dropdown__input',
      closeClass: 'dropdown_hidden',
      openClass: 'dropdown_show',
    };
    super(element, options);

    this.parent = parent || null;
    this.parentDataKey = key || null;
    this.mode = '';
    this.body = null;
    this.outputs = [];
    this.data = null;

    this.setOutputs();
    this.setMode();
    this.setBody();
  }

  setMode() {
    this.mode = this.element.querySelector('[data-mode]').dataset.mode;
  }

  setBody() {
    const body = bodyDesc[this.mode];
    const BodyClass = bodyMap[body.name]();
    const dataAttr = this.getDataAttr();
    this.body = new BodyClass(this, { ...body.data, ...dataAttr });
  }

  setOutputs() {
    this.outputs = [
      ...this.element.querySelectorAll(this.options.targetSelector),
    ];
  }

  setData(data) {
    this.data = data;
    this.parent?.updateData(this.parentDataKey, this.data);
  }

  getDataAttr() {
    let data = {};
    this.outputs.forEach((output) => {
      data = { ...data, ...output.dataset };
    });
    return data;
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
