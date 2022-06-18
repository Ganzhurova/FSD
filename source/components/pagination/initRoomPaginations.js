import RoomPagination from './RoomPagination';

function initRoomPaginations(selector, options) {
  const paginations = [...document.querySelectorAll(selector)];
  paginations.forEach((paginationEl) => {
    (() => new RoomPagination(paginationEl, options))();
  });
}

export default initRoomPaginations;
