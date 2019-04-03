'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcDialog = require('rc-dialog');

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _locale = require('./locale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mousePosition = void 0;
var mousePositionEventBinded = void 0;

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Modal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.handleCancel = function (e) {
            var onCancel = _this.props.onCancel;

            if (onCancel) {
                onCancel(e);
            }
        }, _this.handleOk = function (e) {
            var onOk = _this.props.onOk;

            if (onOk) {
                onOk(e);
            }
        }, _this.renderFooter = function (locale) {
            var _this$props = _this.props,
                okText = _this$props.okText,
                okType = _this$props.okType,
                cancelText = _this$props.cancelText,
                confirmLoading = _this$props.confirmLoading;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    _button2.default,
                    {
                        onClick: _this.handleCancel
                    },
                    cancelText || locale.cancelText
                ),
                React.createElement(
                    _button2.default,
                    {
                        type: okType,
                        loading: confirmLoading,
                        onClick: _this.handleOk
                    },
                    okText || locale.okText
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (mousePositionEventBinded) {
                return;
            }
            // 只有点击事件支持从鼠标位置动画展开
            (0, _addEventListener2.default)(document.documentElement, 'click', function (e) {
                mousePosition = {
                    x: e.pageX,
                    y: e.pageY
                };
                // 100ms 内发生过点击事件，则从点击位置动画展示
                // 否则直接 zoom 展示
                // 这样可以兼容非点击方式展开
                setTimeout(function () {
                    return mousePosition;
                }, 100);
            });
            mousePositionEventBinded = true;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                footer = _props.footer,
                visible = _props.visible;


            var defaultFooter = React.createElement(
                _LocaleReceiver2.default,
                {
                    componentName: 'Modal',
                    defaultLocale: (0, _locale.getConfirmLocale)()
                },
                this.renderFooter
            );

            return React.createElement(_rcDialog2.default, _extends({}, this.props, {
                footer: footer === undefined ? defaultFooter : footer,
                visible: visible,
                mousePosition: mousePosition,
                onClose: this.handleCancel
            }));
        }
    }]);

    return Modal;
}(React.Component);

exports.default = Modal;


Modal.defaultProps = {
    prefixCls: 'jc-modal',
    width: 520,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    confirmLoading: false,
    visible: false,
    okType: 'primary'

};

Modal.propTypes = {
    mousePosition: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf([null])]),
    mousePositionEventBinded: _propTypes2.default.bool,
    prefixCls: _propTypes2.default.string,
    onOk: _propTypes2.default.func,
    onCancel: _propTypes2.default.func,
    okText: _propTypes2.default.node,
    cancelText: _propTypes2.default.node,
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    confirmLoading: _propTypes2.default.bool,
    visible: _propTypes2.default.bool,
    align: _propTypes2.default.object,
    footer: _propTypes2.default.node,
    title: _propTypes2.default.node,
    closable: _propTypes2.default.bool,
    maskClosable: _propTypes2.default.bool,
    destroyOnClose: _propTypes2.default.bool,
    wrapClassName: _propTypes2.default.string,
    maskTransitionName: _propTypes2.default.string,
    transitionName: _propTypes2.default.string,
    className: _propTypes2.default.string,
    zIndex: _propTypes2.default.number,
    mask: _propTypes2.default.bool,
    keyboard: _propTypes2.default.bool,
    iconClassName: _propTypes2.default.string,
    iconType: _propTypes2.default.string,
    okCancel: _propTypes2.default.bool,
    type: _propTypes2.default.string,
    okType: _propTypes2.default.string
};
//# sourceMappingURL=Modal.js.map