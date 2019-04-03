'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnchorLink = function (_React$Component) {
  _inherits(AnchorLink, _React$Component);

  function AnchorLink(props) {
    _classCallCheck(this, AnchorLink);

    var _this = _possibleConstructorReturn(this, (AnchorLink.__proto__ || Object.getPrototypeOf(AnchorLink)).call(this, props));

    _this.handleClick = function () {
      _this.context.jcAnchor.scrollTo(_this.props.href);
    };

    _this.context = {
      jcAnchor: {}
    };
    return _this;
  }

  _createClass(AnchorLink, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.context.jcAnchor.registerLink(this.props.href);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.context.jcAnchor.unregisterLink(this.props.href);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          href = _props.href,
          title = _props.title,
          children = _props.children;

      var active = this.context.jcAnchor.activeLink === href;
      var wrapperClassName = (0, _classnames2.default)(prefixCls + '-link', _defineProperty({}, prefixCls + '-link-active', active));
      var titleClassName = (0, _classnames2.default)(prefixCls + '-link-title', _defineProperty({}, prefixCls + '-link-title-active', active));
      return React.createElement(
        'div',
        { className: wrapperClassName },
        React.createElement(
          'a',
          {
            className: titleClassName,
            href: href,
            title: typeof title === 'string' ? title : '',
            onClick: this.handleClick
          },
          title
        ),
        children
      );
    }
  }]);

  return AnchorLink;
}(React.Component);

AnchorLink.defaultProps = {
  prefixCls: 'jc-anchor',
  href: '#'
};
AnchorLink.contextTypes = {
  jcAnchor: _propTypes2.default.object
};
exports.default = AnchorLink;
//# sourceMappingURL=AnchorLink.js.map