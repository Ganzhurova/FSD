import './input.scss';

import Inputmask from 'inputmask';

const dateMask = {
  alias: 'datetime',
  inputFormat: 'dd.mm.yyyy',
  placeholder: '__.__.____',
};

function addMask(selector, maskConfig) {
  const im = new Inputmask(maskConfig);
  im.mask(document.querySelectorAll(selector));
}

addMask('.js-input--date-mask', dateMask);
