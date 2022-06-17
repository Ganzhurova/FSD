import handlerDataAction from '../../helpers/handlerDataAction';

class Total {
  constructor(el, parentInstance) {
    this.parent = parentInstance;
    this.el = el;
    this.inputEl = this.el.querySelector('input');
    this.value = +this.inputEl.value;

    this.disableDecreaseButton();
    this.addDataActionListener();
    this.sendValue();
  }

  setValue(number) {
    this.value = number;
    this.setInputValue(this.value);
    this.sendValue();
  }

  setInputValue(number) {
    this.inputEl.value = number;
    this.disableDecreaseButton();
  }

  disableDecreaseButton() {
    const decreaseButton = this.el.querySelector('[data-action = decrease]');
    decreaseButton.disabled = this.value === 0;
  }

  sendValue() {
    this.parent.updateItems(this.inputEl.name, this.inputEl.value);
  }

  decrease() {
    this.setValue((this.value -= 1));
  }

  increase() {
    this.setValue((this.value += 1));
  }
}

Object.assign(Total.prototype, handlerDataAction);

export default Total;
