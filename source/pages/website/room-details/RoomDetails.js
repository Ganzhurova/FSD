import initCharts from '../../../components/chart/chart';
import initDropdowns from '../../../components/dropdown/initDropdowns';
import roomDetailsTmpl from '../../../components/room-details/template.pug';
import data from './data.json';

class RoomDetails {
  constructor(containerEl) {
    this.containerEl = containerEl;
    console.log(this);

    this.init();
  }

  init() {
    this.insertTemplate();
    initCharts();
    initDropdowns('.js-dropdown');
  }

  insertTemplate() {
    const locals = {
      roomDetails: data,
    };
    const html = roomDetailsTmpl(locals);
    this.containerEl.innerHTML = html;
  }
}

export default RoomDetails;
