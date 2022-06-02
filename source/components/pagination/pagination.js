/* global $ */

import './pagination.scss';
import 'paginationjs';
import initRatings from '../rating/rating';

import data from '../../pages/website/search/search';

const roomTemplate = require('../room/template.pug');

function template(rooms) {
  let html = '';
  $.each(rooms, (index, room) => {
    const locals = {
      room,
    };
    html += roomTemplate(locals);
  });

  return html;
}

function initSlider() {
  $('.js-slider').slick({
    dots: true,
  });
}

function writeFooter(paginationEl, config) {
  const footerSelector = '.js-footer';
  const footer = paginationEl.find(footerSelector);

  const pageNum = paginationEl.pagination('getSelectedPageNum');
  const dataPageTotal = paginationEl.pagination('getSelectedPageData').length;
  const { pageSize } = config;
  const dataTotal = data.rooms.length;

  const startLimit = (pageNum - 1) * pageSize + 1;
  const endLimit = (pageNum - 1) * pageSize + dataPageTotal;

  let totalText = '';
  const dataArr = String(dataTotal).split('');
  if (Number(dataArr[dataArr.length - 1]) === 1 && dataTotal <= 100) {
    totalText = `${dataTotal} варианта`;
  } else {
    totalText = `${dataTotal} вариантов`;
  }
  if (dataTotal > 100) {
    totalText = '100+ вариантов';
  }

  const text = `${startLimit} - ${endLimit} из ${totalText} аренды`;
  footer.html(text);
}

function initPagination() {
  const container = $('#js-pagination-container');
  const footerHtml = '<p class="pagination__footer js-footer">';

  const config = {
    dataSource: data,
    locator: 'rooms',
    autoHidePrevious: true,
    autoHideNext: true,
    pageSize: 12,
    pageRange: 1,
    callback(rooms) {
      const html = template(rooms);
      $('#js-data-container').html(html);
    },
    prevText: '<span class="visually-hidden">Назад</span>',
    nextText: '<span class="visually-hidden">Вперед</span>',
    footer: footerHtml,
  };

  if (container.length > 0) {
    container.pagination(config);

    writeFooter(container, config);
    initRatings();
    initSlider();

    container.addHook('afterPaging', () => {
      initSlider();
      writeFooter(container, config);
      initRatings();
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initPagination();
});
