/* global $ */

import 'slick-slider';

function initSlickSlider(selector) {
  $(selector).slick({
    dots: true,
  });
}

export default initSlickSlider;
