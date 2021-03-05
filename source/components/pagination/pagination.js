import $ from 'jquery';
import './pagination.scss';
import 'paginationjs';

import data from '../../pages/website/search/search';

const roomTemplate = require('../room/template.pug');

function template(rooms) {
  let html = '';
  $.each(rooms, function getHtml(index, room) {
    const locals = {
      room,
    };
    html += roomTemplate(locals);
  });

  return html;
}

$('#pagination-container').pagination({
  dataSource: data,
  locator: 'rooms',
  callback(rooms) {
    const html = template(rooms);
    $('#js-data-container').html(html);
  },
});
