'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModalLocale = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _default = require('../locale-provider/default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalLocale = exports.ModalLocale = {
    okText: _propTypes2.default.string,
    cancelText: _propTypes2.default.string,
    justOkText: _propTypes2.default.string
};

var runtimeLocale = _extends({}, _default2.default.Modal);

function changeConfirmLocale(newLocale) {
    if (newLocale) {
        runtimeLocale = _extends({}, runtimeLocale, newLocale);
    } else {
        runtimeLocale = _extends({}, _default2.default.Modal);
    }
}

function getConfirmLocale() {
    return runtimeLocale;
}
changeConfirmLocale.propTypes = {
    okText: _propTypes2.default.string,
    cancelText: _propTypes2.default.string,
    justOkText: _propTypes2.default.string
};
//# sourceMappingURL=locale.js.map