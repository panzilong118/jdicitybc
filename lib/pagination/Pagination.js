'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcPagination = require('rc-pagination');

var _rcPagination2 = _interopRequireDefault(_rcPagination);

var _en_US = require('rc-pagination/lib/locale/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _MiniSelect = require('./MiniSelect');

var _MiniSelect2 = _interopRequireDefault(_MiniSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_React$Component) {
    _inherits(Pagination, _React$Component);

    function Pagination() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Pagination);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.renderPagination = function (locale) {
            var _this$props = _this.props,
                className = _this$props.className,
                size = _this$props.size,
                restProps = _objectWithoutProperties(_this$props, ['className', 'size']);

            var isSmall = size === 'small';
            return React.createElement(_rcPagination2.default, _extends({}, restProps, {
                className: (0, _classnames2.default)(className, { mini: isSmall }),
                selectComponentClass: isSmall ? _MiniSelect2.default : _select2.default,
                locale: locale
            }));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    // constructor(props) {
    //     super(props);
    // }


    _createClass(Pagination, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                _LocaleReceiver2.default,
                {
                    componentName: 'Pagination',
                    defaultLocale: _en_US2.default
                },
                this.renderPagination
            );
        }
    }]);

    return Pagination;
}(React.Component);

exports.default = Pagination;


Pagination.defaultProps = {
    prefixCls: 'jc-pagination',
    selectPrefixCls: 'jc-select'
};
//# sourceMappingURL=Pagination.js.map