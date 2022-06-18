import RoomDetails from './RoomDetails';

function initRoomDetails(selector) {
  const container = document.querySelector(selector);

  if (container) {
    (() => new RoomDetails(container))();
  }
}

export default initRoomDetails;
