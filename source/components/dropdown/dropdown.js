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
    };
  }

  init(el) {
    this.dropdown = el;
    this.field = el.querySelector('.js-dropdown__input');
    this.items = el.querySelectorAll('.js-dropdown__item');
    this.totals = el.querySelectorAll('.js-dropdown__number');

    this.initTotals();
    this.writeField();
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
    const values = [];

    this.options.forEach(option => {
      const txtArr = this.txtForms[option.name];
      const name = Dropdown.declension(option.total, txtArr);
      const value = `${option.total} ${name}`;
      values.push(value);
    });

    const fieldValue = values.join(', ');
    this.field.value = fieldValue;
    this.options = [];
  }

  actions() {
    this.dropdown.addEventListener('click', e => {
      if (e.target.dataset.action) {
        this.writeField();
      }
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
