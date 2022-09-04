/* global $ */

import 'air-datepicker';
import baseConfig from '../../../components/calendar/config/baseConfig';
import initReservation from '../../../components/reservation/initReservation';
import initRooms from '../../../components/room/initRooms';
import data from '../../website/room-details/data.json';

$('.content__section_datepicker .js-datepicker').datepicker(baseConfig);

initRooms(' .js-room');
initReservation('.content__section_cards .js-reservation', data.info);
