import Calendar from '../../calendar/Calendar';
import TotalList from '../../total-list/TotalList';

const bodyMap = {
  totalList() {
    return TotalList;
  },
  calendar() {
    return Calendar;
  },
};

export default bodyMap;
