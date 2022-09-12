/* global $ */

import 'air-datepicker';

import baseConfig from '../../../components/calendar/config/baseConfig';
import initializeReservation from '../../../components/reservation/initializeReservation';
import initializeRooms from '../../../components/room/initializeRooms';
import data from '../../website/room-details/data.json';

$('.content__section_datepicker .js-datepicker').datepicker(baseConfig);

initializeRooms(' .js-room');
initializeReservation('.content__section_cards .js-reservation', data.info);
