'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _rcTabs = require('rc-tabs');

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _ScrollableInkTabBar = require('rc-tabs/lib/ScrollableInkTabBar');

var _ScrollableInkTabBar2 = _interopRequireDefault(_ScrollableInkTabBar);

var _TabContent = require('rc-tabs/lib/TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

var _isFlexSupported = require('../_util/isFlexSupported');

var _isFlexSupported2 = _interopRequireDefault(_isFlexSupported);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by gaoqingli on 2018/4/10.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Tabs = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Tabs);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.createNewTab = function (targetKey) {
            var onEdit = _this.props.onEdit;

            if (onEdit) {
                onEdit(targetKey, 'add');
            }
        }, _this.removeTab = function (targetKey, e) {
            e.stopPropagation();
            if (!targetKey) {
                return;
            }

            var onEdit = _this.props.onEdit;

            if (onEdit) {
                onEdit(targetKey, 'remove');
            }
        }, _this.handleChange = function (activeKey) {
            var onChange = _this.props.onChange;

            if (onChange) {
                onChange(activeKey);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Tabs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var NO_FLEX = ' no-flex';
            var tabNode = ReactDOM.findDOMNode(this);
            if (tabNode && !(0, _isFlexSupported2.default)() && tabNode.className.indexOf(NO_FLEX) === -1) {
                tabNode.className += NO_FLEX;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                size = _props.size,
                _props$type = _props.type,
                type = _props$type === undefined ? 'line' : _props$type,
                tabPosition = _props.tabPosition,
                children = _props.children,
                tabBarStyle = _props.tabBarStyle,
                hideAdd = _props.hideAdd,
                onTabClick = _props.onTabClick,
                onPrevClick = _props.onPrevClick,
                onNextClick = _props.onNextClick,
                _props$animated = _props.animated,
                animated = _props$animated === undefined ? true : _props$animated,
                tabBarGutter = _props.tabBarGutter;
            var tabBarExtraContent = this.props.tabBarExtraContent;

            var _ref2 = (typeof animated === 'undefined' ? 'undefined' : _typeof(animated)) === 'object' ? {
                inkBarAnimated: animated.inkBar
            } : {
                inkBarAnimated: animated
            },
                inkBarAnimated = _ref2.inkBarAnimated;

            var _ref3 = (typeof animated === 'undefined' ? 'undefined' : _typeof(animated)) === 'object' ? {
                tabPaneAnimated: animated.tabPane
            } : {
                tabPaneAnimated: animated
            },
                tabPaneAnimated = _ref3.tabPaneAnimated;

            // card tabs should not have animation


            if (type !== 'line') {
                tabPaneAnimated = 'animated' in this.props ? tabPaneAnimated : false;
            }

            (0, _warning2.default)(!(type.indexOf('card') >= 0 && (size === 'small' || size === 'large')), 'Tabs[type=card|editable-card] doesn\'t have small or large size, it\'s by designed.');
            var cls = (0, _classnames2.default)(className, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-vertical', tabPosition === 'left' || tabPosition === 'right'), _defineProperty(_classNames, prefixCls + '-' + size, !!size), _defineProperty(_classNames, prefixCls + '-card', type.indexOf('card') >= 0), _defineProperty(_classNames, prefixCls + '-' + type, true), _defineProperty(_classNames, prefixCls + '-no-animation', !tabPaneAnimated), _classNames));
            // only card type tabs can be added and closed
            var childrenWithClose = [];

            tabBarExtraContent = tabBarExtraContent ? React.createElement(
                'div',
                { className: prefixCls + '-extra-content' },
                tabBarExtraContent
            ) : null;

            if (type === 'editable-card') {
                childrenWithClose = [];
                React.Children.forEach(children, function (child, index) {
                    var closable = child.props.closable;

                    closable = typeof closable === 'undefined' ? true : closable;
                    var closeIcon = closable ? React.createElement(_icon2.default, {
                        type: 'close',
                        onClick: function onClick(e) {
                            return _this2.removeTab(child.key, e);
                        }
                    }) : null;
                    childrenWithClose.push(React.cloneElement(child, {
                        tab: React.createElement(
                            'div',
                            { className: closable ? undefined : prefixCls + '-tab-unclosable' },
                            child.props.tab,
                            closeIcon
                        ),
                        key: child.key || index
                    }));
                });
                // Add new tab handler
                if (!hideAdd) {
                    tabBarExtraContent = React.createElement(
                        'span',
                        null,
                        React.createElement(_icon2.default, { type: 'plus', className: prefixCls + '-new-tab', onClick: this.createNewTab }),
                        tabBarExtraContent
                    );
                }
            }

            var renderTabBar = function renderTabBar() {
                return React.createElement(_ScrollableInkTabBar2.default, {
                    inkBarAnimated: inkBarAnimated,
                    extraContent: tabBarExtraContent,
                    onTabClick: onTabClick,
                    onPrevClick: onPrevClick,
                    onNextClick: onNextClick,
                    style: tabBarStyle,
                    tabBarGutter: tabBarGutter
                });
            };

            return React.createElement(
                _rcTabs2.default,
                _extends({}, this.props, {
                    className: cls,
                    tabBarPosition: tabPosition,
                    renderTabBar: renderTabBar,
                    renderTabContent: function renderTabContent() {
                        return React.createElement(_TabContent2.default, { animated: tabPaneAnimated, animatedWithMargin: true });
                    },
                    onChange: this.handleChange
                }),
                childrenWithClose.length > 0 ? childrenWithClose : children
            );
        }
    }]);

    return Tabs;
}(React.Component);

Tabs.TabPane = _rcTabs.TabPane;
Tabs.defaultProps = {
    prefixCls: 'jc-tabs',
    hideAdd: false
};
exports.default = Tabs;
//# sourceMappingURL=index.js.map