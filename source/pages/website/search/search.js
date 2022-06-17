import initPaginations from '../../../components/pagination/initPagination';
import roomTmpl from '../../../components/room/template.pug';
import initRooms from '../../../components/room/initRooms';
import roomsData from './rooms-data.json';

import './search.scss';

const paginationOptions = {
  data: roomsData.rooms,
  template: roomTmpl,
  containerSelector: '.js-data-container',
  event: 'afterPaging',
  eventCallback: () => {
    initRooms('.js-data-container .js-room');
  },
};

initPaginations('.search__pagination .js-pagination', paginationOptions);
