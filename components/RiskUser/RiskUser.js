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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles/styles.css');

var _ApiClient = require('../../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RiskUser = function (_Component) {
  (0, _inherits3.default)(RiskUser, _Component);

  function RiskUser(context) {
    (0, _classCallCheck3.default)(this, RiskUser);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RiskUser.__proto__ || (0, _getPrototypeOf2.default)(RiskUser)).call(this, context));

    _this.state = {
      isRiskUser: false
    };
    return _this;
  }

  (0, _createClass3.default)(RiskUser, [{
    key: 'isRiskUser',
    value: function isRiskUser() {
      if (this.props.riskState != null && this.props.riskState != undefined && (this.props.riskState == 0 || this.props.riskState == '0')) {
        this.setState({ isRiskUser: true });
      } else if (this.props.id && this.props.companyId) {
        this.queryIsRiskUser(this.props.id, this.props.companyId);
      } else {}
    }
  }, {
    key: 'queryIsRiskUser',
    value: function queryIsRiskUser(id, companyId) {
      var _this2 = this;

      var client = new _ApiClient2.default(null, null, null, true);
      client.get('/platform-service/platform/blacklistuser/checkUser', { params: { platformId: 2, userId1: id, companyId: companyId } }).then(function (res) {
        if (res.code == 0 && res.data) {
          if (res.data.userType != null && res.data.userType != undefined && (res.data.userType == 0 || res.data.userType == '0')) _this2.setState({
            isRiskUser: true
          });
        } else {}
      }, function (err) {});
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.isRiskUser();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps && nextProps.id && nextProps.companyId) {
        this.queryIsRiskUser(nextProps.id, nextProps.companyId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        this.props.children,
        this.state.isRiskUser && _react2.default.createElement(
          'div',
          { className: 'riskname' },
          '\u98CE\u9669'
        )
      );
    }
  }]);
  return RiskUser;
}(_react.Component); /**
                      * Created by huangxiao3 on 2017/8/21.
                      */


exports.default = RiskUser;
module.exports = exports['default'];
//# sourceMappingURL=RiskUser.js.map