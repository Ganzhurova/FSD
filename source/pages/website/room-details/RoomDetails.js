import initCharts from '../../../components/chart/chart';
import initReservation from '../../../components/reservation/initReservation';
import roomDetailsTmpl from '../../../components/room-details/template.pug';
import data from './data.json';

class RoomDetails {
  constructor(containerEl) {
    this.containerEl = containerEl;

    this.init();
  }

  init() {
    this.insertTemplate();
    initCharts();
    initReservation('.js-reservation', data.info);
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
