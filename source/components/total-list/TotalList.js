import DropdownBody from '../dropdown/DropdownBody';
import Total from '../total/Total';
import './total-list.scss';

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
    this.items[key] = +value;
    const text = this.getText();

    this.hideButtonClear(text === '');
    this.sendText(text);
  }

  getText() {
    return this.options.commonTxt
      ? this.getCommonText()
      : this.getSeparateText();
  }

  getCommonText() {
    const sum = Object.values(this.items).reduce(
      (total, amount) => total + amount
    );
    const text = TotalList.declension(sum, this.options.list.common);
    const result = `${sum} ${text}`;

    return sum === 0 ? '' : result;
  }

  getSeparateText() {
    return Object.entries(this.items)
      .map(
        ([key, value]) =>
          `${value} ${TotalList.declension(
            value,
            this.options.list[key].txtArr
          )}`
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

  static declension(n, txtArr) {
    const num = Number(n);
    if (num === 1) {
      return txtArr[1];
    }
    if (num > 1 && num < 5) {
      return txtArr[2];
    }
    return txtArr[0];
  }
}

export default TotalList;
