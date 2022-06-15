import './total.scss';

class Total {
  constructor(el, parentInstance) {
    this.parent = parentInstance;
    this.el = el;
    this.inputEl = this.el.querySelector('input');
    this.value = +this.inputEl.value;

    this.disableDecreaseButton();
    this.addEventListeners();
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
    this.value -= 1;
    this.setInputValue(this.value);
    this.sendValue();
  }

  increase() {
    this.value += 1;
    this.setInputValue(this.value);
    this.sendValue();
  }

  handlerDataAction(evt) {
    const { action } = evt.target.dataset;

    if (action && this[action]) {
      this[action]();
    }
  }

  addEventListeners() {
    this.handlerDataAction = this.handlerDataAction.bind(this);

    this.el.addEventListener('click', this.handlerDataAction);
  }
}

export default Total;
