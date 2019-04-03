'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author panzilong
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function noop() {}

var Operation = function (_React$Component) {
  _inherits(Operation, _React$Component);

  function Operation() {
    _classCallCheck(this, Operation);

    return _possibleConstructorReturn(this, (Operation.__proto__ || Object.getPrototypeOf(Operation)).apply(this, arguments));
  }

  _createClass(Operation, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$moveToLeft = _props.moveToLeft,
          moveToLeft = _props$moveToLeft === undefined ? noop : _props$moveToLeft,
          _props$moveToRight = _props.moveToRight,
          moveToRight = _props$moveToRight === undefined ? noop : _props$moveToRight,
          _props$leftArrowText = _props.leftArrowText,
          leftArrowText = _props$leftArrowText === undefined ? '' : _props$leftArrowText,
          _props$rightArrowText = _props.rightArrowText,
          rightArrowText = _props$rightArrowText === undefined ? '' : _props$rightArrowText,
          leftActive = _props.leftActive,
          rightActive = _props.rightActive,
          className = _props.className;

      return React.createElement(
        'div',
        { className: className },
        React.createElement(
          _button2.default,
          {
            type: 'primary',
            size: 'small',
            disabled: !leftActive,
            onClick: moveToLeft,
            icon: 'left'
          },
          leftArrowText
        ),
        React.createElement(
          _button2.default,
          {
            type: 'primary',
            size: 'small',
            disabled: !rightActive,
            onClick: moveToRight,
            icon: 'right'
          },
          rightArrowText
        )
      );
    }
  }]);

  return Operation;
}(React.Component);

exports.default = Operation;
//# sourceMappingURL=operation.js.map