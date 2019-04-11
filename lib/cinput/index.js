'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import './style/index.less';

var Cinput = function (_Component) {
  _inherits(Cinput, _Component);

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

      return _react2.default.createElement(
        'div',
        { className: 'sectionInput', key: index },
        _react2.default.createElement(
          'div',
          { className: 'inputName' },
          item.inputBoxDetail.name
        ),
        _react2.default.createElement(
          'div',
          { className: 'test' },
          'hahaha\u54C8\u54C8\u54C8\u54C8'
        ),
        _react2.default.createElement(
          'div',
          { className: 'test' },
          'test'
        ),
        _react2.default.createElement(
          'div',
          { className: 'inputName' },
          'demo'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_antd.Input, {
            className: 'inputStyle',
            value: item.inputBoxDetail.value,
            onChange: function onChange(e) {
              return _this2.onInputChange(e, index);
            }
          })
        )
      );
    }
  }]);

  return Cinput;
}(_react.Component);

exports.default = Cinput;
//# sourceMappingURL=index.js.map