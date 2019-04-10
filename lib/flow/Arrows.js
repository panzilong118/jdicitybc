'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return ['marker-arrow', 'marker-arrow-active'].map(function (id, idx) {
    return _react2.default.createElement(
      'defs',
      { key: id },
      _react2.default.createElement(
        'marker',
        {
          id: id,
          markerWidth: '9',
          markerHeight: '6',
          refX: '9',
          refY: '3',
          orient: 'auto'
        },
        _react2.default.createElement('path', { fill: fillColor[idx], d: 'M0,0 L0,6 L9,3 z' })
      )
    );
  });
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fillColor = ['#979797', '#1890FF'];
//# sourceMappingURL=Arrows.js.map