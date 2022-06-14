import DropdownBody from '../dropdown1/DropdownBody';
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
    // console.log(this.totals);
  }

  updateItems(key, value) {
    this.items[key] = +value;
    this.createText();
  }

  createText() {
    const txt = this.options.commonTxt ? this.getCommonText() : '';
    this.parent.updateOutput(txt);
  }

  getCommonText() {
    const sum = Object.values(this.items).reduce(
      (total, amount) => total + amount
    );
    const text = TotalList.declension(sum, this.options.list.common);
    const result = `${sum} ${text}`;

    return sum === 0 ? '' : result;
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
