'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Divider;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Divider(_ref) {
    var _classNames;

    var _ref$prefixCls = _ref.prefixCls,
        prefixCls = _ref$prefixCls === undefined ? 'jc' : _ref$prefixCls,
        _ref$type = _ref.type,
        type = _ref$type === undefined ? 'horizontal' : _ref$type,
        _ref$orientation = _ref.orientation,
        orientation = _ref$orientation === undefined ? '' : _ref$orientation,
        className = _ref.className,
        children = _ref.children,
        dashed = _ref.dashed,
        restProps = _objectWithoutProperties(_ref, ['prefixCls', 'type', 'orientation', 'className', 'children', 'dashed']);

    var orientationPrefix = orientation.length > 0 ? '-' + orientation : orientation;
    var classString = (0, _classnames2.default)(className, prefixCls + '-divider', prefixCls + '-divider-' + type, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-divider-with-text' + orientationPrefix, children), _defineProperty(_classNames, prefixCls + '-divider-dashed', !!dashed), _classNames));
    return React.createElement(
        'div',
        _extends({ className: classString }, restProps),
        children && React.createElement(
            'span',
            { className: prefixCls + '-divider-inner-text' },
            children
        )
    );
}
Divider.propTypes = {
    prefixCls: _propTypes2.default.string,
    type: _propTypes2.default.oneOf(['horizontal', 'vertical']),
    orientation: _propTypes2.default.oneOf(['left', 'right']),
    className: _propTypes2.default.string,
    children: _propTypes2.default.node,
    dashed: _propTypes2.default.bool,
    style: _propTypes2.default.object
};
//# sourceMappingURL=index.js.map