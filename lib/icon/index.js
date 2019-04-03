'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * @file icon
                                                                                                                                                                                                                              * @author chenyanhua
                                                                                                                                                                                                                              * @version: 3.2.3
                                                                                                                                                                                                                              */


function Icon(props) {
    var prefixCls = props.prefixCls,
        type = props.type,
        spin = props.spin,
        className = props.className,
        others = _objectWithoutProperties(props, ['prefixCls', 'type', 'spin', 'className']);
    // 组合样式


    var classNameStr = (0, _classnames2.default)(prefixCls + ' ' + prefixCls + '-' + type + ' ', _defineProperty({}, prefixCls + '-spin', spin || type.indexOf('loading') >= 0), className);
    return _react2.default.createElement('i', _extends({ className: classNameStr }, others));
}

Icon.defaultProps = {
    prefixCls: 'jcicon',
    spin: false,
    className: '',
    style: {}
};

Icon.propTypes = {
    prefixCls: _propTypes2.default.string, // class前缀
    type: _propTypes2.default.string.isRequired,
    spin: _propTypes2.default.bool, // 动画效果
    style: _propTypes2.default.object, // 内联样式
    className: _propTypes2.default.string
};

exports.default = Icon;
//# sourceMappingURL=index.js.map