import './filter.scss';
import initBaseDropdowns from '../js/dropdown/initBaseDropdowns';
import initDropdowns from '../dropdown/initDropdowns';

initBaseDropdowns('.js-filter', {
  targetSelector: '.js-toggle',
  closeClass: 'filter--closed',
  openClass: 'filter--opened',
});

initDropdowns('.filter .js-dropdown');
