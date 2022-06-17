/* global $ */

import 'slick-slider';

function initSlickSlider(el) {
  $(el).slick({
    dots: true,
  });
}

export default initSlickSlider;
