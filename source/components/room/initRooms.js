import Room from './Room';

function initRooms(selector) {
  const rooms = [...document.querySelectorAll(selector)];
  rooms.forEach((room) => {
    (() => new Room(room))();
  });
}

export default initRooms;
