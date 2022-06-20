import Reservation from './Reservation';

function initReservation(selector, data) {
  const el = document.querySelector(selector);
  if (!el) return;
  (() => new Reservation(el, data))();
}

export default initReservation;
