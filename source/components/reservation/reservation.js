import helpers from '../../helpers/helpers';
import Dropdown from '../dropdown/Dropdown';

class Reservation {
  constructor(el, data) {
    this.el = el;
    this.data = {
      dates: [],
      guests: {},
      price: data.price,
      services: data.charge.services,
      discount: data.charge.discount,
      addservices: data.charge.addservices,
    };
    this.outputs = {};

    this.setOutputs();
    this.init();
  }

  init() {
    this.rangeDropdown = new Dropdown(
      this.el.querySelector('.js-range-dropdown'),
      this,
      'dates'
    );
    this.guestsDropdown = new Dropdown(
      this.el.querySelector('.js-guests-dropdown'),
      this,
      'guests'
    );
  }

  setOutputs() {
    this.outputs = {
      days: this.el.querySelector('[data-days]'),
      subtotal: this.el.querySelector('[data-subtotal=calculation]'),
      total: this.el.querySelector('[data-total]'),
    };
  }

  calculation() {
    const isEmpty = (target) => {
      if (Array.isArray(target)) {
        return !target.length;
      }
      return !Object.keys(target).length;
    };

    const getDiffDays = (startDate, endDate) => {
      const timeDiff = endDate - startDate;
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    };

    const getDaysText = (days) => {
      const txtArr = ['суток', 'сутки', 'суток'];
      return `${days} ${helpers.declension(days, txtArr)}`;
    };

    if (
      isEmpty(this.data.dates) ||
      isEmpty(this.data.guests) ||
      this.data.dates.length === 1
    )
      return;

    const days = getDiffDays(...this.data.dates);
    const subtotal = days * this.data.price;
    const total =
      subtotal -
      (this.data.discount - this.data.services - this.data.addservices);

    this.showText(getDaysText(days), 'days');
    this.showText(subtotal, 'subtotal');
    this.showText(total, 'total');
  }

  showText(text, key) {
    this.outputs[key].textContent = text;
  }

  updateData(key, data) {
    this.data[key] = data;
    this.calculation();
  }
}

export default Reservation;
