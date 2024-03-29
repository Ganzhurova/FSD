import initializeCharts from '../../../components/chart/initializeCharts';
import initializeReservation from '../../../components/reservation/initializeReservation';
import roomDetailsTmpl from '../../../components/room-details/template.pug';
import data from './data.json';

class RoomDetails {
  constructor(containerElement) {
    this.containerElement = containerElement;

    this.initialize();
  }

  initialize() {
    this.insertTemplate();
    initializeCharts();
    initializeReservation('.js-reservation', data.info);
  }

  insertTemplate() {
    const locals = {
      roomDetails: data,
    };
    const html = roomDetailsTmpl(locals);
    this.containerElement.innerHTML = html;
  }
}

export default RoomDetails;
