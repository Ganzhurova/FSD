import DropdownBody from '../dropdown/DropdownBody';
import getDatepicker from './getDatepicker';

class Calendar extends DropdownBody {
  constructor(dropdownInstance, options = {}) {
    super(dropdownInstance, options);

    this.datepicker = null;

    this.initDatepicker();
  }

  initDatepicker() {
    const calendarEl = this.el.querySelector('.js-datepicker');
    this.datepicker = getDatepicker(calendarEl);
    this.addHandlerCellSelect();
    this.updateDatepicer(this.options?.config);
    this.selectDate(this.getDates());
  }

  getDates() {
    if (!this.options.from) return false;

    return [this.options.from, this.options.to];
  }

  selectDate(datesArr) {
    if (!datesArr) {
      this.hideButtonClear(true);
      return;
    }

    const convert = (dateString) => new Date(dateString);
    const dates = datesArr.map((date) => convert(date));
    this.datepicker.selectDate(dates);
  }

  updateDatepicer(config) {
    if (!config) return;
    this.datepicker.update(config);
  }

  addHandlerCellSelect() {
    const sendText = this.sendText.bind(this);
    const hideButtonClear = this.hideButtonClear.bind(this);

    const config = {
      onSelect(formattedDate) {
        hideButtonClear(formattedDate === '');
        sendText(formattedDate);
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
