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
});
