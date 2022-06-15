const guestsList = require('./guests-list');
const comfortList = require('./comfort-list');
// const baseConfig = require('../../calendar/config/base-config');

// console.log(baseConfig);

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
      // config: baseConfig,
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
};

module.exports = bodyDesc;
