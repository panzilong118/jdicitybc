'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

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

var _layout = require('jdcloudui/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

require('jdcloudui/lib/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = require('react-router-config');

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _layout2.default.Header,
    Footer = _layout2.default.Footer,
    Sider = _layout2.default.Sider,
    Content = _layout2.default.Content;
/*import { withRouter } from 'react-router';*/

/*@withRouter*/
var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App(props, context) {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props, context));
    }

    (0, _createClass3.default)(App, [{
        key: 'render',
        value: function render() {
            var route = this.props.route;

            return _react2.default.createElement(
                _layout2.default,
                null,
                _react2.default.createElement(
                    Header,
                    null,
                    '\u7EC4\u4EF6\u914D\u7F6E\u4E2D\u5FC3'
                ),
                _react2.default.createElement(
                    _layout2.default,
                    null,
                    _react2.default.createElement(
                        Content,
                        null,
                        route ? (0, _reactRouterConfig.renderRoutes)(route.routes) : ''
                    )
                )
            );
        }
    }]);
    return App;
}(_react.Component);

exports.default = App;
module.exports = exports['default'];
//# sourceMappingURL=App.js.map