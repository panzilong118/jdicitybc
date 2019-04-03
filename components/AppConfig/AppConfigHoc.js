'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = AppConfigHoc;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

var _reactRedux = require('react-redux');

var _redux = require('./redux');

var action = _interopRequireWildcard(_redux);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by huangxiao3 on 2018/5/31.
 */
var ev = '';
function AppConfigHoc(WrappedComponent) {
    var _dec, _class;

    return _dec = (0, _reactRedux.connect)(function (state) {
        return {};
    }, (0, _extends3.default)({}, action)), _dec(_class = function (_Component) {
        (0, _inherits3.default)(_class, _Component);

        function _class() {
            (0, _classCallCheck3.default)(this, _class);
            return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
        }

        (0, _createClass3.default)(_class, [{
            key: 'handleSubmit',
            value: function handleSubmit() {
                this.callParent();
            }
        }, {
            key: 'receiveMessage',
            value: function receiveMessage(event) {
                ev = event;
            }
        }, {
            key: 'callParent',
            value: function callParent() {
                ev && ev.source && ev.source.postMessage && ev.source.postMessage('ok', ev.origin);
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                window.addEventListener('message', this.receiveMessage, false);
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, this.props, { callParent: this.callParent, testPropsFromHoc: 'aahahahh' }));
            }
        }]);
        return _class;
    }(_react.Component)) || _class;
}
module.exports = exports['default'];
//# sourceMappingURL=AppConfigHoc.js.map