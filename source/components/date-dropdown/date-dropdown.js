import $ from 'jquery';
import 'air-datepicker';
import './date-dropdown.scss';

const filterClass = '.js-filter';
const filterInputClass = '.js-input';
const rangeClass = '.js-range';
const fromClass = '.js-from';
const toClass = '.js-to';
const calendarClass = '.js-calendar';

/* Базовая конфигурация datepicker */

const baseConfig = {
  navTitles: {
    days: 'MM yyyy',
  },
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  multipleDatesSeparator: ' - ',
  range: true,
  language: {
    monthsShort: [
      'янв',
      'фев',
      'мар',
      'апр',
      'май',
      'июн',
      'июл',
      'авг',
      'сен',
      'окт',
      'ноя',
      'дек',
    ],
  },
  clearButton: true,
  minDate: new Date(),
};

/* Инициализация плагина datepicker */

/* на странице Cards */

$('.uikit-calendar').datepicker(baseConfig);

/* для фильтра */

const filterItems = $(filterClass);

if (filterItems.length > 0) {
  filterItems.each(function initFilter() {
    const item = $(this);
    const input = item.find(filterInputClass);
    const filterConfig = {
      dateFormat: 'dd M',
      onSelect: date => {
        input.val(date);
      },
    };
    $.extend(true, filterConfig, baseConfig);

    const calendar = item.find(calendarClass);
    $(calendar).datepicker(filterConfig);
  });
}

/* для диапазона дат (вывод в два инпута) */
const rangeItems = $(rangeClass);

if (rangeItems.length > 0) {
  rangeItems.each(function initRange() {
    const item = $(this);
    const dateFrom = item.find(fromClass);
    const dateTo = item.find(toClass);
    const rangeConfig = {
      onSelect: date => {
        const dates = date.split(' - ');
        dateFrom.val(dates[0]);
        dateTo.val(dates[1]);
      },
    };
    $.extend(true, rangeConfig, baseConfig);

    const calendar = item.find(calendarClass);
    $(calendar).datepicker(rangeConfig);
  });
}

/* Открытие / закрытие календаря */

class DateDropdown {
  constructor() {
    this.openedClass = 'date-dropdown--opened';
    this.closedClass = 'date-dropdown--closed';
  }

  init(el) {
    this.dateDropdown = el;

    this.actions();
  }

  show() {
    this.dateDropdown.classList.remove(this.closedClass);
    this.dateDropdown.classList.add(this.openedClass);
  }

  close() {
    this.dateDropdown.classList.add(this.closedClass);
    this.dateDropdown.classList.remove(this.openedClass);
  }

  apply() {
    this.close();
  }

  handler(event, actionName) {
    this.dateDropdown.addEventListener(event, e => {
      const { action } = e.target.dataset;

      if (action === actionName) {
        this[action]();
      }
    });
  }

  actions() {
    this.handler('focusin', 'show');
    this.handler('click', 'apply');
  }
}

function initDateDropdowns() {
  const dateDropdowns = document.querySelectorAll('.js-date-dropdown');

  if (dateDropdowns.length > 0) {
    for (let i = 0; i < dateDropdowns.length; i += 1) {
      const el = dateDropdowns[i];
      const dateDropdown = new DateDropdown();
      dateDropdown.init(el);
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initDateDropdowns();
});
