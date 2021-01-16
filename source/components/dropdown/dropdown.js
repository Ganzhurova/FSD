import './dropdown.scss';
import './img/arrow.svg';
import Total from './Total';

class Dropdown {
  constructor() {
    this.options = [];
    this.initiatedTotals = [];
    this.txtForms = {
      bedroom: ['спален', 'спальня', 'спальни'],
      bed: ['кроватей', 'кровать', 'кровати'],
      bathroom: ['ванных комнат', 'ванная комната', 'ванные комнаты'],
      guest: ['гостей', 'гость', 'гостя'],
      baby: ['младенцев', 'младенец', 'младенца'],
    };
    this.autoClose = true;
    this.bodyHandler = this.bodyHandler.bind(this);
  }

  init(el) {
    this.dropdown = el;
    this.field = el.querySelector('.js-dropdown__input');
    this.items = el.querySelectorAll('.js-dropdown__item');
    this.totals = el.querySelectorAll('.js-dropdown__number');
    this.buttonApply = el.querySelector('[data-action = apply]');
    this.buttonClear = el.querySelector('[data-action = clear]');

    if (this.buttonApply) {
      this.autoClose = false;
    }

    this.initTotals();
    this.writeField();
    this.dataShow();
    this.actions();
  }

  initTotals() {
    this.totals.forEach(el => {
      const total = new Total();
      total.init(el);
      this.initiatedTotals.push(total);
    });
  }

  getOptions() {
    this.items.forEach(item => {
      let isUnique = true;
      const option = {};
      option.name = item.dataset.option;
      option.total = Number(item.querySelector('.js-dropdown__total').value);

      for (const value of this.options) {
        if (option.name === value.name) {
          isUnique = false;
          value.total += option.total;
        }
      }

      if (isUnique) {
        this.options.push(option);
      }
    });
  }

  static declension(n, txtArr) {
    const num = Number(n);
    if (num === 1) {
      return txtArr[1];
    }
    if (num > 1 && num < 5) {
      return txtArr[2];
    }
    return txtArr[0];
  }

  toggleButtonClear() {
    if (!this.buttonClear) {
      return;
    }

    const inputs = this.dropdown.querySelectorAll('.js-dropdown__total');
    const values = [];

    inputs.forEach(input => {
      values.push(Number(input.value));
    });

    const value = values.reduce((acc, number) => {
      const total = number;
      return acc + total;
    }, 0);

    if (value === 0) {
      this.buttonClear.style.display = 'none';
    } else {
      this.buttonClear.removeAttribute('style');
    }
  }

  writeField() {
    this.getOptions();
    const values = [];
    const { placeholder } = this.field;

    this.options.forEach(option => {
      if (!placeholder || (placeholder && option.total > 0)) {
        const txtArr = this.txtForms[option.name];
        const name = Dropdown.declension(option.total, txtArr);
        const result = `${option.total} ${name}`;
        values.push(result);
      }
    });

    const fieldValue = values.join(', ');
    this.field.value = fieldValue;
    this.options = [];

    this.toggleButtonClear();
  }

  show() {
    this.dropdown.classList.remove('dropdown--hidden');
    this.dropdown.classList.add('dropdown--show');

    if (this.autoClose) {
      document.body.addEventListener('click', this.bodyHandler);
      document.body.addEventListener('focusin', this.bodyHandler);
    }
  }

  close(e) {
    if (
      (this.autoClose &&
        !(e.target.closest('.js-dropdown') === this.dropdown)) ||
      !this.autoClose
    ) {
      this.dropdown.classList.remove('dropdown--show');
      this.dropdown.classList.add('dropdown--hidden');
    }

    if (
      this.autoClose &&
      !(e.target.closest('.js-dropdown') === this.dropdown)
    ) {
      document.body.removeEventListener('click', this.bodyHandler);
      document.body.removeEventListener('focusin', this.bodyHandler);
    }
  }

  bodyHandler(e) {
    this.close(e);
  }

  dataShow() {
    if (this.dropdown.dataset.show) {
      this.autoClose = false;
      this.show();
    }
  }

  clear() {
    const inputs = this.dropdown.querySelectorAll('input');

    inputs.forEach(input => {
      if (input.type.toLowerCase() === 'number') {
        const number = input;
        number.value = 0;
      } else if (
        input.type.toLowerCase() === ('text' || 'email' || 'password')
      ) {
        const text = input;
        text.value = '';
      }
    });

    this.initiatedTotals.forEach(total => {
      total.setDefaultValue();
      total.checkValue();
    });

    this.toggleButtonClear();
  }

  apply(e) {
    this.close(e);
  }

  actions() {
    this.dropdown.addEventListener('click', e => {
      const { action } = e.target.dataset;

      if (action === 'minus' || action === 'plus') {
        this.writeField();
      } else {
        if (!action) {
          return;
        }
        this[action](e);
      }
    });

    this.field.addEventListener('focus', () => {
      this.show();
    });
  }
}

function initDropdowns() {
  const dropdowns = document.querySelectorAll('.js-dropdown');

  for (let i = 0; i < dropdowns.length; i += 1) {
    const dropdownEl = dropdowns[i];
    const dropdown = new Dropdown();
    dropdown.init(dropdownEl);
    console.log(dropdown);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initDropdowns();
});
