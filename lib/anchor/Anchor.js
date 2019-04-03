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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _affix = require('../affix');

var _affix2 = _interopRequireDefault(_affix);

var _AnchorLink = require('./AnchorLink');

var _AnchorLink2 = _interopRequireDefault(_AnchorLink);

var _getScroll = require('../_util/getScroll');

var _getScroll2 = _interopRequireDefault(_getScroll);

var _getRequestAnimationFrame = require('../_util/getRequestAnimationFrame');

var _getRequestAnimationFrame2 = _interopRequireDefault(_getRequestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getDefaultContainer() {
  return window;
}

function getOffsetTop(element, container) {
  if (!element) {
    return 0;
  }

  if (!element.getClientRects().length) {
    return 0;
  }

  var rect = element.getBoundingClientRect();

  if (rect.width || rect.height) {
    if (container === window) {
      container = element.ownerDocument.documentElement;
      return rect.top - container.clientTop;
    }
    return rect.top - container.getBoundingClientRect().top;
  }

  return rect.top;
}

function easeInOutCubic(t, b, c, d) {
  var cc = c - b;
  t /= d / 2;
  if (t < 1) {
    return cc / 2 * t * t * t + b;
  }
  return cc / 2 * ((t -= 2) * t * t + 2) + b;
}

var reqAnimFrame = (0, _getRequestAnimationFrame2.default)();
var sharpMatcherRegx = /#([^#]+)$/;
function scrollTo(href) {
  var offsetTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var getContainer = arguments[2];
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

  var container = getContainer();
  var scrollTop = (0, _getScroll2.default)(container, true);
  var sharpLinkMatch = sharpMatcherRegx.exec(href);
  if (!sharpLinkMatch) {
    return;
  }
  var targetElement = document.getElementById(sharpLinkMatch[1]);
  if (!targetElement) {
    return;
  }
  var eleOffsetTop = getOffsetTop(targetElement, container);
  var targetScrollTop = scrollTop + eleOffsetTop - offsetTop;
  var startTime = Date.now();
  var frameFunc = function frameFunc() {
    var timestamp = Date.now();
    var time = timestamp - startTime;
    var nextScrollTop = easeInOutCubic(time, scrollTop, targetScrollTop, 450);
    if (container === window) {
      window.scrollTo(window.pageXOffset, nextScrollTop);
    } else {
      container.scrollTop = nextScrollTop;
    }
    if (time < 450) {
      reqAnimFrame(frameFunc);
    } else {
      callback();
    }
  };
  reqAnimFrame(frameFunc);
  history.pushState(null, '', href);
}

var Anchor = function (_React$Component) {
  _inherits(Anchor, _React$Component);

  // static Link: typeof AnchorLink;

  function Anchor(props) {
    _classCallCheck(this, Anchor);

    var _this = _possibleConstructorReturn(this, (Anchor.__proto__ || Object.getPrototypeOf(Anchor)).call(this, props));

    _this.handleScroll = function () {
      if (_this.animating) {
        return;
      }
      var _this$props = _this.props,
          offsetTop = _this$props.offsetTop,
          bounds = _this$props.bounds;

      _this.setState({
        activeLink: _this.getCurrentAnchor(offsetTop, bounds)
      });
    };

    _this.handleScrollTo = function (link) {
      var _this$props2 = _this.props,
          offsetTop = _this$props2.offsetTop,
          getContainer = _this$props2.getContainer;

      _this.animating = true;
      _this.setState({ activeLink: link });
      scrollTo(link, offsetTop, getContainer, function () {
        _this.animating = false;
      });
    };

    _this.updateInk = function () {
      if (typeof document === 'undefined') {
        return;
      }
      var prefixCls = _this.props.prefixCls;

      var anchorNode = ReactDOM.findDOMNode(_this);
      var linkNode = anchorNode.getElementsByClassName(prefixCls + '-link-title-active')[0];
      if (linkNode) {
        _this.inkNode.style.top = linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5 + 'px';
      }
    };

    _this.saveInkNode = function (node) {
      _this.inkNode = node;
    };

    _this.state = {
      activeLink: null
    };
    _this.links = [];
    _this.inkNode = {};
    _this.scrollEvent = {};
    _this.animating = false;
    return _this;
  }

  _createClass(Anchor, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      return {
        jcAnchor: {
          registerLink: function registerLink(link) {
            if (!_this2.links.includes(link)) {
              _this2.links.push(link);
            }
          },
          unregisterLink: function unregisterLink(link) {
            var index = _this2.links.indexOf(link);
            if (index !== -1) {
              _this2.links.splice(index, 1);
            }
          },
          activeLink: this.state.activeLink,
          scrollTo: this.handleScrollTo
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var getContainer = this.props.getContainer;

      this.scrollEvent = (0, _addEventListener2.default)(getContainer(), 'scroll', this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.scrollEvent) {
        this.scrollEvent.remove();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateInk();
    }
  }, {
    key: 'getCurrentAnchor',
    value: function getCurrentAnchor() {
      var offsetTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var bounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

      var activeLink = '';
      if (typeof document === 'undefined') {
        return activeLink;
      }

      var linkSections = [];
      var getContainer = this.props.getContainer;

      var container = getContainer();
      this.links.forEach(function (link) {
        var sharpLinkMatch = sharpMatcherRegx.exec(link.toString());
        if (!sharpLinkMatch) {
          return;
        }
        var target = document.getElementById(sharpLinkMatch[1]);
        if (target) {
          var top = getOffsetTop(target, container);
          if (top < offsetTop + bounds) {
            linkSections.push({
              link: link,
              top: top
            });
          }
        }
      });

      if (linkSections.length) {
        var maxSection = linkSections.reduce(function (prev, curr) {
          return curr.top > prev.top ? curr : prev;
        });
        return maxSection.link;
      }
      return '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className,
          style = _props.style,
          offsetTop = _props.offsetTop,
          affix = _props.affix,
          showInkInFixed = _props.showInkInFixed,
          children = _props.children;
      var activeLink = this.state.activeLink;


      var inkClass = (0, _classnames2.default)(prefixCls + '-ink-ball', {
        visible: activeLink
      });

      var wrapperClass = (0, _classnames2.default)(className, prefixCls + '-wrapper');

      var anchorClass = (0, _classnames2.default)(prefixCls, {
        'fixed': !affix && !showInkInFixed
      });

      var wrapperStyle = _extends({
        maxHeight: offsetTop ? 'calc(100vh - ' + offsetTop + 'px)' : '100vh'
      }, style);

      var anchorContent = React.createElement(
        'div',
        {
          className: wrapperClass,
          style: wrapperStyle
        },
        React.createElement(
          'div',
          { className: anchorClass },
          React.createElement(
            'div',
            { className: prefixCls + '-ink' },
            React.createElement('span', { className: inkClass, ref: this.saveInkNode })
          ),
          children
        )
      );

      return !affix ? anchorContent : React.createElement(
        _affix2.default,
        { offsetTop: offsetTop },
        anchorContent
      );
    }
  }]);

  return Anchor;
}(React.Component);

Anchor.defaultProps = {
  prefixCls: 'jc-anchor',
  affix: true,
  showInkInFixed: false,
  getContainer: getDefaultContainer
};
Anchor.childContextTypes = {
  jcAnchor: _propTypes2.default.object
};
exports.default = Anchor;
//# sourceMappingURL=Anchor.js.map