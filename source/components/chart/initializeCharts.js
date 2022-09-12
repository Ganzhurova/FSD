import Chart from './Chart';

function initializeCharts() {
  const charts = document.querySelectorAll('.js-chart');

  for (let i = 0; i < charts.length; i += 1) {
    const chart = new Chart();
    chart.initialize(charts[i]);
  }
}

export default initializeCharts;
