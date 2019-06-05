'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/button/style');

require('antd/lib/input/style');

var _react = require('react');

var React = _interopRequireWildcard(_react);

require('./style/index.less');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cinput = function (_React$Component) {
  _inherits(Cinput, _React$Component);

  function Cinput() {
    _classCallCheck(this, Cinput);

    return _possibleConstructorReturn(this, (Cinput.__proto__ || Object.getPrototypeOf(Cinput)).apply(this, arguments));
  }

  _createClass(Cinput, [{
    key: 'onInputChange',
    value: function onInputChange(e, index) {
      var handleInputChange = this.props.handleInputChange;

      handleInputChange(e.target.value, index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          item = _props.item,
          index = _props.index;

      return React.createElement(
        'div',
        { className: 'jdic-sectioninput', key: index },
        React.createElement(
          'div',
          { className: 'jdic-inputname' },
          item.inputBoxDetail.name
        ),
        React.createElement(
          'div',
          null,
          React.createElement(_input2.default, {
            className: 'jdic-inputstyle',
            value: item.inputBoxDetail.value,
            onChange: function onChange(e) {
              return _this2.onInputChange(e, index);
            }
          })
        ),
        React.createElement(
          _button2.default,
          { type: 'primary' },
          'Primary'
        ),
        React.createElement(
          _button2.default,
          null,
          'Default'
        ),
        React.createElement(
          _button2.default,
          { type: 'dashed' },
          'Dashed'
        ),
        React.createElement(
          _button2.default,
          { type: 'danger' },
          'Danger'
        ),
        React.createElement(
          _button2.default,
          { type: 'link' },
          'Link'
        )
      );
    }
  }]);

  return Cinput;
}(React.Component);

exports.default = Cinput;
//# sourceMappingURL=index.js.map