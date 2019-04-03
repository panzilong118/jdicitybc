'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 为Layout提供基础组件组件服务
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author chenyanhua
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var BasicLayout = function (_React$Component) {
    _inherits(BasicLayout, _React$Component);

    // props 类型
    function BasicLayout(props) {
        _classCallCheck(this, BasicLayout);

        var _this = _possibleConstructorReturn(this, (BasicLayout.__proto__ || Object.getPrototypeOf(BasicLayout)).call(this, props));

        _this.state = {
            siderNum: 0 // 记录子组件Sider数量
        };
        return _this;
    }
    /**
     * 向子组件传递参数
     * @return {object} returnObj.siderHandler 包含计算子组件Sider个数的函数
     * @variable {function} plus  : 子组件个数加1
     * @variable {function} minus : 子组件个数减1
     */

    // 向Sider子元素传递参数

    // 默认props


    _createClass(BasicLayout, [{
        key: 'getChildContext',
        value: function getChildContext() {
            var _this2 = this;

            return {
                // 计算子组件Sider个数
                siderHandler: {
                    // Sider个数 +1
                    plus: function plus() {
                        _this2.setState(function (prevState) {
                            return {
                                siderNum: prevState.siderNum + 1
                            };
                        });
                    },
                    // Sider个数 -1
                    minus: function minus() {
                        _this2.setState(function (prevState) {
                            return {
                                siderNum: prevState.siderNum - 1
                            };
                        });
                    }
                }
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                hasSider = _props.hasSider,
                others = _objectWithoutProperties(_props, ['prefixCls', 'className', 'hasSider']);

            var divCls = (0, _classnames2.default)(className, prefixCls, _defineProperty({}, prefixCls + '-has-sider', hasSider || this.state.siderNum > 0));
            return _react2.default.createElement(
                'div',
                _extends({ className: divCls }, others),
                this.props.children
            );
        }
    }]);

    return BasicLayout;
}(_react2.default.Component);

BasicLayout.defaultProps = {
    prefixCls: 'jc-layout', // class前缀
    className: '',
    hasSider: false // 是否有Sider子组件
};
BasicLayout.propTypes = {
    prefixCls: _propTypes2.default.string,
    className: _propTypes2.default.string,
    hasSider: _propTypes2.default.bool
};
BasicLayout.childContextTypes = {
    siderHandler: _propTypes2.default.object
};
exports.default = BasicLayout;
//# sourceMappingURL=BasicLayout.js.map