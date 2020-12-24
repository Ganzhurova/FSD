import $ from 'jquery';
import './datepicker.scss';

$('.datepicker-here').datepicker({
  navTitles: {
    days: 'MM yyyy',
  },
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  range: true,
  multipleDatesSeparator: ' - ',
  clearButton: true,
  todayButton: true,
});

const uikitCalendar = $('.uikit-calendar')
  .datepicker()
  .data('datepicker');

uikitCalendar.date = new Date(2019, 7, 8);

uikitCalendar.update({
  onRenderCell(date, cellType) {
    if (cellType === 'day' && date.getDate() === 8) {
      return {
        classes: '-current-',
      };
    }
    return false;
  },
});
