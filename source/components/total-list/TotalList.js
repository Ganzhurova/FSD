import helpers from '../../helpers/helpers';
import DropdownBody from '../dropdown/DropdownBody';
import Total from '../total/Total';

class TotalList extends DropdownBody {
  constructor(dropdownInstance, options = {}) {
    super(dropdownInstance, options);
    this.totals = [];
    this.items = {};

    this.initTotals();
  }

  initTotals() {
    const totalClass = '.js-total';
    const totalsEl = this.el.querySelectorAll(totalClass);

    totalsEl.forEach((el) => {
      const total = new Total(el, this);
      this.totals.push(total);
    });
  }

  updateItems(key, value) {
    if (+value === 0) {
      delete this.items[key];
    } else {
      this.items[key] = +value;
    }

    const text = this.getText();

    this.hideButtonClear(text === '');
    this.sendData(text, this.items);
  }

  getText() {
    return this.options.commonTxt
      ? this.getCommonText()
      : this.getSeparateText();
  }

  getCommonText() {
    const sum = Object.values(this.items).reduce(
      (total, amount) => total + amount,
      0
    );
    const text = helpers.declension(sum, this.options.list.common);
    const result = `${sum} ${text}`;

    return sum === 0 ? '' : result;
  }

  getSeparateText() {
    return Object.entries(this.items)
      .map(
        ([key, value]) =>
          `${value} ${helpers.declension(value, this.options.list[key].txtArr)}`
      )
      .join(', ');
  }

  handlerButtonClearClick() {
    this.totals.forEach((total) => {
      total.setValue(0);
    });
  }

  handlerButtonApplyClick() {
    this.parent.close();
  }
}

export default TotalList;
