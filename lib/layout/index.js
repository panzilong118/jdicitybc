'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BasicComponent = require('./BasicComponent');

var _BasicComponent2 = _interopRequireDefault(_BasicComponent);

var _BasicLayout = require('./BasicLayout');

var _BasicLayout2 = _interopRequireDefault(_BasicLayout);

var _Sider = require('./Sider');

var _Sider2 = _interopRequireDefault(_Sider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 组合 Layout, Header, Content, Sider, 返回Layout组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author chenyanhua
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @namespace Layout
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// 注册新组件
var injectComponent = function injectComponent(basicProps) {
    return function (WrappedComponent) {
        // 返回新组件并传参
        return function (_React$Component) {
            _inherits(_class2, _React$Component);

            function _class2() {
                _classCallCheck(this, _class2);

                return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
            }

            _createClass(_class2, [{
                key: 'render',
                value: function render() {
                    return _react2.default.createElement(WrappedComponent, _extends({}, basicProps, this.props));
                }
            }]);

            return _class2;
        }(_react2.default.Component);
    };
};

var Layout = injectComponent({
    prefixCls: 'jc-layout'
})(_BasicLayout2.default);

var Header = injectComponent({
    prefixCls: 'jc-layout-header'
})(_BasicComponent2.default);

var Footer = injectComponent({
    prefixCls: 'jc-layout-footer'
})(_BasicComponent2.default);

var Content = injectComponent({
    prefixCls: 'jc-layout-content'
})(_BasicComponent2.default);

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = _Sider2.default;

exports.default = Layout;
//# sourceMappingURL=index.js.map