import handlerDataAction from '../../helpers/handlerDataAction';

class Total {
  constructor(element, parentInstance) {
    this.parent = parentInstance;
    this.element = element;
    this.inputElement = this.element.querySelector('input');
    this.value = +this.inputElement.value;

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
    this.inputElement.value = number;
    this.disableDecreaseButton();
  }

  disableDecreaseButton() {
    const decreaseButton = this.element.querySelector(
      '[data-action = decrease]'
    );
    decreaseButton.disabled = this.value === 0;
  }

  sendValue() {
    this.parent.updateItems(this.inputElement.name, this.inputElement.value);
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
