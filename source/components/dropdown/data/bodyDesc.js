const guestsList = require('./guestsList');
const comfortList = require('./comfortList');
const filterConfig = require('../../calendar/config/filterConfig');

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
