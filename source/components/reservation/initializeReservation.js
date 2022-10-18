import Reservation from './Reservation';

function initializeReservation(selector, data) {
  const element = document.querySelector(selector);
  if (!element) return;
  (() => new Reservation(element, data))();
}

export default initializeReservation;
