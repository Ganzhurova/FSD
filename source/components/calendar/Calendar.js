import getDatepicker from '../../libs/datepicker/getDatepicker';
import DropdownBody from '../dropdown/DropdownBody';

class Calendar extends DropdownBody {
  constructor(dropdownInstance, options = {}) {
    super(dropdownInstance, options);

    this.datepicker = null;

    this.initializeDatepicker();
  }

  initializeDatepicker() {
    const calendarEl = this.el.querySelector('.js-datepicker');
    this.datepicker = getDatepicker(calendarEl);
    this.addHandlerCellSelect();
    this.updateDatepicker(this.options?.config);
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

  updateDatepicker(config) {
    if (!config) return;
    this.datepicker.update(config);
  }

  addHandlerCellSelect() {
    const sendData = this.sendData.bind(this);
    const hideButtonClear = this.hideButtonClear.bind(this);

    const config = {
      onSelect(formattedDate, dates) {
        hideButtonClear(formattedDate === '');
        sendData(formattedDate, dates);
      },
    };
    this.updateDatepicker(config);
  }

  handleButtonClearClick() {
    this.datepicker.clear();
  }

  handleButtonApplyClick() {
    this.parent.close();
  }
}

export default Calendar;
