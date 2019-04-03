'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilterDropdownMenuWrapperProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var FilterDropdownMenuWrapperProps = exports.FilterDropdownMenuWrapperProps = {
    onClick: _propTypes2.default.func,
    children: _propTypes2.default.any,
    className: _propTypes2.default.string
};

function FilterDropdownMenuWrapper(props) {
    return React.createElement(
        'div',
        { className: props.className, onClick: props.onClick },
        props.children
    );
}
FilterDropdownMenuWrapper.propTypes = _extends({}, FilterDropdownMenuWrapperProps);

exports.default = FilterDropdownMenuWrapper;
//# sourceMappingURL=FilterDropdownMenuWrapper.js.map