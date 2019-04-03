'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _icon = require('jdcloudui/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

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

require('jdcloudui/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.css');

var _ApiClient = require('../../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Customer = function (_Component) {
  (0, _inherits3.default)(Customer, _Component);

  function Customer(props, content) {
    (0, _classCallCheck3.default)(this, Customer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Customer.__proto__ || (0, _getPrototypeOf2.default)(Customer)).call(this, props, content));

    _this.state = { scrollTop: 0, feedbackUrl: '' };
    return _this;
  }

  (0, _createClass3.default)(Customer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var client = new _ApiClient2.default();
      client.get('/passport/logout').then(function (res) {
        if (res.code == 0 && res.data) {
          res.data.map(function (_item) {
            if (_item.domainType == 1) {
              var feedbackUrl = 'http://' + _item.domain + '/website-view/user-feedback';
              _this2.setState({ feedbackUrl: feedbackUrl });
            }
          });
        }
      }, function (err) {});
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      document.addEventListener('scroll', function () {
        return _this3.onChange();
      }, true);
    }
  }, {
    key: 'toTop',
    value: function toTop() {
      document.body.scrollTop = 0;
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      this.setState({ scrollTop: document.body.scrollTop });
    }
  }, {
    key: 'handleCreateShangQiao',
    value: function handleCreateShangQiao() {
      var defaultUrl = 'http://p.qiao.baidu.com/cps/chat?siteId=10819178&userId=23978973';
      var iWidth = 580;
      var iHeight = 510;
      var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
      var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
      var sqUrl = this.props.SqCode ? this.props.SqCode : defaultUrl;
      // 去hnc 暂时拦截
      window.open(defaultUrl, "shangqiao", 'height=510, width=580, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, top=' + iTop + ',left=' + iLeft);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'rightBox' },
        _react2.default.createElement(
          'div',
          { onClick: function onClick() {
              return _this4.handleCreateShangQiao();
            }, className: 'custo' },
          _react2.default.createElement(
            'span',
            { className: 'tb' },
            _react2.default.createElement(_icon2.default, { type: 'new-service' })
          ),
          _react2.default.createElement(
            'span',
            { className: 'wenzi' },
            '\u5728\u7EBF\u5BA2\u670D'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'toTop', style: this.state.scrollTop == 0 ? { display: 'none' } : { display: '' } },
          _react2.default.createElement(
            'span',
            { className: 'top', onClick: function onClick() {
                return _this4.toTop();
              } },
            _react2.default.createElement(_icon2.default, { type: 'arrow-up' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'feedback' },
          _react2.default.createElement(
            'a',
            { href: this.state.feedbackUrl, target: '_blank' },
            _react2.default.createElement(
              'span',
              { className: 'tb' },
              _react2.default.createElement(_icon2.default, { type: 'new-feedback' })
            ),
            _react2.default.createElement(
              'span',
              { className: 'wenzi' },
              '\u53CD\u9988'
            )
          )
        )
      );
    }
  }]);
  return Customer;
}(_react.Component); /**
                      * Created by huangxiao3 on 2017/6/8.
                      */


exports.default = Customer;
module.exports = exports['default'];
//# sourceMappingURL=Customer.js.map