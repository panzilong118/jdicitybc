'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcCollapse = require('rc-collapse');

var _rcCollapse2 = _interopRequireDefault(_rcCollapse);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _openAnimation = require('../_util/openAnimation');

var _openAnimation2 = _interopRequireDefault(_openAnimation);

var _CollapsePanel = require('./CollapsePanel');

var _CollapsePanel2 = _interopRequireDefault(_CollapsePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapse = function (_React$Component) {
  _inherits(Collapse, _React$Component);

  function Collapse() {
    _classCallCheck(this, Collapse);

    return _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).apply(this, arguments));
  }

  _createClass(Collapse, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          bordered = _props.bordered;

      var collapseClassName = (0, _classnames2.default)(_defineProperty({}, prefixCls + '-borderless', !bordered), className);
      return React.createElement(_rcCollapse2.default, _extends({}, this.props, { className: collapseClassName }));
    }
  }]);

  return Collapse;
}(React.Component);

Collapse.Panel = _CollapsePanel2.default;
Collapse.defaultProps = {
  prefixCls: 'jc-collapse',
  bordered: true,
  openAnimation: _extends({}, _openAnimation2.default, {
    appear: function appear() {}
  })
};
exports.default = Collapse;
//# sourceMappingURL=Collapse.js.map