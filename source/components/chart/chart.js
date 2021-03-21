import './chart.scss';
import declensionNouns from '../helper/declensionNouns';

class Chart {
  constructor() {
    this.data = {};
    this.dataPercent = {};
    this.total = 0;
    this.circumference = 0;
    this.cx = 60;
    this.cy = 60;
    this.angleOffset = -90;
    this.textForms = ['голос', 'голоса', 'голосов'];
  }

  init(el) {
    this.chart = el;
    this.totalEl = el.querySelector('.js-total-number');
    this.totalTextEl = el.querySelector('.js-total-text');
    this.radius = el.querySelector('.js-segment').getAttribute('r');

    this.getSegments();
    this.getTotal();
    this.getCircumference();
    this.getDasharrayVal();
    this.renderTotal();
  }

  getSegments() {
    const segments = this.chart.querySelectorAll('[data-segment]');
    segments.forEach(item => {
      const name = item.dataset.segment;
      const value = Number(item.dataset.total);
      this.data[name] = value;
    });
  }

  getTotal() {
    this.total = Object.values(this.data).reduce(
      (total, amount) => total + amount
    );
  }

  renderTotal() {
    this.totalEl.textContent = this.total;
    this.totalTextEl.textContent = declensionNouns(this.total, this.textForms);
  }

  getCircumference() {
    this.circumference = 2 * Math.PI * this.radius;
  }

  getDasharrayVal() {
    const segments = this.chart.querySelectorAll('[data-segment]');
    // let offset = 0;

    segments.forEach(item => {
      const value = Number(item.dataset.total);
      const percent = value / this.total;
      // const dash = this.circumference * percent;
      // const adjustedDash = dash - 2;
      // const gap = this.circumference - dash;
      // const attrVal = `${adjustedDash} ${gap}`;
      const offset = this.circumference - this.circumference * percent;
      const circle = item.querySelector('.js-segment');
      const adjustedCircumference = this.circumference - 2;

      circle.setAttribute('stroke-dasharray', adjustedCircumference);
      circle.setAttribute('stroke-dashoffset', offset);
      circle.setAttribute(
        'transform',
        `rotate(${this.angleOffset}, ${this.cx}, ${this.cy})`
      );

      this.angleOffset = percent * 360 + this.angleOffset;
      // offset += dash;
      //
      // console.log(dash);
      console.log(this.angleOffset);
      // console.log(offset);
    });
  }
}

function initCharts() {
  const charts = document.querySelectorAll('.js-chart');

  for (let i = 0; i < charts.length; i += 1) {
    const chart = new Chart();
    chart.init(charts[i]);
    console.log(chart);
  }
}

export default initCharts;
