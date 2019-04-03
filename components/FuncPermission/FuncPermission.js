'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by songshuangwang on 2017/6/30.
 */

var FuncPermission = function (_Component) {
  (0, _inherits3.default)(FuncPermission, _Component);

  function FuncPermission(props, context) {
    (0, _classCallCheck3.default)(this, FuncPermission);
    return (0, _possibleConstructorReturn3.default)(this, (FuncPermission.__proto__ || (0, _getPrototypeOf2.default)(FuncPermission)).call(this, props, context));
  }

  (0, _createClass3.default)(FuncPermission, [{
    key: 'render',
    value: function render() {
      var codes = this.props.codes;
      var curCode = this.props.code;
      var result = null;
      if (codes && codes.length > 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(codes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var resource = _step.value;

            if (curCode === resource) {
              result = this.props.children;
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
      return _react2.default.createElement(
        'span',
        null,
        result
      );
    }
  }]);
  return FuncPermission;
}(_react.Component);

exports.default = FuncPermission;
module.exports = exports['default'];
//# sourceMappingURL=FuncPermission.js.map