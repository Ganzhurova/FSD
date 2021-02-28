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

    // const datepicker = $(calendar).data('datepicker');
    //
    // dateFrom.click(() => {
    //   datepicker.hide();
    // });
    //
    // dateTo.click(() => {
    //   datepicker.show();
    // });
  });
}

/* Добавление кнопки "Применить" */

// const buttonApply = $(
//   '<span class="datepicker--button datepicker--button-apply">Применить</span>'
// );
//
// $('.datepicker--buttons').append(buttonApply);
//
// const apply = $('.datepicker--button-apply');
// console.log(apply);
// apply.on('click', () => {
//   console.log(1);
// });
