import Control from '../control/Control';

class DropdownBody {
  constructor(dropdownInstance, options = {}) {
    this.parent = dropdownInstance;
    this.options = options;
    this.el = this.parent.el.querySelector(this.options.bodySelector);
    this.control = null;

    this.initControl();
  }

  initControl() {
    if (!this.options.control) return;

    const controlEl = this.el.querySelector('.js-control');
    this.control = new Control(controlEl, this);
  }
}

export default DropdownBody;
