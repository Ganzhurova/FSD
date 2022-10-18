import RoomPagination from './RoomPagination';

function initializeRoomPaginations(selector, options) {
  const paginations = [...document.querySelectorAll(selector)];
  paginations.forEach((paginationElement) => {
    (() => new RoomPagination(paginationElement, options))();
  });
}

export default initializeRoomPaginations;
