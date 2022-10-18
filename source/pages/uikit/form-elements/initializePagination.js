/* global $ */

import paginationConfig from '../../../components/pagination/paginationConfig';

import roomsData from '../../website/search/rooms-data.json';

function initializePagination(selector) {
  const paginationElement = document.querySelector(selector);
  if (paginationElement) {
    $(paginationElement).pagination({
      ...paginationConfig,
      dataSource: roomsData.rooms,
    });
  }
}

export default initializePagination;
