'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BasicComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * @file 为Header，Footer，Content提供基础组件服务
                                                                                                                                                                                                                              * @author chenyanhua
                                                                                                                                                                                                                              */


function BasicComponent(props) {
    var prefixCls = props.prefixCls,
        className = props.className,
        others = _objectWithoutProperties(props, ['prefixCls', 'className']);

    // 组合样式


    var divCls = (0, _classnames2.default)(className, prefixCls);

    return _react2.default.createElement(
        'div',
        _extends({ className: divCls }, others),
        props.children
    );
}

BasicComponent.defaultProps = {
    prefixCls: 'jc-layout',
    className: '',
    type: ''
};

BasicComponent.propTypes = {
    prefixCls: _propTypes2.default.string, // class前缀
    className: _propTypes2.default.string,
    type: _propTypes2.default.string // 判断组件类型
};
//# sourceMappingURL=BasicComponent.js.map