'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = confirm;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _ActionButton = require('./ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

var _locale = require('./locale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var IS_REACT_16 = !!ReactDOM.createPortal;

var ConfirmDialog = function ConfirmDialog(props) {
    var onCancel = props.onCancel,
        onOk = props.onOk,
        close = props.close,
        zIndex = props.zIndex,
        afterClose = props.afterClose,
        visible = props.visible,
        keyboard = props.keyboard;

    var iconType = props.iconType || 'question-circle';
    var okType = props.okType || 'primary';
    var prefixCls = props.prefixCls || 'jc-confirm';
    // 默认为 true，保持向下兼容
    var okCancel = 'okCancel' in props ? props.okCancel : true;
    var width = props.width || 416;
    var style = props.style || {};
    // 默认为 false，保持旧版默认行为
    var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
    var runtimeLocale = (0, _locale.getConfirmLocale)();
    var okText = props.okText || (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
    var cancelText = props.cancelText || runtimeLocale.cancelText;

    var classString = (0, _classnames2.default)(prefixCls, prefixCls + '-' + props.type, props.className);

    var cancelButton = okCancel && React.createElement(
        _ActionButton2.default,
        { actionFn: onCancel, closeModal: close },
        cancelText
    );

    return React.createElement(
        _Modal2.default,
        {
            className: classString,
            onCancel: close.bind(undefined, { triggerCancel: true }),
            visible: visible,
            title: '',
            transitionName: 'zoom',
            footer: '',
            maskTransitionName: 'fade',
            maskClosable: maskClosable,
            style: style,
            width: width,
            zIndex: zIndex,
            afterClose: afterClose,
            keyboard: keyboard
        },
        React.createElement(
            'div',
            { className: prefixCls + '-body-wrapper' },
            React.createElement(
                'div',
                { className: prefixCls + '-body' },
                React.createElement(_icon2.default, { type: iconType }),
                React.createElement(
                    'span',
                    { className: prefixCls + '-title' },
                    props.title
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    props.content
                )
            ),
            React.createElement(
                'div',
                { className: prefixCls + '-btns' },
                cancelButton,
                React.createElement(
                    _ActionButton2.default,
                    { type: okType, actionFn: onOk, closeModal: close, autoFocus: true },
                    okText
                )
            )
        )
    );
};

function confirm(config) {
    var div = document.createElement('div');
    document.body.appendChild(div);

    function destroy() {
        var unmountResult = ReactDOM.unmountComponentAtNode(div);
        if (unmountResult && div.parentNode) {
            div.parentNode.removeChild(div);
        }

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var triggerCancel = args && args.length && args.some(function (param) {
            return param && param.triggerCancel;
        });
        if (config.onCancel && triggerCancel) {
            config.onCancel.apply(config, args);
        }
    }

    function render(props) {
        ReactDOM.render(React.createElement(ConfirmDialog, props), div);
    }

    function close() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        if (IS_REACT_16) {
            render(_extends({}, config, { close: close, visible: false, afterClose: destroy.bind.apply(destroy, [this].concat(args)) }));
        } else {
            destroy.apply(undefined, args);
        }
    }

    render(_extends({}, config, { visible: true, close: close }));

    return {
        destroy: close
    };
}
confirm.defaultProps = {
    prefixCls: 'jc-modal',
    width: 520,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    confirmLoading: false,
    visible: false,
    okType: 'primary'

};

confirm.propTypes = {
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
//# sourceMappingURL=confirm.js.map