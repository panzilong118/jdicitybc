'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.CardProps = exports.CardTabListType = exports.CardType = exports.CardMetaProps = exports.CardGridProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class; /**
                                  * @author: chenyanhua
                                  * @version: 3.4.1
                                  */


var _Grid = require('./Grid');

Object.defineProperty(exports, 'CardGridProps', {
    enumerable: true,
    get: function get() {
        return _Grid.CardGridProps;
    }
});

var _Meta = require('./Meta');

Object.defineProperty(exports, 'CardMetaProps', {
    enumerable: true,
    get: function get() {
        return _Meta.CardMetaProps;
    }
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _Grid2 = _interopRequireDefault(_Grid);

var _Meta2 = _interopRequireDefault(_Meta);

var _tabs = require('../tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _throttleByAnimationFrame = require('../_util/throttleByAnimationFrame');

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

var CardType = exports.CardType = 'inner';

var CardTabListType = exports.CardTabListType = {
    key: _propTypes2.default.string,
    tab: _propTypes2.default.node
};

var CardProps = exports.CardProps = {
    prefixCls: _propTypes2.default.string,
    title: _propTypes2.default.node,
    extra: _propTypes2.default.node,
    bordered: _propTypes2.default.bool,
    bodyStyle: _propTypes2.default.object,
    style: _propTypes2.default.object,
    loading: _propTypes2.default.bool,
    noHovering: _propTypes2.default.bool,
    hoverable: _propTypes2.default.bool,
    children: _propTypes2.default.node,
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,
    type: _propTypes2.default.oneOf([CardType]),
    cover: _propTypes2.default.node,
    actions: _propTypes2.default.arrayOf(_propTypes2.default.node),
    tabList: _propTypes2.default.array,
    onTabChange: _propTypes2.default.func,
    activeTabKey: _propTypes2.default.string,
    defaultActiveTabKey: _propTypes2.default.string
};

var Card = (_dec = (0, _throttleByAnimationFrame.throttleByAnimationFrameDecorator)(), (_class = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card(props) {
        _classCallCheck(this, Card);

        var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

        _this.onTabChange = function (key) {
            if (_this.props.onTabChange) {
                _this.props.onTabChange(key);
            }
        };

        _this.saveRef = function (node) {
            _this.container = node;
        };

        _this.getAction = function (actions) {
            if (!actions || !actions.length) {
                return null;
            }
            var actionList = actions.map(function (action, index) {
                return React.createElement(
                    'li',
                    { style: { width: 100 / actions.length + '%' }, key: 'action-' + index },
                    React.createElement(
                        'span',
                        null,
                        action
                    )
                );
            });
            return actionList;
        };

        _this.resizeEvent = function () {};
        _this.updateWiderPaddingCalled = undefined;
        _this.container = undefined;
        _this.state = {
            widerPadding: false
        };
        return _this;
    }

    _createClass(Card, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateWiderPadding();
            this.resizeEvent = (0, _addEventListener2.default)(window, 'resize', this.updateWiderPadding);

            if ('noHovering' in this.props) {
                (0, _warning2.default)(!this.props.noHovering, '`noHovering` of Card is deprecated, you can remove it safely or use `hoverable` instead.');
                (0, _warning2.default)(!!this.props.noHovering, '`noHovering={false}` of Card is deprecated, use `hoverable` instead.');
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.resizeEvent) {
                this.resizeEvent.remove();
            }
            this.updateWiderPadding.cancel();
        }
    }, {
        key: 'updateWiderPadding',
        value: function updateWiderPadding() {
            var _this2 = this;

            if (!this.container) {
                return;
            }
            // 936 is a magic card width pixel number indicated by designer
            var WIDTH_BOUNDARY_PX = 936;
            if (this.container.offsetWidth >= WIDTH_BOUNDARY_PX && !this.state.widerPadding) {
                this.setState({ widerPadding: true }, function () {
                    _this2.updateWiderPaddingCalled = true; // first render without css transition
                });
            }
            if (this.container.offsetWidth < WIDTH_BOUNDARY_PX && this.state.widerPadding) {
                this.setState({ widerPadding: false }, function () {
                    _this2.updateWiderPaddingCalled = true; // first render without css transition
                });
            }
        }
    }, {
        key: 'isContainGrid',
        value: function isContainGrid() {
            var containGrid = void 0;
            React.Children.forEach(this.props.children, function (element) {
                if (element && element.type && element.type === _Grid2.default) {
                    containGrid = true;
                }
            });
            return containGrid;
        }
    }, {
        key: 'getCompatibleHoverable',

        // For 2.x compatible
        value: function getCompatibleHoverable() {
            var _props = this.props,
                noHovering = _props.noHovering,
                hoverable = _props.hoverable;

            if ('noHovering' in this.props) {
                return !noHovering || hoverable;
            }
            return !!hoverable;
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props2 = this.props,
                _props2$prefixCls = _props2.prefixCls,
                prefixCls = _props2$prefixCls === undefined ? 'jc-card' : _props2$prefixCls,
                className = _props2.className,
                extra = _props2.extra,
                bodyStyle = _props2.bodyStyle,
                noHovering = _props2.noHovering,
                hoverable = _props2.hoverable,
                title = _props2.title,
                loading = _props2.loading,
                _props2$bordered = _props2.bordered,
                bordered = _props2$bordered === undefined ? true : _props2$bordered,
                type = _props2.type,
                cover = _props2.cover,
                actions = _props2.actions,
                tabList = _props2.tabList,
                children = _props2.children,
                activeTabKey = _props2.activeTabKey,
                defaultActiveTabKey = _props2.defaultActiveTabKey,
                others = _objectWithoutProperties(_props2, ['prefixCls', 'className', 'extra', 'bodyStyle', 'noHovering', 'hoverable', 'title', 'loading', 'bordered', 'type', 'cover', 'actions', 'tabList', 'children', 'activeTabKey', 'defaultActiveTabKey']);

            var classString = (0, _classnames2.default)(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-loading', loading), _defineProperty(_classNames, prefixCls + '-bordered', bordered), _defineProperty(_classNames, prefixCls + '-hoverable', this.getCompatibleHoverable()), _defineProperty(_classNames, prefixCls + '-wider-padding', this.state.widerPadding), _defineProperty(_classNames, prefixCls + '-padding-transition', this.updateWiderPaddingCalled), _defineProperty(_classNames, prefixCls + '-contain-grid', this.isContainGrid()), _defineProperty(_classNames, prefixCls + '-contain-tabs', tabList && tabList.length), _defineProperty(_classNames, prefixCls + '-type-' + type, !!type), _classNames));

            var loadingBlock = React.createElement(
                'div',
                { className: prefixCls + '-loading-content' },
                React.createElement('p', { className: prefixCls + '-loading-block', style: { width: '94%' } }),
                React.createElement(
                    'p',
                    null,
                    React.createElement('span', { className: prefixCls + '-loading-block', style: { width: '28%' } }),
                    React.createElement('span', { className: prefixCls + '-loading-block', style: { width: '62%' } })
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement('span', { className: prefixCls + '-loading-block', style: { width: '22%' } }),
                    React.createElement('span', { className: prefixCls + '-loading-block', style: { width: '66%' } })
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement('span', { className: prefixCls + '-loading-block', style: { width: '56%' } }),
                    React.createElement('span', { className: prefixCls + '-loading-block', style: { width: '39%' } })
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement('span', { className: prefixCls + '-loading-block', style: { width: '21%' } }),
                    React.createElement('span', { className: prefixCls + '-loading-block', style: { width: '15%' } }),
                    React.createElement('span', { className: prefixCls + '-loading-block', style: { width: '40%' } })
                )
            );

            var hasActiveTabKey = activeTabKey !== undefined;
            var extraProps = _defineProperty({}, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey);

            var head = void 0;
            var tabs = tabList && tabList.length ? React.createElement(
                _tabs2.default,
                _extends({}, extraProps, {
                    className: prefixCls + '-head-tabs',
                    size: 'large',
                    onChange: this.onTabChange
                }),
                tabList.map(function (item) {
                    return React.createElement(_tabs2.default.TabPane, { tab: item.tab, key: item.key });
                })
            ) : null;
            if (title || extra || tabs) {
                head = React.createElement(
                    'div',
                    { className: prefixCls + '-head' },
                    React.createElement(
                        'div',
                        { className: prefixCls + '-head-wrapper' },
                        title && React.createElement(
                            'div',
                            { className: prefixCls + '-head-title' },
                            title
                        ),
                        extra && React.createElement(
                            'div',
                            { className: prefixCls + '-extra' },
                            extra
                        )
                    ),
                    tabs
                );
            }
            var coverDom = cover ? React.createElement(
                'div',
                { className: prefixCls + '-cover' },
                cover
            ) : null;
            var body = React.createElement(
                'div',
                { className: prefixCls + '-body', style: bodyStyle },
                loading ? loadingBlock : children
            );
            var actionDom = actions && actions.length ? React.createElement(
                'ul',
                { className: prefixCls + '-actions' },
                this.getAction(actions)
            ) : null;
            var divProps = (0, _omit2.default)(others, ['onTabChange']);
            return React.createElement(
                'div',
                _extends({}, divProps, { className: classString, ref: this.saveRef }),
                head,
                coverDom,
                body,
                actionDom
            );
        }
    }]);

    return Card;
}(React.Component), (_applyDecoratedDescriptor(_class.prototype, 'updateWiderPadding', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'updateWiderPadding'), _class.prototype)), _class));
Card.Grid = _Grid2.default;
Card.Meta = _Meta2.default;
Card.propTypes = _extends({}, CardProps);
exports.default = Card;
//# sourceMappingURL=index.js.map