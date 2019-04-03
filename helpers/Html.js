'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _class,
    _temp,
    _jsxFileName = '..\\..\\src\\helpers\\Html.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _serializeJavascript = require('serialize-javascript');

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
var Html = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Html, _Component);

  function Html() {
    (0, _classCallCheck3.default)(this, Html);
    return (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || (0, _getPrototypeOf2.default)(Html)).apply(this, arguments));
  }

  (0, _createClass3.default)(Html, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          assets = _props.assets,
          component = _props.component,
          store = _props.store;

      var content = component ? _server2.default.renderToString(component) : '';
      var head = _reactHelmet2.default.rewind();
      return _react2.default.createElement(
        'html',
        { lang: 'en-us', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        },
        _react2.default.createElement(
          'head',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          head.base.toComponent(),
          head.title.toComponent(),
          head.meta.toComponent(),
          head.link.toComponent(),
          head.script.toComponent(),
          _react2.default.createElement('link', { rel: 'shortcut icon', href: '/favicon.ico', __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }),
          _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1', __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }),
          _react2.default.createElement('meta', { name: 'renderer', content: 'webkit', __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }),
          _react2.default.createElement('meta', { content: 'always', name: 'referrer', __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }),
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          }),
          (0, _keys2.default)(assets.styles).map(function (style, key) {
            return _react2.default.createElement('link', { href: assets.styles[style], key: key, media: 'screen, projection',
              rel: 'stylesheet', type: 'text/css', charSet: 'UTF-8', __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            });
          })
        ),
        _react2.default.createElement(
          'body',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          _react2.default.createElement('div', { id: 'content', dangerouslySetInnerHTML: { __html: content }, __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          }),
          _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: 'window.__data=' + (0, _serializeJavascript2.default)(store.getState()) + ';' }, charSet: 'UTF-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          }),
          _react2.default.createElement('script', { src: assets.javascript.main, charSet: 'UTF-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          })
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);
  return Html;
}(_react.Component), _class.propTypes = {
  assets: _propTypes2.default.object,
  component: _propTypes2.default.node,
  store: _propTypes2.default.object
}, _temp);
exports.default = Html;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Html, 'Html', '../../src/helpers/Html.js');
  leaveModule(module);
})();

;
module.exports = exports['default'];
//# sourceMappingURL=Html.js.map