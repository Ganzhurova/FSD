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
    this.getOptions();
    // this.writeField();
    this.dataShow();
    this.actions();
  }

  initTotals() {
    this.totals.forEach(el => {
      const total = new Total();
      total.init(el);
    });
  }

  getOptions() {
    // const set = new Set();

    this.items.forEach(item => {
      let unique = true;
      const option = {};
      option.name = item.dataset.option;
      option.total = Number(item.querySelector('.js-dropdown__total').value);

      for (const value of this.options) {
        if (option.name === value.name) {
          unique = false;
          value.total += option.total;
        }
      }

      if (unique) {
        this.options.push(option);
      }
    });

    // this.options = [...set];
    console.log(this.options);
  }

  // getHiddenOptionsAtZero() {
  //   this.items.forEach(item => {
  //     const hiddenOption = item.querySelector('[data-hide-at-zero]');
  //     if (hiddenOption) {
  //       const key = hiddenOption.dataset.option;
  //       const value = hiddenOption.dataset.hideAtZero;
  //       this.hiddenOptionsAtZero[key] = value;
  //     }
  //   });
  // }

  updateOptions(e) {
    this.items.forEach(item => {
      const itemClass = String(item.classList.value);
      const parent = e.target.closest(itemClass);
      console.log(parent);
      console.log(itemClass);
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
    const buttonClear = this.dropdown.querySelector('[data-action = clear]');

    if (!buttonClear) {
      return;
    }

    const value = this.options.reduce((acc, option) => {
      const total = Number(option.total);
      return acc + total;
    }, 0);

    if (value === 0) {
      buttonClear.style.display = 'none';
    } else {
      buttonClear.removeAttribute('style');
    }
  }

  writeField() {
    this.getOptions();
    this.getHiddenOptionsAtZero();

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
    const { placeholder } = this.field;

    for (const key in value) {
      if ({}.hasOwnProperty.call(value, key)) {
        const hiddenOption = this.hiddenOptionsAtZero[key];
        const txtArr = this.txtForms[key];
        const total = value[key];
        const name = Dropdown.declension(total, txtArr);

        if (!hiddenOption || (hiddenOption && total > 0)) {
          if (!placeholder || (placeholder && total > 0)) {
            const result = `${total} ${name}`;
            values.push(result);
          }
        }
      }
    }

    const fieldValue = values.join(', ');
    this.field.value = fieldValue;

    this.toggleButtonClear();

    this.options = [];
  }

  show() {
    this.dropdown.classList.remove('dropdown--hidden');
    this.dropdown.classList.add('dropdown--show');
    document.body.addEventListener('click', this.bodyHandler);
    document.body.addEventListener('focusin', this.bodyHandler);
  }

  close(e) {
    if (!(e.target.closest('.js-dropdown') === this.dropdown)) {
      this.dropdown.classList.remove('dropdown--show');
      this.dropdown.classList.add('dropdown--hidden');
      document.body.removeEventListener('click', this.bodyHandler);
      document.body.removeEventListener('focusin', this.bodyHandler);
    }
  }

  bodyHandler(e) {
    this.close(e);
  }

  dataShow() {
    if (this.dropdown.dataset.show) {
      this.show();
    }
  }

  clear() {
    this.field.value = '';
  }

  actions() {
    this.dropdown.addEventListener('click', e => {
      const { action } = e.target.dataset;

      if (action === 'minus' || action === 'plus') {
        this.updateOptions(e);
        // this.writeField();
      } else {
        this[action]();
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
