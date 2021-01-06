class Total {
  init(el) {
    this.total = el;
    this.input = el.querySelector('.js-dropdown__total');
    this.value = Number(el.querySelector('.js-dropdown__total').value);
    this.minusButton = el.querySelector('[data-action = minus]');
    this.plusButton = el.querySelector('[data-action = plus]');

    this.checkValue();
    this.actions();
  }

  checkValue() {
    if (this.value === 0) {
      this.minusButton.disabled = true;
    } else {
      this.minusButton.disabled = false;
    }
  }

  actions() {
    this.total.addEventListener('click', e => {
      if (e.target.dataset.action) {
        e.preventDefault();

        const { action } = e.target.dataset;
        if (action === 'minus') {
          this.value -= 1;
        } else if (action === 'plus') {
          this.value += 1;
        }

        this.input.value = this.value;
        this.checkValue();
      }
    });
  }
}

export default Total;
