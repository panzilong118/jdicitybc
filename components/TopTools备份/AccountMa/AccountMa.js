'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _dec, _class; /*
                   * @author:      冯炎
                   * @update:      20171201
                   * @description: 账号管理下使用，查询公司信息，但不显示。用于控制“商城首页，用户名，购物车，我的订单，采购商中心，消息，logo”等按钮点击时如果没有注册公司刚弹出提示信息
                   * */

/* ***********  基础组件  ************ */


/* ***********  自定义组件  ************ */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

require('../CompanySelect/style/style.css');

var _companyList_redux = require('../CompanySelect/redux/companyList_redux');

var _companyList_redux2 = _interopRequireDefault(_companyList_redux);

var _Cookies = require('../../../common/Cookies');

var _Cookies2 = _interopRequireDefault(_Cookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookie = new _Cookies2.default();

var AccountMa = (_dec = (0, _reactRedux.connect)(function (state) {
  return _companyList_redux2.default;
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({ getCompanyListAction: _companyList_redux.getCompanyListAction }, dispatch);
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(AccountMa, _Component);

  function AccountMa(props) {
    (0, _classCallCheck3.default)(this, AccountMa);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AccountMa.__proto__ || (0, _getPrototypeOf2.default)(AccountMa)).call(this, props));

    _this.state = {
      options: [],
      selectedTitle: '请选择您要访问的公司'
    };
    return _this;
  }

  (0, _createClass3.default)(AccountMa, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.props.getCompanyListAction().then(function (rs) {
        if (rs.code == 0) {
          if (rs.data && rs.data.length > 0) {
            // 设置cookie
            _this2.companyIdCookie = cookie.get('companyId');
            // 根据接口返回数据渲染下拉列表
            _this2.isCompanyIdInCookie(rs.data);
          }
        } else {
          _this2.setState({ selectedTitle: rs.msg });
        }
      });
    }

    /*
     * 判断cookie是否有companyId
     * */

  }, {
    key: 'isCompanyIdInCookie',
    value: function isCompanyIdInCookie(data) {
      // 如果cookie里有companyId，但当前登陆账号里没相同的companyId则将当前账号下的第1个companyId设置到cookie里
      // 刷新当前页面，重新发送带有新companyId的ajax请求
      if (this.companyIdCookie && (0, _stringify2.default)(data).indexOf(this.companyIdCookie) === -1 || !this.companyIdCookie) {
        cookie.set('companyId', data[0].companyId, '', this.props.doma);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'f-dn' });
    }
  }]);
  return AccountMa;
}(_react.Component)) || _class);
exports.default = AccountMa;
module.exports = exports['default'];
//# sourceMappingURL=AccountMa.js.map