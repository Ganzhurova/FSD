import handlerDataAction from '../../helpers/handlerDataAction';

class Control {
  constructor(element, parentInstance) {
    this.element = element;
    this.parent = parentInstance;
    this.buttonClear = this.element.querySelector('[data-action = clear]');

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
