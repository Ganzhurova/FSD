import Room from './Room';

function initializeRooms(selector) {
  const rooms = [...document.querySelectorAll(selector)];
  rooms.forEach((room) => {
    (() => new Room(room))();
  });
}

export default initializeRooms;
