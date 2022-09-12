import RoomDetails from './RoomDetails';

function initializeRoomDetails(selector) {
  const container = document.querySelector(selector);

  if (container) {
    (() => new RoomDetails(container))();
  }
}

export default initializeRoomDetails;
