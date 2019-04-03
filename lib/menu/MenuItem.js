'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcMenu = require('rc-menu');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 二次封装MenuItem,提供收起时，MenuItem有提示信息
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author chenyanhua
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MenuItem = function (_React$Component) {
    _inherits(MenuItem, _React$Component);

    function MenuItem(props) {
        _classCallCheck(this, MenuItem);

        var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

        _this.onKeyDown = function (e) {
            _this.menuItem.onKeyDown(e);
        };

        _this.saveMenuItem = function (menuItem) {
            _this.menuItem = menuItem;
        };

        _this.menuItem = undefined;
        return _this;
    }
    /**
     * 接收父组件参数
     * @variable inlineCollapsed: 菜单是否收起状态
     */


    _createClass(MenuItem, [{
        key: 'render',
        value: function render() {
            var inlineCollapsed = this.context.inlineCollapsed;
            var _props = this.props,
                level = _props.level,
                children = _props.children,
                rootPrefixCls = _props.rootPrefixCls;

            var item = _react2.default.createElement(_rcMenu.Item, _extends({}, this.props, { ref: this.saveMenuItem }));
            if (inlineCollapsed && level === 1) {
                return _react2.default.createElement(
                    _tooltip2.default,
                    {
                        title: children,
                        placement: 'right',
                        overlayClassName: rootPrefixCls + '-inline-collapsed-tooltip'
                    },
                    item
                );
            }
            return item;
        }
    }]);

    return MenuItem;
}(_react2.default.Component);

MenuItem.isMenuItem = 1;
MenuItem.contextTypes = {
    inlineCollapsed: _propTypes2.default.bool
};
exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map