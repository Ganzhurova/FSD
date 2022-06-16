import './navigation.scss';
import initBaseDropdowns from '../js/dropdown/initBaseDropdowns';

initBaseDropdowns('.js-nav', {
  targetSelector: '.js-toggle',
  closeClass: 'nav--closed',
  openClass: 'nav--opened',
});
