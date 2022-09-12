import handlerDataAction from '../../helpers/handlerDataAction';

class Control {
  constructor(el, parentInstance) {
    this.el = el;
    this.parent = parentInstance;
    this.buttonClear = this.el.querySelector('[data-action = clear]');

    this.addDataActionListener();
  }

  clear() {
    this.parent.handleButtonClearClick();
  }

  apply() {
    this.parent.handleButtonApplyClick();
  }

  hideButtonClear(boolean) {
    this.buttonClear.style.visibility = boolean ? 'hidden' : '';
  }
}

Object.assign(Control.prototype, handlerDataAction);

export default Control;
