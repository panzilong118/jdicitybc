'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by gaoqingli on 2018/4/13.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Avatar = function (_React$Component) {
    _inherits(Avatar, _React$Component);

    // static avatarChildren;

    function Avatar(props) {
        _classCallCheck(this, Avatar);

        var _this = _possibleConstructorReturn(this, (Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call(this, props));

        _this.setScale = function () {
            var childrenNode = _this.avatarChildren;
            if (childrenNode) {
                var childrenWidth = childrenNode.offsetWidth;
                var avatarWidth = ReactDOM.findDOMNode(_this).getBoundingClientRect().width;
                // add 4px gap for each side to get better performance
                if (avatarWidth - 8 < childrenWidth) {
                    _this.setState({
                        scale: (avatarWidth - 8) / childrenWidth
                    });
                } else {
                    _this.setState({
                        scale: 1
                    });
                }
            }
        };

        _this.handleImgLoadError = function () {
            return _this.setState({ isImgExist: false });
        };

        _this.state = {
            scale: 1,
            isImgExist: true
        };
        _this.avatarChildren = undefined;
        return _this;
    }

    _createClass(Avatar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setScale();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevProps.children !== this.props.children || prevState.scale !== this.state.scale && this.state.scale === 1) {
                this.setScale();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _classNames2,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                shape = _props.shape,
                size = _props.size,
                src = _props.src,
                icon = _props.icon,
                className = _props.className,
                others = _objectWithoutProperties(_props, ['prefixCls', 'shape', 'size', 'src', 'icon', 'className']);

            var sizeCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _classNames));

            var classString = (0, _classnames2.default)(prefixCls, className, sizeCls, (_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-' + shape, shape), _defineProperty(_classNames2, prefixCls + '-image', src && this.state.isImgExist), _defineProperty(_classNames2, prefixCls + '-icon', icon), _classNames2));

            var children = this.props.children;

            if (src && this.state.isImgExist) {
                children = React.createElement('img', {
                    alt: '',
                    src: src,
                    onError: this.handleImgLoadError
                });
            } else if (icon) {
                children = React.createElement(_icon2.default, { type: icon });
            } else {
                var childrenNode = this.avatarChildren;
                if (childrenNode || this.state.scale !== 1) {
                    var childrenStyle = {
                        msTransform: 'scale(' + this.state.scale + ')',
                        WebkitTransform: 'scale(' + this.state.scale + ')',
                        transform: 'scale(' + this.state.scale + ')',
                        position: 'absolute',
                        display: 'inline-block',
                        left: 'calc(50% - ' + Math.round(childrenNode.offsetWidth / 2) + 'px)'
                    };
                    children = React.createElement(
                        'span',
                        {
                            className: prefixCls + '-string',
                            ref: function ref(span) {
                                _this2.avatarChildren = span;
                            },
                            style: childrenStyle
                        },
                        children
                    );
                } else {
                    children = React.createElement(
                        'span',
                        {
                            className: prefixCls + '-string',
                            ref: function ref(span) {
                                _this2.avatarChildren = span;
                            }
                        },
                        children
                    );
                }
            }
            return React.createElement(
                'span',
                _extends({}, others, { className: classString }),
                children
            );
        }
    }]);

    return Avatar;
}(React.Component);

Avatar.defaultProps = {
    prefixCls: 'jc-avatar',
    shape: 'circle',
    size: 'default'
};
exports.default = Avatar;
//# sourceMappingURL=index.js.map