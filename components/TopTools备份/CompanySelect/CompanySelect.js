'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _icon = require('jdcloudui/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

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
                   * @description: 采购商中心页面
                   * */

/* ***********  基础组件  ************ */


/* ***********  自定义组件  ************ */


require('jdcloudui/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

require('./style/style.css');

var _companyList_redux = require('./redux/companyList_redux');

var _companyList_redux2 = _interopRequireDefault(_companyList_redux);

var _Cookies = require('../../../common/Cookies');

var _Cookies2 = _interopRequireDefault(_Cookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookie = new _Cookies2.default();

var CompanySelect = (_dec = (0, _reactRedux.connect)(function (state) {
  return _companyList_redux2.default;
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({ getCompanyListAction: _companyList_redux.getCompanyListAction }, dispatch);
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(CompanySelect, _Component);

  function CompanySelect(props) {
    (0, _classCallCheck3.default)(this, CompanySelect);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CompanySelect.__proto__ || (0, _getPrototypeOf2.default)(CompanySelect)).call(this, props));

    _this.state = {
      options: [],
      selectedTitle: '请选择您要访问的公司'
    };
    return _this;
  }

  (0, _createClass3.default)(CompanySelect, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.props.getCompanyListAction().then(function (rs) {
        if (rs.code == 0) {
          if (rs.data && rs.data.length > 0) {
            // 设置cookie
            _this2.companyIdCookie = cookie.get('companyId');
            // 根据接口返回数据渲染下拉列表
            _this2.renderOptions(rs.data);
          } else {
            // 如果访问接口没有数据则跳转到添加公司引导页
            location.href = '//' + _this2.props.buyerDomain + '/user-buyer-view/accountmanage/addcompany?type=1';
          }
        } else {
          _this2.setState({ selectedTitle: rs.msg });
        }
      });
    }

    /*
     * 下拉列表触发事件
     * */

  }, {
    key: 'onSelectChange',
    value: function onSelectChange(_ref) {
      var companyId = _ref.companyId;

      // 设置cookie
      cookie.set('companyId', companyId, '', this.props.doma);
      location.reload(); // 刷新当前页面
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
        window.location.reload(); // 刷新当前页面
      }
    }

    /*
     * 渲染公司下拉列表
     * */

  }, {
    key: 'renderOptions',
    value: function renderOptions(data) {
      var _this3 = this;

      var options = [];
      // 判断cookie中是否存在companyId
      this.isCompanyIdInCookie(data);
      data.map(function (_item) {
        // 如果有cookie里有companyId则将店铺列表里与companyId相同的数据设置为默认
        if (_this3.companyIdCookie && _item.companyId == _this3.companyIdCookie) {
          _this3.setState({ selectedTitle: _item.companyName });
        }
        // 生成店铺下拉列表
        options.push(_react2.default.createElement(
          'li',
          { title: _item.companyName, className: _this3.companyIdCookie == _item.companyId && 'active',
            key: _item.companyId },
          _react2.default.createElement(
            'a',
            {
              href: 'javascript:void(0)',
              onClick: function onClick() {
                return _this3.onSelectChange({ companyId: _item.companyId });
              }
            },
            _item.companyName
          )
        ));
      });
      this.setState({ options: options });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'downMenu company' },
        _react2.default.createElement(
          'a',
          null,
          _react2.default.createElement(
            'p',
            { className: 'f-pre', title: this.state.selectedTitle },
            this.state.selectedTitle
          ),
          _react2.default.createElement(_icon2.default, { type: 'down ml5', className: 'trans180' })
        ),
        this.state.options.length > 0 && _react2.default.createElement(
          'ul',
          null,
          this.state.options
        )
      );
    }
  }]);
  return CompanySelect;
}(_react.Component)) || _class);
exports.default = CompanySelect;
module.exports = exports['default'];
//# sourceMappingURL=CompanySelect.js.map