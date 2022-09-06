/* global $ */

import 'ion-rangeslider';

function addIonRangeSlider(rangeSelector, config) {
  return $(rangeSelector).ionRangeSlider(config);
}

export default addIonRangeSlider;
