import initializeDropdowns from '../dropdown/initializeDropdowns';
import initializeBaseDropdowns from '../js/dropdown/initializeBaseDropdowns';
import './filter.scss';

initializeBaseDropdowns('.js-filter', {
  targetSelector: '.js-filter__toggle',
  closeClass: 'filter_closed',
  openClass: 'filter_opened',
});

initializeDropdowns('.filter .js-dropdown');
