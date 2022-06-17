import Pagination from './Pagination';

function initPaginations(selector, options) {
  const paginations = [...document.querySelectorAll(selector)];
  paginations.forEach((paginationEl) => {
    (() => new Pagination(paginationEl, options))();
  });
}

export default initPaginations;
