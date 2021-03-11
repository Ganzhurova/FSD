import initLikes from '../../../components/like/like';
import {
  initRanges,
  initDateDropdowns,
} from '../../../components/date-dropdown/date-dropdown';
import initDropdowns from '../../../components/dropdown/dropdown';
import data from './data.json';

const roomDetailsTemplate = require('../../../components/room-details/template.pug');

function showRoomDetails() {
  const locals = {
    roomDetails: data,
  };
  const html = roomDetailsTemplate(locals);
  const main = document.querySelector('.js-room-details');

  if (main) {
    main.innerHTML = html;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  showRoomDetails();
  initLikes();
  initRanges();
  initDateDropdowns();
  initDropdowns();
});
