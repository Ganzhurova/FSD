import Control from '../control/Control';

class DropdownBody {
  constructor(dropdownInstance, options = {}) {
    this.parent = dropdownInstance;
    this.options = options;
    this.element = this.parent.element.querySelector(this.options.bodySelector);
    this.control = null;

    this.initializeControl();
  }

  initializeControl() {
    if (!this.options.control) return;

    const controlElement = this.element.querySelector('.js-control');
    this.control = new Control(controlElement, this);
  }

  sendData(txt, data) {
    this.parent.updateOutput(txt);
    this.parent.setData(data);
  }

  hideButtonClear(boolean) {
    this.control?.hideButtonClear(boolean);
  }
}

export default DropdownBody;
