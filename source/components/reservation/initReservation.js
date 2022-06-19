import Reservation from './Reservation';

function initReservation(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  (() => new Reservation(el))();
}

export default initReservation;
