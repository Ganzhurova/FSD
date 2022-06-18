import initRoomPaginations from '../../../components/pagination/initRoomPaginations';
import paginationConfig from '../../../components/pagination/paginationConfig';
import roomTmpl from '../../../components/room/template.pug';
import initRooms from '../../../components/room/initRooms';
import roomsData from './rooms-data.json';

import './search.scss';

const paginationOptions = {
  config: paginationConfig,
  data: roomsData.rooms,
  template: roomTmpl,
  containerSelector: '.js-data-container',
  event: 'afterPaging',
  eventCallback: () => {
    initRooms('.js-data-container .js-room');
  },
};

initRoomPaginations('.search__pagination .js-pagination', paginationOptions);
