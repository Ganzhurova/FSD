/* global $ */

import 'air-datepicker';
import './cards.scss';

import baseConfig from '../../../components/calendar/config/baseConfig';
import initializeReservation from '../../../components/reservation/initializeReservation';
import initializeRooms from '../../../components/room/initializeRooms';
import data from '../../website/room-details/data.json';

$('.cards__calendar .js-calendar__datepicker').datepicker(baseConfig);

initializeRooms(' .js-room');
initializeReservation('.cards__reservation .js-reservation', data.info);
