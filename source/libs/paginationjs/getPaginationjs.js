/* global $ */
import 'paginationjs';

function getPaginationjs(el, config) {
  return $(el).pagination(config);
}

export default getPaginationjs;
