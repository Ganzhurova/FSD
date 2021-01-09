import './dropdown.scss';
import './img/arrow.svg';
import Total from './Total';

class Dropdown {
  constructor() {
    this.options = [];
    this.txtForms = {
      bedroom: ['спален', 'спальня', 'спальни'],
      bed: ['кроватей', 'кровать', 'кровати'],
      bathroom: ['ванных комнат', 'ванная комната', 'ванные комнаты'],
      guest: ['гостей', 'гость', 'гостя'],
      baby: ['младенцев', 'младенец', 'младенца'],
    };
    this.bodyHandler = this.bodyHandler.bind(this);
  }

  init(el) {
    this.dropdown = el;
    this.field = el.querySelector('.js-dropdown__input');
    this.items = el.querySelectorAll('.js-dropdown__item');
    this.totals = el.querySelectorAll('.js-dropdown__number');

    this.initTotals();
    this.writeField();
    this.dataActions();
    this.actions();
  }

  initTotals() {
    this.totals.forEach(el => {
      const total = new Total();
      total.init(el);
    });
  }

  getOptions() {
    this.items.forEach(item => {
      const option = {};
      option.name = item.querySelector('[data-option]').dataset.option;
      option.total = item.querySelector('.js-dropdown__total').value;
      this.options.push(option);
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

  writeField() {
    this.getOptions();

    const value = this.options.reduce((acc, option) => {
      const tally = acc;
      const total = Number(option.total);

      if (!tally[option.name]) {
        tally[option.name] = total;
      } else {
        tally[option.name] += total;
      }
      return tally;
    }, {});

    const values = [];

    for (const key in value) {
      if ({}.hasOwnProperty.call(value, key)) {
        const txtArr = this.txtForms[key];
        const name = Dropdown.declension(value[key], txtArr);
        const result = `${value[key]} ${name}`;
        values.push(result);
      }
    }

    const fieldValue = values.join(', ');
    this.field.value = fieldValue;
    this.options = [];
  }

  show() {
    this.dropdown.classList.remove('dropdown--hidden');
    this.dropdown.classList.add('dropdown--show');
    document.body.addEventListener('click', this.bodyHandler);
    document.body.addEventListener('focusin', this.bodyHandler);
  }

  close(e) {
    if (!e.target.closest('.js-dropdown')) {
      this.dropdown.classList.remove('dropdown--show');
      this.dropdown.classList.add('dropdown--hidden');
      document.body.removeEventListener('click', this.bodyHandler);
      document.body.removeEventListener('focusin', this.bodyHandler);
    }
  }

  bodyHandler(e) {
    this.close(e);
  }

  dataActions() {
    if (this.dropdown.dataset.show) {
      this.show();
    }
  }

  actions() {
    this.dropdown.addEventListener('click', e => {
      if (e.target.dataset.action) {
        this.writeField();
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
