'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _menu = require('jdcloudui/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

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

var _dec, _class;

require('jdcloudui/lib/menu/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _logo = require('./style/logo.png');

var _logo2 = _interopRequireDefault(_logo);

require('./style/templateHader.css');

var _ApiClient = require('../../../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _CompanyLayer = require('../../TopTools/CompanyLayer/CompanyLayer');

var _CompanyLayer2 = _interopRequireDefault(_CompanyLayer);

var _reactRedux = require('react-redux');

var _get_components_redux = require('../get_components_redux');

var _get_components_redux2 = _interopRequireDefault(_get_components_redux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var company = new _CompanyLayer2.default();

/* ****  ajax  **** */
var Header = (_dec = (0, _reactRedux.connect)(function (state) {
    return {};
}, { getTitleForHookAction: _get_components_redux.getTitleForHookAction }), _dec(_class = function (_Component) {
    (0, _inherits3.default)(Header, _Component);

    function Header(props, context) {
        (0, _classCallCheck3.default)(this, Header);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props, context));

        _this.state = {
            mainDomain: '/',
            title: ''
        };
        return _this;
    }

    (0, _createClass3.default)(Header, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.getMainDomainForLogo();
            this.props.getTitleForHookAction().then(function (rs) {
                if (JSON.parse(rs[0].config).buyer) {
                    _this2.setState({ title: JSON.parse(rs[0].config).buyer });
                }
            });
        }

        // 获取域名

    }, {
        key: 'getMainDomainForLogo',
        value: function getMainDomainForLogo() {
            var _this3 = this;

            var client = new _ApiClient2.default();
            client.get('/passport/logout').then(function (res) {
                if (res.code == 0 && res.data) {
                    res.data.map(function (_item) {
                        if (_item.domainType == 1) {
                            var mainDomain = '//' + _item.domain;
                            _this3.setState({ mainDomain: mainDomain });
                        }
                    });
                }
            }, function (err) {});
            // client.get('/platform-service/mallInfo/getMallInfo')
            //   .then(
            //     (res) => {
            //       if(res.code == 0 && res.data) {
            //         this.priceUrl = res.data.userLogo;
            //       }
            //     },
            //     (err) => {
            //     }
            //   );
        }

        //

    }, {
        key: 'render',
        value: function render() {
            company.isCompanyId();
            // 优先级3
            var titleNName = this.props.type && this.props.type == 'subaccount' ? '组织架构' : this.state.title;
            // 优先级2
            if (this.props.typeKey && this.props.typeKey == 'companymanage') {
                titleNName = '账号管理';
            }
            // 优先级1
            if (this.props.menuType && this.props.menuType == 'companymanage') {
                titleNName = '公司店铺/财务管理';
            }
            // 优先级0
            if (this.props.titleName) {
                titleNName = this.props.titleName;
            }
            var _props = this.props,
                menus = _props.menus,
                selectKey = _props.selectKey;

            var horizontal = menus.map(function (menu) {
                return _react2.default.createElement(
                    _menu2.default.Item,
                    { key: menu.id },
                    _react2.default.createElement(
                        'a',
                        { href: menu.href, target: menu.target },
                        menu.name
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                { className: 'buyer-framework-header' },
                _react2.default.createElement(
                    'div',
                    { className: 'buyer-framework-container' },
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { className: 'buyer-framework-logo company-a', href: this.state.mainDomain,
                                    target: '_blank' },
                                this.props.logo ? _react2.default.createElement('img', { src: this.props.logo }) : ''
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'span',
                                { className: 'buyer-framework-title' },
                                titleNName
                            )
                        )
                    ),
                    this.props.type && this.props.type == 'subaccount' || this.props.typeKey && this.props.typeKey == 'companymanage' || this.props.noFirstLevelMenu ? '' : _react2.default.createElement(
                        _menu2.default,
                        {
                            theme: 'light',
                            mode: 'horizontal',
                            selectedKeys: [String(selectKey)],
                            style: { lineHeight: '62px', float: 'right' }
                        },
                        horizontal
                    )
                )
            );
        }
    }]);
    return Header;
}(_react.Component)) || _class);
exports.default = Header;
module.exports = exports['default'];
//# sourceMappingURL=Header.js.map