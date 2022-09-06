/* global $ */

const $inputFrom = $('[name="min-price"]');
const $inputTo = $('[name="max-price"]');
const $output = $('.js-price-output');

let from = 0;
let to = 0;

const separator = ' - ';
const postfix = '₽';

function prettify(num) {
  const n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ');
}

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop('value', from);
  $inputTo.prop('value', to);

  const numFrom = prettify(from) + postfix;
  const numTo = prettify(to) + postfix;
  const text = numFrom + separator + numTo;
  $output.html(text);
}

export default updateInputs;
