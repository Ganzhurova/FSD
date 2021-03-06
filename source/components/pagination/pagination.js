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

function initPagination() {
  const container = $('#js-pagination-container');

  if (container.length > 0) {
    container.pagination({
      dataSource: data,
      locator: 'rooms',
      autoHidePrevious: true,
      autoHideNext: true,
      pageSize: 12,
      callback(rooms) {
        const html = template(rooms);
        $('#js-data-container').html(html);
      },
      prevText: '<span class="visually-hidden">Назад</span>',
      nextText: '<span class="visually-hidden">Вперед</span>',
      footer:
        '<p class="pagination__footer">1 – 12 из 100+ вариантов аренды</p>',
    });
  }
}

initPagination();
