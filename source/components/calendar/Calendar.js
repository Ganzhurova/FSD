import DropdownBody from '../dropdown1/DropdownBody';
import getDatepicker from './getDatepicker';
import './calendar.scss';

class Calendar extends DropdownBody {
  constructor(dropdownInstance, options = {}) {
    super(dropdownInstance, options);

    this.datepicker = null;

    this.initDatepicker();
    this.addHandlerCellSelect();
  }

  initDatepicker() {
    const calendarEl = this.el.querySelector('.js-datepicker');
    this.datepicker = getDatepicker(calendarEl);
    this.receiveDates();
  }

  receiveDates() {
    const datesArr = this.parent.getOutputsText();

    if (!datesArr[0]) {
      this.hideButtonClear(true);
      return;
    }

    const convert = (dateString) => {
      const [day, month, year] = [...dateString.split('.')];
      return new Date(year, month - 1, day);
    };

    const dates = datesArr.map((date) => convert(date));
    this.datepicker.selectDate(dates);
  }

  updateDatepicer(config) {
    this.datepicker.update(config);
  }

  addHandlerCellSelect() {
    const sendText = this.sendText.bind(this);
    const hideButtonClear = this.hideButtonClear.bind(this);

    const config = {
      onSelect(formattedDate) {
        const date = formattedDate;
        hideButtonClear(date === '');
        sendText(date);
      },
    };
    this.updateDatepicer(config);
  }

  handlerButtonClearClick() {
    this.datepicker.clear();
  }

  handlerButtonApplyClick() {
    this.parent.close();
  }
}

export default Calendar;
