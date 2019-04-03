'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.SliderProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Slider = require('rc-slider/lib/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _Range = require('rc-slider/lib/Range');

var _Range2 = _interopRequireDefault(_Range);

var _Handle = require('rc-slider/lib/Handle');

var _Handle2 = _interopRequireDefault(_Handle);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderProps = exports.SliderProps = {
    prefixCls: _propTypes2.default.string,
    tooltipPrefixCls: _propTypes2.default.string,
    range: _propTypes2.default.bool,
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    step: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf([null])]),
    marks: _propTypes2.default.object,
    dots: _propTypes2.default.bool,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
    included: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    vertical: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    onAfterChange: _propTypes2.default.func,
    tipFormatter: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.oneOf([null])]),
    className: _propTypes2.default.string,
    id: _propTypes2.default.string
};

var Slider = function (_React$Component) {
    _inherits(Slider, _React$Component);

    function Slider(props) {
        _classCallCheck(this, Slider);

        var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

        _this.toggleTooltipVisible = function (index, visible) {
            _this.setState(function (_ref) {
                var visibles = _ref.visibles;
                return {
                    visibles: _extends({}, visibles, _defineProperty({}, index, visible))
                };
            });
        };

        _this.handleWithTooltip = function (_ref2) {
            var value = _ref2.value,
                dragging = _ref2.dragging,
                index = _ref2.index,
                restProps = _objectWithoutProperties(_ref2, ['value', 'dragging', 'index']);

            var _this$props = _this.props,
                tooltipPrefixCls = _this$props.tooltipPrefixCls,
                tipFormatter = _this$props.tipFormatter;
            var visibles = _this.state.visibles;

            var visible = tipFormatter ? visibles[index] || dragging : false;
            return React.createElement(
                _tooltip2.default,
                {
                    prefixCls: tooltipPrefixCls,
                    title: tipFormatter ? tipFormatter(value) : '',
                    visible: visible,
                    placement: 'top',
                    transitionName: 'zoom-down',
                    key: index,
                    align: {
                        offset: [0, 0] // 解决tooltip不随slider滚动问题
                    }
                },
                React.createElement(_Handle2.default, _extends({}, restProps, {
                    value: value,
                    onMouseEnter: function onMouseEnter() {
                        return _this.toggleTooltipVisible(index, true);
                    },
                    onMouseLeave: function onMouseLeave() {
                        return _this.toggleTooltipVisible(index, false);
                    }
                }))
            );
        };

        _this.saveSlider = function (node) {
            _this.rcSlider = node;
        };

        _this.state = {
            visibles: {}
        };
        _this.rcSlider = undefined;
        return _this;
    }

    _createClass(Slider, [{
        key: 'focus',
        value: function focus() {
            this.rcSlider.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcSlider.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                range = _props.range,
                restProps = _objectWithoutProperties(_props, ['range']);

            if (range) {
                return React.createElement(_Range2.default, _extends({}, restProps, { ref: this.saveSlider, handle: this.handleWithTooltip }));
            }
            return React.createElement(_Slider2.default, _extends({}, restProps, { ref: this.saveSlider, handle: this.handleWithTooltip }));
        }
    }]);

    return Slider;
}(React.Component);

Slider.defaultProps = {
    prefixCls: 'jc-slider',
    tooltipPrefixCls: 'jc-tooltip',
    tipFormatter: function tipFormatter(value) {
        return value.toString();
    }
};
Slider.propTypes = _extends({}, SliderProps);
exports.default = Slider;
//# sourceMappingURL=index.js.map