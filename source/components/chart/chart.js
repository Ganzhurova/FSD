import './chart.scss';
import declensionNouns from '../helper/declensionNouns';

class Chart {
  constructor() {
    this.data = [];
    this.percentage = [];
    this.total = 0;
    this.circumference = 0;
    this.adjustedCircumference = 0;
    this.cx = 60;
    this.cy = 60;
    this.angleOffset = -90;
    this.textForms = ['голос', 'голоса', 'голосов'];
  }

  init(el) {
    this.chart = el;
    this.segments = this.chart.querySelectorAll('.js-segment');
    this.totalEl = el.querySelector('.js-total-number');
    this.totalTextEl = el.querySelector('.js-total-text');
    this.radius = el.querySelector('.js-segment').getAttribute('r');

    this.getData();
    this.getTotal();
    this.getPercentage();
    this.renderTotal();
    this.renderSegment();
  }

  getData() {
    this.segments.forEach(segment => {
      const value = Number(segment.dataset.total);
      this.data.push(value);
    });
  }

  getTotal() {
    this.total = this.data.reduce((total, amount) => total + amount);
  }

  getCircumference() {
    this.circumference = 2 * Math.PI * this.radius;
  }

  getAdjustedCircumference() {
    this.adjustedCircumference = this.circumference - 2;
  }

  getPercentage() {
    this.percentage = this.data.map(item => {
      return item / this.total;
    });
  }

  getOffset(percent) {
    return this.circumference - this.circumference * percent;
  }

  renderSegment() {
    this.getCircumference();
    this.getAdjustedCircumference();

    this.segments.forEach((segment, i) => {
      const percent = this.percentage[i];
      const offset = this.getOffset(percent);

      segment.setAttribute('stroke-dasharray', this.adjustedCircumference);
      segment.setAttribute('stroke-dashoffset', offset);
      segment.setAttribute(
        'transform',
        `rotate(${this.angleOffset}, ${this.cx}, ${this.cy})`
      );

      this.angleOffset = percent * 360 + this.angleOffset;
    });
  }

  renderTotal() {
    this.totalEl.textContent = this.total;
    this.totalTextEl.textContent = declensionNouns(this.total, this.textForms);
  }
}

function initCharts() {
  const charts = document.querySelectorAll('.js-chart');

  for (let i = 0; i < charts.length; i += 1) {
    const chart = new Chart();
    chart.init(charts[i]);
  }
}

export default initCharts;
