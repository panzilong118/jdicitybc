'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcProgress = require('rc-progress');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Creat by gaoqingli on 2018/3/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var statusColorMap = {
    normal: '#108ee9',
    exception: '#ff5500',
    success: '#87d068'
};

var Progress = function (_React$Component) {
    _inherits(Progress, _React$Component);

    function Progress() {
        _classCallCheck(this, Progress);

        return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
    }

    _createClass(Progress, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                _props$percent = _props.percent,
                percent = _props$percent === undefined ? 0 : _props$percent,
                status = _props.status,
                format = _props.format,
                trailColor = _props.trailColor,
                size = _props.size,
                successPercent = _props.successPercent,
                type = _props.type,
                strokeWidth = _props.strokeWidth,
                width = _props.width,
                showInfo = _props.showInfo,
                _props$gapDegree = _props.gapDegree,
                gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
                gapPosition = _props.gapPosition,
                restProps = _objectWithoutProperties(_props, ['prefixCls', 'className', 'percent', 'status', 'format', 'trailColor', 'size', 'successPercent', 'type', 'strokeWidth', 'width', 'showInfo', 'gapDegree', 'gapPosition']);

            var progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in this.props) ? 'success' : status || 'normal';
            var progressInfo = void 0;
            var progress = void 0;
            var textFormatter = format || function (percentNumber) {
                return percentNumber + '%';
            };

            if (showInfo) {
                var text = void 0;
                var iconType = type === 'circle' || type === 'dashboard' ? '' : '-circle';
                if (progressStatus === 'exception') {
                    text = format ? textFormatter(percent) : React.createElement(_icon2.default, { type: 'cross' + iconType });
                } else if (progressStatus === 'success') {
                    text = format ? textFormatter(percent) : React.createElement(_icon2.default, { type: 'check' + iconType });
                } else {
                    text = textFormatter(percent);
                }
                progressInfo = React.createElement(
                    'span',
                    { className: prefixCls + '-text' },
                    text
                );
            }

            // 进度条类型
            if (type === 'line') {
                var percentStyle = {
                    width: percent + '%',
                    height: strokeWidth || (size === 'small' ? 6 : 8)
                };
                var successPercentStyle = {
                    width: successPercent + '%',
                    height: strokeWidth || (size === 'small' ? 6 : 8)
                };
                var successSegment = successPercent !== undefined ? React.createElement('div', { className: prefixCls + '-success-bg', style: successPercentStyle }) : null;
                progress = React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { className: prefixCls + '-outer' },
                        React.createElement(
                            'div',
                            { className: prefixCls + '-inner' },
                            React.createElement('div', { className: prefixCls + '-bg', style: percentStyle }),
                            successSegment
                        )
                    ),
                    progressInfo
                );
            } else if (type === 'circle' || type === 'dashboard') {
                var circleSize = width || 120;
                var circleStyle = {
                    width: circleSize,
                    height: circleSize,
                    fontSize: circleSize * 0.15 + 6
                };
                var circleWidth = strokeWidth || 6;
                var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
                var gapDeg = gapDegree || type === 'dashboard' && 75;
                progress = React.createElement(
                    'div',
                    { className: prefixCls + '-inner', style: circleStyle },
                    React.createElement(_rcProgress.Circle, {
                        percent: percent,
                        strokeWidth: circleWidth,
                        trailWidth: circleWidth,
                        strokeColor: statusColorMap[progressStatus],
                        trailColor: trailColor,
                        prefixCls: prefixCls,
                        gapDegree: gapDeg,
                        gapPosition: gapPos
                    }),
                    progressInfo
                );
            }
            var classString = (0, _classnames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-' + (type === 'dashboard' && 'circle' || type), true), _defineProperty(_classNames, prefixCls + '-status-' + progressStatus, true), _defineProperty(_classNames, prefixCls + '-show-info', showInfo), _defineProperty(_classNames, prefixCls + '-' + size, size), _classNames), className);
            return React.createElement(
                'div',
                _extends({}, restProps, { className: classString }),
                progress
            );
        }
    }]);

    return Progress;
}(React.Component);
// 默认属性


exports.default = Progress;
Progress.defaultProps = {
    type: 'line',
    percent: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
    prefixCls: 'jc-progress',
    size: 'default'
};
// 参数类型校验
Progress.propTypes = {
    size: _propTypes2.default.string,
    prefixCls: _propTypes2.default.string,
    status: _propTypes2.default.oneOf(['normal', 'exception', 'active', 'success']),
    type: _propTypes2.default.oneOf(['line', 'circle', 'dashboard']),
    showInfo: _propTypes2.default.bool,
    percent: _propTypes2.default.number,
    width: _propTypes2.default.number,
    strokeWidth: _propTypes2.default.number,
    trailColor: _propTypes2.default.string,
    format: _propTypes2.default.func,
    gapDegree: _propTypes2.default.number,
    default: _propTypes2.default.oneOf(['default', 'small'])
};
//# sourceMappingURL=progress.js.map