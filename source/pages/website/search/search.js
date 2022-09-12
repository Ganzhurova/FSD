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
  containerSelector: '.js-data-container',
  event: 'afterPaging',
  eventCallback: () => {
    initializeRooms('.js-data-container .js-room');
  },
};

initializeRoomPaginations(
  '.search__pagination .js-pagination',
  paginationOptions
);
