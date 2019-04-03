'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}
// Use require over import (will be lifted up)
// make sure matchMedia polyfill run before require('react-slick')
// Fix https://github.com/ant-design/ant-design/issues/6560
// Fix https://github.com/ant-design/ant-design/issues/3308
var SlickCarousel = require('react-slick').default;

var Carousel = function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.onWindowResized = function () {
      // Fix https://github.com/ant-design/ant-design/issues/2550
      var autoplay = _this.props.autoplay;

      if (autoplay && _this.slick && _this.slick.innerSlider && _this.slick.innerSlider.autoPlay) {
        _this.slick.innerSlider.autoPlay();
      }
    };

    _this.saveSlick = function (node) {
      _this.slick = node;
    };

    _this.onWindowResized = (0, _debounce2.default)(_this.onWindowResized, 500, {
      leading: false
    });
    _this.innerSlider = {};
    _this.slick = {};
    return _this;
  }

  _createClass(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var autoplay = this.props.autoplay;

      if (autoplay) {
        window.addEventListener('resize', this.onWindowResized);
      }
      // https://github.com/ant-design/ant-design/issues/7191
      this.innerSlider = this.slick && this.slick.innerSlider;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var autoplay = this.props.autoplay;

      if (autoplay) {
        window.removeEventListener('resize', this.onWindowResized);
        this.onWindowResized.cancel();
      }
    }
  }, {
    key: 'next',
    value: function next() {
      this.slick.slickNext();
    }
  }, {
    key: 'prev',
    value: function prev() {
      this.slick.slickPrev();
    }
  }, {
    key: 'goTo',
    value: function goTo(slide) {
      this.slick.slickGoTo(slide);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props);

      if (props.effect === 'fade') {
        props.fade = true;
      }

      var className = props.prefixCls;
      if (props.vertical) {
        className = className + ' ' + className + '-vertical';
      }

      return React.createElement(
        'div',
        { className: className },
        React.createElement(SlickCarousel, _extends({ ref: this.saveSlick }, props))
      );
    }
  }]);

  return Carousel;
}(React.Component);

Carousel.defaultProps = {
  dots: true,
  arrows: false,
  prefixCls: 'jc-carousel',
  draggable: false
};
exports.default = Carousel;
//# sourceMappingURL=index.js.map