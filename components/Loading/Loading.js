'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _spin = require('jdcloudui/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

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

require('jdcloudui/lib/spin/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./LoadingStyle.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function (_Component) {
  (0, _inherits3.default)(Loading, _Component);

  function Loading(props, context) {
    (0, _classCallCheck3.default)(this, Loading);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Loading.__proto__ || (0, _getPrototypeOf2.default)(Loading)).call(this, props, context));

    _this.containers = '';
    return _this;
  }

  (0, _createClass3.default)(Loading, [{
    key: 'changeScrollStatus',
    value: function changeScrollStatus(status) {
      if (typeof document !== 'undefined') {
        var bodyElement = document.getElementsByTagName('body');
        if (status) {
          bodyElement[0].style.overflow = 'hidden';
        } else {
          bodyElement[0].style.overflow = 'auto';
        }
      } else {}
    }
  }, {
    key: 'render',
    value: function render() {
      this.changeScrollStatus(!this.props.loaded);
      return _react2.default.createElement(
        'div',
        null,
        !this.props.loaded && _react2.default.createElement(
          'div',
          { id: 'loadForLy' },
          _react2.default.createElement(
            'div',
            { className: 'example' },
            _react2.default.createElement(_spin2.default, { size: 'large' })
          )
        )
      );
    }
  }]);
  return Loading;
}(_react.Component); /*
                     
                      * author:LiuYang
                      * date:2017-09-05
                      * description:进行页面优化给数据返回过程加loading状态提升用户体验
                      */


exports.default = Loading;
module.exports = exports['default'];
//# sourceMappingURL=Loading.js.map