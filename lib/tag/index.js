'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _CheckableTag = require('./CheckableTag');

var _CheckableTag2 = _interopRequireDefault(_CheckableTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tag = function (_React$Component) {
  _inherits(Tag, _React$Component);

  function Tag(props) {
    _classCallCheck(this, Tag);

    var _this = _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

    _this.close = function (e) {
      var onClose = _this.props.onClose;
      if (onClose) {
        onClose(e);
      }
      if (e.defaultPrevented) {
        return;
      }
      var dom = ReactDOM.findDOMNode(_this);
      dom.style.width = dom.getBoundingClientRect().width + 'px';
      // It's Magic Code, don't know why
      dom.style.width = dom.getBoundingClientRect().width + 'px';
      _this.setState({
        closing: true
      });
    };

    _this.animationEnd = function (_, existed) {
      if (!existed && !_this.state.closed) {
        _this.setState({
          closed: true,
          closing: false
        });

        var afterClose = _this.props.afterClose;
        if (afterClose) {
          afterClose();
        }
      }
    };

    _this.state = {
      closing: false,
      closed: false
    };
    return _this;
  }

  _createClass(Tag, [{
    key: 'isPresetColor',
    value: function isPresetColor(color) {
      if (!color) {
        return false;
      }
      return (/^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          closable = _props.closable,
          color = _props.color,
          className = _props.className,
          children = _props.children,
          style = _props.style,
          otherProps = _objectWithoutProperties(_props, ['prefixCls', 'closable', 'color', 'className', 'children', 'style']);

      var closeIcon = closable ? React.createElement(_icon2.default, { type: 'cross', onClick: this.close }) : '';
      var isPresetColor = this.isPresetColor(color);
      var classString = (0, _classnames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-' + color, isPresetColor), _defineProperty(_classNames, prefixCls + '-has-color', color && !isPresetColor), _defineProperty(_classNames, prefixCls + '-close', this.state.closing), _classNames), className);
      // fix https://fb.me/react-unknown-prop
      var divProps = (0, _omit2.default)(otherProps, ['onClose', 'afterClose']);
      var tagStyle = _extends({
        backgroundColor: color && !isPresetColor ? color : null
      }, style);
      var tag = this.state.closed ? null : React.createElement(
        'div',
        _extends({
          'data-show': !this.state.closing
        }, divProps, {
          className: classString,
          style: tagStyle
        }),
        children,
        closeIcon
      );
      return React.createElement(
        _rcAnimate2.default,
        {
          component: '',
          showProp: 'data-show',
          transitionName: prefixCls + '-zoom',
          transitionAppear: true,
          onEnd: this.animationEnd
        },
        tag
      );
    }
  }]);

  return Tag;
}(React.Component);

Tag.CheckableTag = _CheckableTag2.default;
Tag.defaultProps = {
  prefixCls: 'jc-tag',
  closable: false
};
exports.default = Tag;
//# sourceMappingURL=index.js.map