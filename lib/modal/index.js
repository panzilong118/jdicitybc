'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * @file modal
                                                                                                                                                                                                                                                                   * @author jiayi
                                                                                                                                                                                                                                                                   * @version: 3.4.0
                                                                                                                                                                                                                                                                   */

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _confirm = require('./confirm');

var _confirm2 = _interopRequireDefault(_confirm);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Modal2.default.info = function (props) {
    var config = _extends({
        type: 'info',
        iconType: 'info-circle',
        okCancel: false
    }, props);
    return (0, _confirm2.default)(config);
};

_Modal2.default.success = function (props) {
    var config = _extends({
        type: 'success',
        iconType: 'check-circle',
        okCancel: false
    }, props);
    return (0, _confirm2.default)(config);
};

_Modal2.default.error = function (props) {
    var config = _extends({
        type: 'error',
        iconType: 'cross-circle',
        okCancel: false
    }, props);
    return (0, _confirm2.default)(config);
};

_Modal2.default.warning = _Modal2.default.warn = function (props) {
    var config = _extends({
        type: 'warning',
        iconType: 'exclamation-circle',
        okCancel: false
    }, props);
    return (0, _confirm2.default)(config);
};

_Modal2.default.confirm = function (props) {
    var config = _extends({
        type: 'confirm',
        okCancel: true
    }, props);
    return (0, _confirm2.default)(config);
};

exports.default = _Modal2.default;


_Modal2.default.defaultProps = {
    prefixCls: 'jc-modal',
    width: 520,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    confirmLoading: false,
    visible: false,
    okType: 'primary'

};

_Modal2.default.propTypes = {
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
//# sourceMappingURL=index.js.map