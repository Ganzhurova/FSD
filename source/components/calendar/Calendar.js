import DropdownBody from '../dropdown1/DropdownBody';
import getDatepicker from './getDatepicker';
import './calendar.scss';

class Calendar extends DropdownBody {
  constructor(dropdownInstance, options = {}) {
    super(dropdownInstance, options);

    this.datepicker = null;

    this.initDatepicker();
  }

  initDatepicker() {
    const calendarEl = this.el.querySelector('.js-datepicker');
    this.datepicker = getDatepicker(calendarEl);
  }
}

export default Calendar;
