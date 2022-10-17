import initializeRoomPaginations from '../../../components/pagination/initializeRoomPaginations';
import paginationConfig from '../../../components/pagination/paginationConfig';
import initializeRooms from '../../../components/room/initializeRooms';
import roomTmpl from '../../../components/room/template.pug';
import roomsData from './rooms-data.json';

import './search.scss';

const paginationOptions = {
  config: paginationConfig,
  data: roomsData.rooms,
  template: roomTmpl,
  containerSelector: '.js-catalog-result__list',
  event: 'afterPaging',
  eventCallback: () => {
    initializeRooms('.js-catalog-result__list .js-room');
  },
};

initializeRoomPaginations(
  '.search__pagination .js-pagination',
  paginationOptions
);
