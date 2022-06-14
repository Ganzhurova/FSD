const guestsList = require('./guests-list');

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
};

module.exports = bodyDesc;
