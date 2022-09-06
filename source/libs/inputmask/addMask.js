import Inputmask from 'inputmask';

function addMask(selector, maskConfig) {
  const im = new Inputmask(maskConfig);
  im.mask(document.querySelectorAll(selector));
}

export default addMask;
