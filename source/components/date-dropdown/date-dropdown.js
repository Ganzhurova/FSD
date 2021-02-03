import $ from 'jquery';
import 'air-datepicker';
import './date-dropdown.scss';

const rangeInitClass = '.js-range-date-dropdown';
const filterInitClass = '.js-filter-date-dropdown';
const rangeWrapClass = '.date-dropdown--range';
const rangeFromClass = '.js-date-dropdown-from';
const rangeToClass = '.js-date-dropdown-to';

/* Базовая конфигурация datepicker */
const baseConfig = {
  navTitles: {
    days: 'MM yyyy',
  },
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  multipleDatesSeparator: ' - ',
  range: true,
  clearButton: true,
  minDate: new Date(),
};

/* Инициализация плагина datepicker */

/* для фильтра */
const filterConfig = { dateFormat: 'dd M' };

$.extend(true, filterConfig, baseConfig);

$(filterInitClass).datepicker(filterConfig);

/* для диапазона дат (вывод в два инпута) */
const rangeItems = $(rangeWrapClass);

if (rangeItems.length > 0) {
  rangeItems.each(function initRange() {
    const item = $(this);
    const dateFrom = item.find(rangeFromClass);
    const dateTo = item.find(rangeToClass);
    const rangeConfig = {
      onSelect: date => {
        const dates = date.split(' - ');
        dateFrom.val(dates[0]);
        dateTo.val(dates[1]);
      },
    };
    $.extend(true, rangeConfig, baseConfig);
    item.find(rangeInitClass).datepicker(rangeConfig);

    const datepicker = item.find(rangeInitClass).data('datepicker');

    dateFrom.click(() => {
      datepicker.show();
    });

    dateTo.click(() => {
      datepicker.show();
    });
  });
}

/* Добавление кнопки "Применить" */

const buttonApply = $(
  '<span class="datepicker--button datepicker--button-apply" data-action="apply">Применить</span>'
);

$('.datepicker--buttons').append(buttonApply);

$.fn.datepicker.language.ru = {
  days: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ],
  daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
  daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  months: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
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
  today: 'Сегодня',
  clear: 'Очистить',
  dateFormat: 'dd.mm.yyyy',
  timeFormat: 'hh:ii',
  firstDay: 1,
};
