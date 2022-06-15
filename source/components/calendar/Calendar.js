import DropdownBody from '../dropdown1/DropdownBody';
import getDatepicker from './getDatepicker';
import './calendar.scss';

class Calendar extends DropdownBody {
  constructor(dropdownInstance, options = {}) {
    super(dropdownInstance, options);

    this.datepicker = null;

    this.getDatepicker();
    this.addHandlerCellSelect();
  }

  getDatepicker() {
    const calendarEl = this.el.querySelector('.js-datepicker');
    this.datepicker = getDatepicker(calendarEl);
  }

  updateDatepicer(config) {
    this.datepicker.update(config);
  }

  addHandlerCellSelect() {
    const sendText = this.sendText.bind(this);
    const config = {
      onSelect(formattedDate) {
        const date = formattedDate;
        sendText(date);
      },
    };
    this.updateDatepicer(config);
  }
}

export default Calendar;
