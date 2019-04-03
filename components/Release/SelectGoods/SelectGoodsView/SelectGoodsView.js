'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _breadcrumb = require('jdcloudui/lib/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

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

require('jdcloudui/lib/breadcrumb/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('jdcloudecc/components');

var _SelectGoodsList = require('../SelectGoodsList/SelectGoodsList');

var _SelectGoodsList2 = _interopRequireDefault(_SelectGoodsList);

var _SelectGoodsSearch = require('../SelectGoodsSearch/SelectGoodsSearch');

var _SelectGoodsSearch2 = _interopRequireDefault(_SelectGoodsSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by huangxiao3 on 2017/2/20.
 */
var pageSize = 10;

var SelectGoodsView = function (_Component) {
  (0, _inherits3.default)(SelectGoodsView, _Component);

  function SelectGoodsView() {
    (0, _classCallCheck3.default)(this, SelectGoodsView);
    return (0, _possibleConstructorReturn3.default)(this, (SelectGoodsView.__proto__ || (0, _getPrototypeOf2.default)(SelectGoodsView)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectGoodsView, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ui-container ui-shop' },
        _react2.default.createElement(_components.Customer, { SqCode: 'http://p.qiao.baidu.com/cps/chat?siteId=10819178&userId=23978973' }),
        _react2.default.createElement(
          'div',
          { className: 'ui-breadcrumb' },
          _react2.default.createElement(
            _breadcrumb2.default,
            null,
            _react2.default.createElement(
              _breadcrumb2.default.Item,
              null,
              '\u9996\u9875'
            ),
            _react2.default.createElement(
              _breadcrumb2.default.Item,
              null,
              _react2.default.createElement(
                'a',
                { href: '' },
                '\u5546\u54C1\u7BA1\u7406'
              )
            ),
            _react2.default.createElement(
              _breadcrumb2.default.Item,
              null,
              '\u9009\u62E9\u4F9B\u8D27\u5546\u54C1'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'ui-ct' },
          _react2.default.createElement(
            'div',
            { className: 'ui-hd' },
            '\u9009\u62E9\u4F9B\u8D27\u5546\u54C1'
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui-bd' },
            _react2.default.createElement(_SelectGoodsSearch2.default, { pageSize: pageSize }),
            _react2.default.createElement(
              'div',
              { className: 'mt20' },
              _react2.default.createElement(_SelectGoodsList2.default, { pageSize: pageSize })
            )
          )
        )
      );
    }
  }]);
  return SelectGoodsView;
}(_react.Component);

exports.default = SelectGoodsView;
module.exports = exports['default'];
//# sourceMappingURL=SelectGoodsView.js.map