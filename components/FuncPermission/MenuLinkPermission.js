'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _message2 = require('jdcloudui/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('jdcloudui/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by chenyanhua on 2017/08/11.
 */

var MenuLinkPermission = function (_Component) {
    (0, _inherits3.default)(MenuLinkPermission, _Component);

    function MenuLinkPermission(props, context) {
        (0, _classCallCheck3.default)(this, MenuLinkPermission);
        return (0, _possibleConstructorReturn3.default)(this, (MenuLinkPermission.__proto__ || (0, _getPrototypeOf2.default)(MenuLinkPermission)).call(this, props, context));
    }

    (0, _createClass3.default)(MenuLinkPermission, [{
        key: 'handleClick',
        value: function handleClick() {
            _message3.default.warning('抱歉！您无相关权限');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var result = this.props.result;
            var html = _react2.default.createElement(
                'a',
                { onClick: function onClick() {
                        return _this2.handleClick();
                    } },
                this.props.value
            );
            if (result) {
                if (result.isPrimary) {
                    //主账号
                    html = this.props.children;
                } else {
                    //子账号
                    var urls = result.urls;
                    var curUrl = this.props.curUrl;
                    if (urls && urls.length > 0) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = (0, _getIterator3.default)(urls), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var itemUrl = _step.value;

                                if (curUrl === itemUrl) {
                                    html = this.props.children;
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                }
            }

            return _react2.default.createElement(
                'span',
                null,
                html
            );
        }
    }]);
    return MenuLinkPermission;
}(_react.Component);

exports.default = MenuLinkPermission;
module.exports = exports['default'];
//# sourceMappingURL=MenuLinkPermission.js.map