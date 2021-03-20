import './chart.scss';
import declensionNouns from '../helper/declensionNouns';

class Chart {
  constructor() {
    this.impression = {};
    this.textForms = ['голос', 'голоса', 'голосов'];
  }

  init(el) {
    this.chart = el;
    this.totalEl = el.querySelector('.js-total-number');
    this.totalTextEl = el.querySelector('.js-total-text');

    this.getSegments();
    this.getTotal();
    this.renderTotal();
  }

  getSegments() {
    const segments = this.chart.querySelectorAll('[data-segment]');
    segments.forEach(item => {
      const name = item.dataset.segment;
      const value = Number(item.dataset.total);
      this.impression[name] = value;
    });
  }

  getTotal() {
    this.total = Object.values(this.impression).reduce(
      (total, amount) => total + amount
    );
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
    console.log(chart);
  }
}

export default initCharts;
