import Reservation from './Reservation';

function initializeReservation(selector, data) {
  const el = document.querySelector(selector);
  if (!el) return;
  (() => new Reservation(el, data))();
}

export default initializeReservation;
