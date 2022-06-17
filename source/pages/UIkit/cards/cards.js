/* global $ */

import 'air-datepicker';
import baseConfig from '../../../components/calendar/config/baseConfig';
import initRooms from '../../../components/room/initRooms';

$('.content__section--datepicker .js-datepicker').datepicker(baseConfig);

initRooms('.content__section--cards .js-room');
