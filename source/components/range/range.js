import $ from 'jquery';
import 'ion-rangeslider';
import './range.scss';

const $range = $('.js-range-slider');
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

$range.ionRangeSlider({
  type: 'double',
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
  step: 100,
  onStart: updateInputs,
  onChange: updateInputs,
  onFinish: updateInputs,
});
