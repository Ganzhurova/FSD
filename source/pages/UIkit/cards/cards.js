/* global $ */

import 'air-datepicker';
import baseConfig from '../../../components/calendar/config/baseConfig';
import initSlickSlider from '../../../components/room/initSlickSlider';

$('.content__section--datepicker .js-datepicker').datepicker(baseConfig);

initSlickSlider('.content__section--cards .js-slider');
