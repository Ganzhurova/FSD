import $ from 'jquery';
import 'air-datepicker';
import './date-dropdown.scss';

$('.datepicker-here').datepicker({
  navTitles: {
    days: 'MM yyyy',
  },
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  multipleDatesSeparator: ' - ',
  clearButton: true,
  todayButton: true,
  minDate: new Date(),
});

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

const $start = $('.js-datepicker-start');
const $end = $('.js-datepicker-end');

$start.datepicker({
  onSelect(fd, date) {
    $end.data('datepicker').update('minDate', date);
    $end.focus();
  },
});

$end.datepicker({
  onSelect(fd, date) {
    $start.data('datepicker').update('maxDate', date);
  },
});
