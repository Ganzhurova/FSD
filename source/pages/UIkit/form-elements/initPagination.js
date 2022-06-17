/* global $ */

import paginationConfig from '../../../components/pagination/paginationConfig';

import roomsData from '../../website/search/rooms-data.json';

function initPagination(selector) {
  const paginationEl = document.querySelector(selector);
  if (paginationEl) {
    $(paginationEl).pagination({
      ...paginationConfig,
      dataSource: roomsData.rooms,
    });
  }
}

export default initPagination;
