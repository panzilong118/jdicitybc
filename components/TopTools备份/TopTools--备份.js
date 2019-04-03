'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _row = require('jdcloudui/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('jdcloudui/lib/col');

var _col2 = _interopRequireDefault(_col);

var _icon = require('jdcloudui/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _modal = require('jdcloudui/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

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

var _dec, _class; /**************************
                   * @author: FengYan
                   * @update: 20170523
                   * @description:供应商顶部工具栏
                   *************************/
/************  基础组件  *************/


require('jdcloudui/lib/row/style');

require('jdcloudui/lib/col/style');

require('jdcloudui/lib/icon/style');

require('jdcloudui/lib/modal/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _citys_redux = require('./redux/citys_redux');

var _citys_redux2 = _interopRequireDefault(_citys_redux);

var _isLogin_redux = require('./redux/isLogin_redux');

var _isLogin_redux2 = _interopRequireDefault(_isLogin_redux);

var _getUrl_redux = require('./redux/getUrl_redux');

var _getUrl_redux2 = _interopRequireDefault(_getUrl_redux);

var _getCode_redux = require('./redux/getCode_redux');

var _getCode_redux2 = _interopRequireDefault(_getCode_redux);

var _getTel_redux = require('./redux/getTel_redux');

var _getTel_redux2 = _interopRequireDefault(_getTel_redux);

var _onLogout = require('../../sso/onLogout');

var _onLogout2 = _interopRequireDefault(_onLogout);

var _ApiClient = require('../../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _styles = require('./styles/styles.css');

var _styles2 = _interopRequireDefault(_styles);

var _CompanySelect = require('./CompanySelect/CompanySelect');

var _CompanySelect2 = _interopRequireDefault(_CompanySelect);

var _ShopSelect = require('./ShopSelect/ShopSelect');

var _ShopSelect2 = _interopRequireDefault(_ShopSelect);

var _AccountManagement = require('./AccountManagement/AccountManagement');

var _AccountManagement2 = _interopRequireDefault(_AccountManagement);

var _Cookies = require('../../common/Cookies');

var _Cookies2 = _interopRequireDefault(_Cookies);

var _CompanyLayer = require('./CompanyLayer/CompanyLayer');

var _CompanyLayer2 = _interopRequireDefault(_CompanyLayer);

var _AccountMa = require('./AccountMa/AccountMa');

var _AccountMa2 = _interopRequireDefault(_AccountMa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _ApiClient2.default();
/************  自定义组件  *************/

var company = new _CompanyLayer2.default();
var TopTools = (_dec = (0, _reactRedux.connect)(function (state) {
  return _citys_redux2.default, _isLogin_redux2.default, _getUrl_redux2.default, _getCode_redux2.default, _getTel_redux2.default;
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({ getCitysAction: _citys_redux.getCitysAction, getLoginAction: _isLogin_redux.getLoginAction, getUrlAction: _getUrl_redux.getUrlAction, getCodeAction: _getCode_redux.getCodeAction, getTelAction: _getTel_redux.getTelAction }, dispatch);
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(TopTools, _Component);

  function TopTools(props) {
    (0, _classCallCheck3.default)(this, TopTools);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TopTools.__proto__ || (0, _getPrototypeOf2.default)(TopTools)).call(this, props));

    _this.state = {
      citys: [],
      citysVisible: false,
      cityName: '未选择',
      cityId: '',
      username: '',
      shopDomain: '',
      buyerDomain: '',
      paltformDomain: '',
      domain: '',
      contactInfo: '',
      weixinCodeUrl: '',
      appDownCodeUrl: '',
      shopNum: 0
    };
    return _this;
  }

  (0, _createClass3.default)(TopTools, [{
    key: 'setCookie',
    value: function setCookie(_ref) {
      var areaId = _ref.areaId,
          areaName = _ref.areaName;

      // 存储，IE6~7 cookie 其他浏览器HTML5本地存储
      var cityName = encodeURIComponent(areaName);
      document.cookie = 'areaName=' + cityName + '; path=/; domain=' + this.state.domain;
      document.cookie = 'areaId=' + areaId + '; path=/; domain=' + this.state.domain;
      // if (localStorage) {
      //   localStorage.areaId = areaId;
      //   localStorage.areaName = areaName;
      this.defaultCookie();
      // this.setState({
      //   cityName: areaName,
      //   cityId: areaId
      // });
      // } else {
      // document.cookie = `areaId=${areaId};areaName=${areaName}`;
      // }
      if (this.state.citysVisible) {
        this.setState({
          citysVisible: false
        });
      }
      document.getElementById('citys').style.display = 'none';
    }
  }, {
    key: 'renderCity',
    value: function renderCity(citys) {
      var _this2 = this;

      // 一级地市列表渲染
      var cityArr = [];
      citys.map(function (_city) {
        cityArr.push(_react2.default.createElement(
          'li',
          { key: _city.code + Math.random() * 100000 },
          _react2.default.createElement(
            'a',
            { href: 'javascript:void(0)',
              onClick: function onClick() {
                return _this2.setCookie({ areaId: _city.code, areaName: _city.name });
              },
              className: _this2.state.cityName === _city.name ? 'active' : '',
              key: _city.code },
            _city.name
          )
        ));
      });
      return cityArr;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      // 获取一级地市数据，存入citys
      this.props.getCitysAction().then(function (rs) {
        if (rs.code != 0) return;
        var cityList = [];
        rs.data.map(function (_item) {
          cityList.push({
            name: _item.name,
            code: _item.code
          });
        });
        _this3.setState({
          citys: cityList
        });
        _this3.defaultCookie();
      });
      // 获取用户登录信息
      this.props.getLoginAction().then(function (rs) {
        if (rs.code == 0) {
          _this3.setState({
            username: rs.data.username
          });
        }
      });
      // 获取url
      this.props.getUrlAction().then(function (rs) {
        if (rs.code == 0) {
          rs.data.map(function (_item) {
            if (_item.domainType == 3) _this3.setState({ shopDomain: _item.domain });
            if (_item.domainType == 2) _this3.setState({ buyerDomain: _item.domain });
            if (_item.domainType == 5) _this3.setState({ paltformDomain: _item.domain });
            if (_item.domainType == 1) _this3.setState({ domain: _item.domain });
          });
        }
      });
      document.getElementById('chooseLocal').onmouseenter = function () {
        document.getElementById('citys').style.display = 'inline-block';
      };
      document.getElementById('chooseLocal').onmouseleave = function () {
        document.getElementById('citys').style.display = 'none';
      };
      // 获取二维码
      this.props.getCodeAction().then(function (rs) {
        if (rs.code == 0) {
          _this3.setState({
            weixinCodeUrl: rs.data.weixinCodeUrl,
            appDownCodeUrl: rs.data.appDownCodeUrl
          });
        }
      });
      // 获取 400电话
      this.props.getTelAction().then(function (rs) {
        if (rs.code == 0) {
          if (rs.data[0] && rs.data[0].contactInfo) {
            _this3.setState({
              contactInfo: rs.data[0].contactInfo
            });
          } else {
            _this3.setState({
              contactInfo: ''
            });
          }
        }
      });
      // 获取购物车数量
      client.get('cart/mall/cart/queryCartItemNum').then(function (rs) {
        if (rs.code == 0) {
          _this3.setState({
            shopNum: rs.data
          });
        }
      });

      // 获取companyId
      var ck = new _Cookies2.default();
      this.companyId = ck.get('companyId');
    }
  }, {
    key: 'defaultCookie',
    value: function defaultCookie() {
      var _this4 = this;

      var cookie = document.cookie;
      var cookieArr = cookie.split(';');
      if (cookie.indexOf('areaId') < 0) {
        this.setState({
          citysVisible: true
        });
      } else {
        cookieArr.map(function (_item) {
          if (_item.indexOf('areaName') >= 0) {
            _this4.setState({
              cityName: decodeURIComponent(_item.substr(_item.indexOf('=') + 1, _item.length))
            });
          } else {
            _this4.setState({
              cityId: _item.substr(_item.indexOf('=') + 1, _item.length)
            });
          }
        });
      }
      // }
    }
  }, {
    key: 'logout',
    value: function logout() {
      var logouts = {
        "passport": ["/service-passport-view/logout", false],
        "shop": ["/shop-view/logout", false],
        "buyer": ["/buyer-view/logout", false],
        "main": ["/website-view/logout", false]
      };
      (0, _onLogout2.default)(logouts, "login");
    }
  }, {
    key: 'isInfo',
    value: function isInfo() {
      if (window) {
        var href = window.location.href;
        if (href.indexOf('sellerinfo/') >= 0 || href.indexOf('accountmanage/') >= 0) {
          return true;
        }
        return false;
      }
    }
  }, {
    key: 'isBuyer',
    value: function isBuyer() {
      if (window) {
        var href = window.location.href;
        if (href.indexOf('buyer.') >= 0) {
          return true;
        }
        return false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      company.isCompanyId();
      return _react2.default.createElement(
        _row2.default,
        { className: 'topTools' },
        _react2.default.createElement(
          _modal2.default,
          {
            visible: this.state.citysVisible,
            title: '\u8BF7\u9009\u62E9\u4F60\u7684\u6536\u8D27\u5730\u533A',
            footer: null,
            closable: false
          },
          _react2.default.createElement(
            'div',
            { className: 'unChooseLocal' },
            _react2.default.createElement(
              'ul',
              null,
              this.renderCity(this.state.citys)
            )
          )
        ),
        _react2.default.createElement(
          _row2.default,
          { className: 'topToolsWidth' },
          _react2.default.createElement(
            _col2.default,
            { span: 2 },
            _react2.default.createElement(
              'a',
              { href: 'http://' + this.state.domain, className: 'company-a' },
              _react2.default.createElement(_icon2.default, {
                type: 'new-home',
                className: 'marginRight5 iconSize'
              }),
              '\u5546\u57CE\u9996\u9875'
            )
          ),
          _react2.default.createElement(
            _col2.default,
            { span: 22 },
            _react2.default.createElement(
              'div',
              { className: 'toolsMenu' },
              _react2.default.createElement(
                'ul',
                null,
                this.state.username ? _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'span',
                    null,
                    'HI~',
                    _react2.default.createElement(
                      'a',
                      {
                        href: 'http://' + this.state.buyerDomain + '/buyer-view/homepage',
                        className: 'company-a'
                      },
                      this.state.username
                    ),
                    _react2.default.createElement(_AccountManagement2.default, { shopDomain: this.state.shopDomain, buyerDomain: this.state.buyerDomain }),
                    !this.isInfo() && (this.isBuyer() ? _react2.default.createElement(_CompanySelect2.default, {
                      doma: this.state.domain,
                      buyerDomain: this.state.buyerDomain,
                      shopDomain: this.state.shopDomain
                    }) : _react2.default.createElement(_ShopSelect2.default, {
                      doma: this.state.domain,
                      shopDomain: this.state.shopDomain
                    })),
                    this.isInfo() && _react2.default.createElement(_AccountMa2.default, {
                      doma: this.state.domain,
                      buyerDomain: this.state.buyerDomain,
                      shopDomain: this.state.shopDomain
                    }),
                    _react2.default.createElement(
                      'a',
                      { href: 'javascript:void(0)', onClick: function onClick() {
                          return _this5.logout();
                        },
                        className: _styles2.default.textColor777 },
                      '\u3010\u9000\u51FA\u3011'
                    )
                  )
                ) : _react2.default.createElement('li', null),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'http://' + this.state.domain + '/website-view/cart', className: 'company-a' },
                    _react2.default.createElement(_icon2.default, { type: 'new-cart', className: 'iconSize' }),
                    _react2.default.createElement(
                      'span',
                      { className: this.state.shopNum < 1 ? 'f-dn' : 'icon-num' },
                      this.state.shopNum > '99' ? '99+' : this.state.shopNum
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'http://' + this.state.buyerDomain + '/order-buyer-view/purchaserback/ordermanagement',
                      className: 'company-a' },
                    '\u6211\u7684\u8BA2\u5355'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'http://' + this.state.buyerDomain + '/buyer-view/homepage', className: 'company-a' },
                    '\u91C7\u8D2D\u5546\u4E2D\u5FC3'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'downMenu shop' },
                    _react2.default.createElement(
                      'a',
                      null,
                      '\u5408\u4F5C\u62DB\u5546',
                      _react2.default.createElement(_icon2.default, { type: 'down ml5', className: 'trans180' })
                    ),
                    _react2.default.createElement(
                      'ul',
                      null,
                      _react2.default.createElement(
                        'dl',
                        null,
                        _react2.default.createElement(
                          'dt',
                          null,
                          _react2.default.createElement(
                            'strong',
                            null,
                            '\u5546\u5BB6'
                          )
                        ),
                        _react2.default.createElement(
                          'dd',
                          null,
                          _react2.default.createElement(
                            'a',
                            {
                              href: 'http://' + this.state.buyerDomain + '/user-buyer-view/store-manage',
                              target: '_blank' },
                            '\u5546\u5BB6\u4E2D\u5FC3'
                          )
                        ),
                        _react2.default.createElement(
                          'dd',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: 'http://' + this.state.shopDomain + '/user-shop-view/sellerinfo/defaultshophome',
                              target: '_blank' },
                            '\u5546\u5BB6\u5165\u9A7B'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'dl',
                        null,
                        _react2.default.createElement(
                          'dt',
                          null,
                          _react2.default.createElement(
                            'strong',
                            null,
                            '\u81EA\u8425\u4F9B\u5E94\u5546'
                          )
                        ),
                        _react2.default.createElement(
                          'dd',
                          null,
                          _react2.default.createElement(
                            'a',
                            {
                              href: 'http://' + this.state.buyerDomain + '/user-buyer-view/store-manage',
                              target: '_blank' },
                            '\u4F9B\u5E94\u5546\u4E2D\u5FC3'
                          )
                        ),
                        _react2.default.createElement(
                          'dd',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: 'http://' + this.state.shopDomain + '/user-shop-view/sellerinfo/defaultsupplyhome',
                              target: '_blank' },
                            '\u4F9B\u5E94\u5546\u5165\u9A7B'
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'downMenu app' },
                    _react2.default.createElement(
                      'a',
                      null,
                      _react2.default.createElement(_icon2.default, { type: 'new-phone iconSize' })
                    ),
                    _react2.default.createElement(
                      'ul',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('img', { src: this.state.weixinCodeUrl, alt: '\u5FAE\u4FE1\u5546\u57CE' }),
                        _react2.default.createElement(
                          'p',
                          null,
                          '\u5FAE\u4FE1\u626B\u4E00\u626B'
                        ),
                        _react2.default.createElement(
                          'p',
                          null,
                          '\u5173\u6CE8\u5546\u57CE'
                        ),
                        _react2.default.createElement(
                          'p',
                          null,
                          '\u5FAE\u4FE1\u5546\u57CE'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('img', { src: this.state.appDownCodeUrl, alt: '\u7ACB\u5373\u4E0B\u8F7DAPP' }),
                        _react2.default.createElement(
                          'p',
                          null,
                          '\u626B\u63CF\u4E8C\u7EF4\u7801'
                        ),
                        _react2.default.createElement(
                          'p',
                          null,
                          '\u7ACB\u5373\u4E0B\u8F7DAPP'
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'http://' + this.state.shopDomain + '/shop-view/message/message-center',
                      className: 'company-a' },
                    '\u6D88\u606F'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'downMenu chooseLocal', id: 'chooseLocal' },
                    _react2.default.createElement(
                      'a',
                      { href: 'javascript:void(0)' },
                      _react2.default.createElement(_icon2.default, {
                        type: 'new-gps',
                        className: 'textColorRed marginRight5 iconSize'
                      }),
                      this.state.cityName
                    ),
                    _react2.default.createElement(
                      'ul',
                      { id: 'citys' },
                      this.renderCity(this.state.citys)
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0)' },
                    _react2.default.createElement(_icon2.default, {
                      type: 'new-phone2',
                      className: 'textColorRed marginRight5 iconSize'
                    }),
                    _react2.default.createElement(
                      'strong',
                      { className: 'hotLine' },
                      this.state.contactInfo
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return TopTools;
}(_react.Component)) || _class);
exports.default = TopTools;
module.exports = exports['default'];
//# sourceMappingURL=TopTools--备份.js.map