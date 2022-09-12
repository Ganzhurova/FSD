import './navigation.scss';
import initializeBaseDropdowns from '../js/dropdown/initializeBaseDropdowns';

initializeBaseDropdowns('.js-nav', {
  targetSelector: '.js-toggle',
  closeClass: 'nav_closed',
  openClass: 'nav_opened',
});
