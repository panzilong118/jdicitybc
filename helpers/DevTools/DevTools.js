'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '..\\..\\src\\helpers\\DevTools\\DevTools.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = require('redux-devtools');

var _reduxDevtoolsLogMonitor = require('redux-devtools-log-monitor');

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = require('redux-devtools-dock-monitor');

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

//import DiffMonitor from 'redux-devtools-diff-monitor';
// import SliderMonitor from 'redux-slider-monitor';
// import Inspector from 'redux-devtools-inspector';
// //import FilterableLogMonitor from '../src'
// import FilterableLogMonitor from 'redux-devtools-filterable-log-monitor';
// import ChartMonitor from 'redux-devtools-chart-monitor';

//npm install --save-dev redux-devtools-diff-monitor

var _default = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
  _reduxDevtoolsDockMonitor2.default,
  { defaultIsVisible: false, changeMonitorKey: 'ctrl-M', toggleVisibilityKey: 'ctrl-H', changePositionKey: 'ctrl-Q', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  },
  _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })
));

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '../../src/helpers/DevTools/DevTools.js');
  leaveModule(module);
})();

;
module.exports = exports['default'];
//# sourceMappingURL=DevTools.js.map