const guestsList = require('./guests-list');
const comfortList = require('./comfort-list');
const filterConfig = require('../../calendar/config/filter-config');

const bodyDesc = {
  guests: {
    name: 'totalList',
    data: {
      bodySelector: '.js-total-list',
      list: guestsList,
      control: true,
      commonTxt: true,
    },
  },
  range: {
    name: 'calendar',
    data: {
      bodySelector: '.js-calendar',
      control: true,
    },
  },
  comfort: {
    name: 'totalList',
    data: {
      bodySelector: '.js-total-list',
      list: comfortList,
    },
  },
  filter: {
    name: 'calendar',
    data: {
      bodySelector: '.js-calendar',
      config: filterConfig,
      control: true,
    },
  },
};

module.exports = bodyDesc;
