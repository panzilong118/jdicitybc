'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (type, value) {
  if (type === 'month') {
    return Object.values({
      sec: '0',
      min: '0',
      hour: '0',
      day: value,
      month: '*/1',
      week: '?'
    }).join(' ');
  }
  if (type === 'week') {
    return Object.values({
      sec: '0',
      min: '0',
      hour: '0',
      day: '?',
      month: '*',
      week: value
    }).join(' ');
  }
  if (type === 'day') {
    return Object.values({
      sec: '0',
      min: value.split(':')[1] || -1,
      hour: value.split(':')[0] || -1,
      day: '*',
      month: '*',
      week: '?'
    }).join(' ');
  }
  if (type === 'hour') {
    return Object.values({
      sec: '0',
      min: '*',
      hour: '*/' + value,
      day: '*',
      month: '*',
      week: '?'
    }).join(' ');
  }
  if (type === 'minute') {
    return Object.values({
      sec: '0',
      min: '*/' + value,
      hour: '*',
      day: '*',
      month: '*',
      week: '?'
    }).join(' ');
  }
};
//# sourceMappingURL=azkabanTimeFormat.js.map