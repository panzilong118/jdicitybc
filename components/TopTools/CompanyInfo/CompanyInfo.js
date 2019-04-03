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

var _dec, _class; /* *************************
                   * @author: FengYan
                   * @update: 20180206
                   * @description:公司信息
                   * ************************/

/* ***********  基础组件  ************ */


/* ***********  自定义组件  ************ */


require('jdcloudui/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _companyList_redux = require('./companyList_redux');

var _companyList_redux2 = _interopRequireDefault(_companyList_redux);

var _Cookies = require('../../../common/Cookies');

var _Cookies2 = _interopRequireDefault(_Cookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookie = new _Cookies2.default();
/* ***********  redux  ************ */
var CompanyInfo = (_dec = (0, _reactRedux.connect)(function (state) {
  return _companyList_redux2.default;
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({ getCompanyListAction: _companyList_redux.getCompanyListAction }, dispatch);
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(CompanyInfo, _Component);

  function CompanyInfo(props) {
    (0, _classCallCheck3.default)(this, CompanyInfo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CompanyInfo.__proto__ || (0, _getPrototypeOf2.default)(CompanyInfo)).call(this, props));

    _this.state = {
      companyArr: [],
      companyName: '请选择'
    };
    return _this;
  }

  /*
   * 发送获取公司列表请求
   * 判断cookie中是否有companyId，如果没有则调用defaultCompanyId方法设置
   * 如果公司列表为空则跳转到注册公司引导页
   * */


  (0, _createClass3.default)(CompanyInfo, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.props.getCompanyListAction().then(function (rs) {
        if (rs.code != 0) return;
        if (rs.data.length === 0) {
          location.href = '//' + _this2.props.buyer + '/user-buyer-view/accountmanage/addcompany?type=1';
        } else if (!cookie.get('companyId')) {
          _this2.defaultCompanyId(rs.data[0]);
        } else {
          rs.data.map(function (_item) {
            if (_item.companyId == cookie.get('companyId')) {
              _this2.setState({ companyName: _item.companyName });
            }
          });
          _this2.setState({ companyArr: rs.data });
        }
      });
    }

    /*
     * 通过onclick事件添加companyId到cookie中
     * */

  }, {
    key: 'setCompanyId',
    value: function setCompanyId(_ref) {
      var companyId = _ref.companyId;

      cookie.set('companyId', companyId, '', this.props.defaultDomain);
    }

    /*
     * 设置默认cookie
     * 跳转到获取菜单中间页
     * */

  }, {
    key: 'defaultCompanyId',
    value: function defaultCompanyId(_ref2) {
      var companyId = _ref2.companyId;

      cookie.set('companyId', companyId, '', this.props.defaultDomain);
      if (this.props.disabled) {
        location.href = '//' + this.props.buyer + '/user-buyer-view/defaultbuyermenu';
      }
    }

    /*
     * 渲染公司列表
     * */

  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var _this3 = this;

      var companyArr = [];
      this.state.companyArr.map(function (_item) {
        companyArr.push(_react2.default.createElement(
          'li',
          { key: _item.companyId },
          _react2.default.createElement(
            'a',
            {
              onClick: function onClick() {
                return _this3.setCompanyId({ companyId: _item.companyId });
              },
              href: '//' + _this3.props.buyer + '/user-buyer-view/defaultbuyermenu',
              className: cookie.get('companyId') == _item.companyId ? 'active' : '',
              title: _item.companyName
            },
            _item.companyName || '未命名'
          )
        ));
      });
      return companyArr;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'down-menu f-ib deg180' },
        _react2.default.createElement(
          'a',
          null,
          this.state.companyName,
          _react2.default.createElement(_icon2.default, { type: 'down', className: 'ml5 arrows' })
        ),
        _react2.default.createElement(
          'ul',
          { className: 'down-menu-cont select width380' },
          this.renderOptions()
        )
      );
    }
  }]);
  return CompanyInfo;
}(_react.Component)) || _class);
exports.default = CompanyInfo;
module.exports = exports['default'];
//# sourceMappingURL=CompanyInfo.js.map