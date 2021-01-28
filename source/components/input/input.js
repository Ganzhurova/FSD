import Inputmask from 'inputmask';

const dateMask = {
  alias: 'datetime',
  inputFormat: 'dd.mm.yyyy',
  placeholder: '_',
};

function addMask(selector, maskConfig) {
  const im = new Inputmask(maskConfig);
  im.mask(document.querySelectorAll(selector));
}

addMask('.js-input-date-mask', dateMask);
