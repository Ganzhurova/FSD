import RoomPagination from './RoomPagination';

function initializeRoomPaginations(selector, options) {
  const paginations = [...document.querySelectorAll(selector)];
  paginations.forEach((paginationEl) => {
    (() => new RoomPagination(paginationEl, options))();
  });
}

export default initializeRoomPaginations;
