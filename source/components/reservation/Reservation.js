import helpers from '../../helpers/helpers';
import Dropdown from '../dropdown/Dropdown';

class Reservation {
  constructor(element, data) {
    this.element = element;
    this.data = {
      dates: [],
      guests: {},
      price: data.price,
      services: data.charge.services,
      discount: data.charge.discount,
      addservices: data.charge.addservices,
    };
    this.outputs = {};
    this.reservationButton = this.element.querySelector('.js-button');

    this.setOutputs();
    this.initialize();
  }

  initialize() {
    this.rangeDropdown = new Dropdown(
      this.element.querySelector('.js-reservation__dates .js-dropdown'),
      this,
      'dates'
    );
    this.guestsDropdown = new Dropdown(
      this.element.querySelector('.js-reservation__guests .js-dropdown'),
      this,
      'guests'
    );
  }

  setOutputs() {
    this.outputs = {
      days: this.element.querySelector('[data-days]'),
      calculation: this.element.querySelector('[data-subtotal=calculation]'),
      services: this.element.querySelector('[data-subtotal=services]'),
      addservices: this.element.querySelector('[data-subtotal=add-services]'),
      discount: this.element.querySelector('[data-discount]'),
      total: this.element.querySelector('[data-total]'),
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
    ) {
      this.resetСalculation();
      this.disableReservationButton(true);
      return;
    }

    const days = getDiffDays(...this.data.dates);
    const calculation = days * this.data.price;
    const total =
      calculation -
      (this.data.discount - this.data.services - this.data.addservices);

    this.disableReservationButton(false);
    this.displayValues();
    this.showText(getDaysText(days), 'days');
    this.showText(calculation, 'calculation');
    this.showText(total, 'total');
  }

  showText(text, key) {
    this.outputs[key].textContent = text;
  }

  displayValues() {
    this.showText(this.data.services, 'services');
    this.showText(this.data.addservices, 'addservices');
    this.showText(this.data.discount, 'discount');
  }

  resetСalculation() {
    Object.keys(this.outputs).forEach((key) => {
      this.showText('0', key);
    });
  }

  disableReservationButton(boolean) {
    this.reservationButton.disabled = boolean;
  }

  updateData(key, data) {
    this.data[key] = data;
    this.calculation();
  }
}

export default Reservation;
