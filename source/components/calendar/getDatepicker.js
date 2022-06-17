/* global $ */

import 'air-datepicker';
import baseConfig from './config/baseConfig';

function getDatepicker(calendarEl) {
  return $(calendarEl).datepicker(baseConfig).data('datepicker');
}

export default getDatepicker;
