/* global $ */

import 'air-datepicker';

function getDatepicker(calendarEl) {
  return $(calendarEl).datepicker().data('datepicker');
}

export default getDatepicker;
