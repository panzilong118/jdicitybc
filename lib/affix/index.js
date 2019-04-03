'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.AffixProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class; /**
                                  * @author: chenyanhua
                                  * @version: 3.4.1
                                  */


var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _getScroll = require('../_util/getScroll');

var _getScroll2 = _interopRequireDefault(_getScroll);

var _throttleByAnimationFrame = require('../_util/throttleByAnimationFrame');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function getTargetRect(target) {
    return target !== window ? target.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
}

function getOffset(element, target) {
    var elemRect = element.getBoundingClientRect();
    var targetRect = getTargetRect(target);

    var scrollTop = (0, _getScroll2.default)(target, true);
    var scrollLeft = (0, _getScroll2.default)(target, false);

    var docElem = window.document.body;
    var clientTop = docElem.clientTop || 0;
    var clientLeft = docElem.clientLeft || 0;

    return {
        top: elemRect.top - targetRect.top + scrollTop - clientTop,
        left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
        width: elemRect.width,
        height: elemRect.height
    };
}

function noop() {}

function getDefaultTarget() {
    return typeof window !== 'undefined' ? window : null;
}

// Affix
var AffixProps = exports.AffixProps = {
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop: _propTypes2.default.number,
    offset: _propTypes2.default.number,
    /** 距离窗口底部达到指定偏移量后触发 */
    offsetBottom: _propTypes2.default.number,
    style: _propTypes2.default.object,
    /** 固定状态改变时触发的回调函数 */
    onChange: _propTypes2.default.func,
    /** 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
    target: _propTypes2.default.func,
    prefixCls: _propTypes2.default.string
};

var Affix = (_dec = (0, _throttleByAnimationFrame.throttleByAnimationFrameDecorator)(), (_class = function (_React$Component) {
    _inherits(Affix, _React$Component);

    function Affix(props) {
        _classCallCheck(this, Affix);

        var _this = _possibleConstructorReturn(this, (Affix.__proto__ || Object.getPrototypeOf(Affix)).call(this, props));

        _this.saveFixedNode = function (node) {
            _this.fixedNode = node;
        };

        _this.savePlaceholderNode = function (node) {
            _this.placeholderNode = node;
        };

        _this.scrollEvent = undefined;
        _this.resizeEvent = undefined;
        _this.timeout = undefined;

        _this.events = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];

        _this.eventHandlers = {};

        _this.state = {
            affixStyle: undefined,
            placeholderStyle: undefined
        };

        _this.fixedNode = undefined;
        _this.placeholderNode = undefined;
        return _this;
    }

    _createClass(Affix, [{
        key: 'setAffixStyle',
        value: function setAffixStyle(e, affixStyle) {
            var _this2 = this;

            var _props = this.props,
                _props$onChange = _props.onChange,
                onChange = _props$onChange === undefined ? noop : _props$onChange,
                _props$target = _props.target,
                target = _props$target === undefined ? getDefaultTarget : _props$target;

            var originalAffixStyle = this.state.affixStyle;
            var isWindow = target() === window;
            if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
                return;
            }
            if ((0, _shallowequal2.default)(affixStyle, originalAffixStyle)) {
                return;
            }
            this.setState({ affixStyle: affixStyle }, function () {
                var affixed = !!_this2.state.affixStyle;
                if (affixStyle && !originalAffixStyle || !affixStyle && originalAffixStyle) {
                    onChange(affixed);
                }
            });
        }
    }, {
        key: 'setPlaceholderStyle',
        value: function setPlaceholderStyle(placeholderStyle) {
            var originalPlaceholderStyle = this.state.placeholderStyle;
            if ((0, _shallowequal2.default)(placeholderStyle, originalPlaceholderStyle)) {
                return;
            }
            this.setState({ placeholderStyle: placeholderStyle });
        }
    }, {
        key: 'syncPlaceholderStyle',
        value: function syncPlaceholderStyle(e) {
            var affixStyle = this.state.affixStyle;

            if (!affixStyle) {
                return;
            }
            this.placeholderNode.style.cssText = '';
            this.setAffixStyle(e, _extends({}, affixStyle, {
                width: this.placeholderNode.offsetWidth
            }));
            this.setPlaceholderStyle({
                width: this.placeholderNode.offsetWidth
            });
        }
    }, {
        key: 'updatePosition',
        value: function updatePosition(e) {
            var _props2 = this.props,
                offsetBottom = _props2.offsetBottom,
                offset = _props2.offset,
                _props2$target = _props2.target,
                target = _props2$target === undefined ? getDefaultTarget : _props2$target;
            var offsetTop = this.props.offsetTop;

            var targetNode = target();

            // Backwards support
            offsetTop = offsetTop || offset;
            var scrollTop = (0, _getScroll2.default)(targetNode, true);
            var affixNode = ReactDOM.findDOMNode(this);
            var elemOffset = getOffset(affixNode, targetNode);
            var elemSize = {
                width: this.fixedNode.offsetWidth,
                height: this.fixedNode.offsetHeight
            };

            var offsetMode = {
                top: false,
                bottom: false
            };
            // Default to `offsetTop=0`.
            if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
                offsetMode.top = true;
                offsetTop = 0;
            } else {
                offsetMode.top = typeof offsetTop === 'number';
                offsetMode.bottom = typeof offsetBottom === 'number';
            }

            var targetRect = getTargetRect(targetNode);
            var targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
            if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
                // Fixed Top
                var width = elemOffset.width;
                var top = targetRect.top + offsetTop;
                this.setAffixStyle(e, {
                    position: 'fixed',
                    top: top,
                    left: targetRect.left + elemOffset.left,
                    width: width
                });
                this.setPlaceholderStyle({
                    width: width,
                    height: elemSize.height
                });
            } else if (scrollTop < elemOffset.top + elemSize.height + offsetBottom - targetInnerHeight && offsetMode.bottom) {
                // Fixed Bottom
                var targetBottomOffet = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
                var _width = elemOffset.width;
                this.setAffixStyle(e, {
                    position: 'fixed',
                    bottom: targetBottomOffet + offsetBottom,
                    left: targetRect.left + elemOffset.left,
                    width: _width
                });
                this.setPlaceholderStyle({
                    width: _width,
                    height: elemOffset.height
                });
            } else {
                var affixStyle = this.state.affixStyle;

                if (e.type === 'resize' && affixStyle && affixStyle.position === 'fixed' && affixNode.offsetWidth) {
                    this.setAffixStyle(e, _extends({}, affixStyle, { width: affixNode.offsetWidth }));
                } else {
                    this.setAffixStyle(e, null);
                }
                this.setPlaceholderStyle(null);
            }

            if (e.type === 'resize') {
                this.syncPlaceholderStyle(e);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            var target = this.props.target || getDefaultTarget;
            // Wait for parent component ref has its value
            this.timeout = setTimeout(function () {
                _this3.setTargetEventListeners(target);
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.target !== nextProps.target) {
                this.clearEventListeners();
                this.setTargetEventListeners(nextProps.target);

                // Mock Event object.
                this.updatePosition({});
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.clearEventListeners();
            clearTimeout(this.timeout);
            this.updatePosition.cancel();
        }
    }, {
        key: 'setTargetEventListeners',
        value: function setTargetEventListeners(getTarget) {
            var _this4 = this;

            var target = getTarget();
            if (!target) {
                return;
            }
            this.clearEventListeners();

            this.events.forEach(function (eventName) {
                _this4.eventHandlers[eventName] = (0, _addEventListener2.default)(target, eventName, _this4.updatePosition);
            });
        }
    }, {
        key: 'clearEventListeners',
        value: function clearEventListeners() {
            var _this5 = this;

            this.events.forEach(function (eventName) {
                var handler = _this5.eventHandlers[eventName];
                if (handler && handler.remove) {
                    handler.remove();
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var className = (0, _classnames2.default)(_defineProperty({}, this.props.prefixCls || 'jc-affix', this.state.affixStyle));

            var props = (0, _omit2.default)(this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target', 'onChange']);
            var placeholderStyle = _extends({}, this.state.placeholderStyle, this.props.style);
            return React.createElement(
                'div',
                _extends({}, props, { style: placeholderStyle, ref: this.savePlaceholderNode }),
                React.createElement(
                    'div',
                    { className: className, ref: this.saveFixedNode, style: this.state.affixStyle },
                    this.props.children
                )
            );
        }
    }]);

    return Affix;
}(React.Component), (_applyDecoratedDescriptor(_class.prototype, 'updatePosition', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'updatePosition'), _class.prototype)), _class));
Affix.propTypes = _extends({}, AffixProps, {
    offsetTop: _propTypes2.default.number,
    offsetBottom: _propTypes2.default.number,
    target: _propTypes2.default.func
});
exports.default = Affix;
//# sourceMappingURL=index.js.map