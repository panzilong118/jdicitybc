'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _localeProvider = require('jdcloudui/lib/locale-provider');

var _localeProvider2 = _interopRequireDefault(_localeProvider);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _class, _temp; //链接跳转，相当于a标签


// 国际化中文


require('jdcloudui/lib/locale-provider/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _Header = require('./Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Sider = require('./Sider/Sider');

var _Sider2 = _interopRequireDefault(_Sider);

require('./style/buyer.css');

var _TopTools = require('../TopTools/TopTools');

var _TopTools2 = _interopRequireDefault(_TopTools);

var _ApiClient = require('../../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _zh_CN = require('jdcloudui/lib/locale-provider/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('zh-cn');

var ms = [{
    id: 1,
    name: "首页",
    href: "http://buyer.hnc.jcloudec.com/buyer-view/homepage",
    target: "_self"
}, {
    id: 2,
    name: "账号管理",
    children: [{
        id: 21,
        name: "账号管理",
        icon: "cgs",
        children: [{
            id: 211,
            name: "账号信息",
            href: "http://buyer.hnc.jcloudec.com/user-buyer-view/accountmanage/accountInfo",
            target: "_self"
        }, {
            id: 212,
            name: "账号安全",
            href: "http://buyer.hnc.jcloudec.com/user-buyer-view/accountmanage/accountSecurity",
            target: "_self"
        }, {
            id: 213,
            name: "账号绑定",
            href: "http://buyer.hnc.jcloudec.com/user-buyer-view/accountmanage/bindingThirdPartyAccount",
            target: "_self"
        }, {
            id: 214,
            name: "收货地址",
            href: "http://buyer.hnc.jcloudec.com/user-buyer-view/buyer/address",
            target: "_self"
        }, {
            id: 215,
            name: "我的级别",
            href: "http://buyer.hnc.jcloudec.com/member-buyer-view/mylevel",
            target: "_self"
        }, {
            id: 216,
            name: "我的积分",
            href: "http://buyer.hnc.jcloudec.com/member-buyer-view/memberintegral",
            target: "_self"
        }, {
            id: 217,
            name: "子账号管理",
            href: "http://buyer.hnc.jcloudec.com/subaccount-buyer-view/subaccountmanage",
            target: "_self"
        }, {
            id: 218,
            name: "角色管理",
            href: "http://buyer.hnc.jcloudec.com/subaccount-buyer-view/rolemanage",
            target: "_self"
        }]
    }]
}, {
    id: 3,
    name: "订单管理",
    children: [{
        id: 31,
        name: "订单管理",
        icon: "xx",
        children: [{
            id: 311,
            name: "订单管理",
            href: "http://buyer.hnc.jcloudec.com/order-buyer-view/purchaserback/ordermanagement",
            target: "_self"
        }, {
            id: 315,
            name: "询价单管理",
            href: "http://buyer.hnc.jcloudec.com/order-buyer-view/inquirysheet-manage/grid",
            target: "_self"
        }, {
            id: 312,
            name: "报价单管理",
            href: "http://buyer.hnc.jcloudec.com/order-buyer-view/quotation-manage/quotation-list",
            target: "_self"
        }, {
            id: 313,
            name: "退款/售后管理",
            href: "http://buyer.hnc.jcloudec.com/customer-service-buyer-view/refund/grid",
            target: "_self"
        }, {
            id: 314,
            name: "评价管理",
            href: "http://buyer.hnc.jcloudec.com/remark-buyer-view/evaluation",
            target: "_self"
        }, {
            id: 316,
            name: "商品确认管理",
            href: "http://buyer.hnc.jcloudec.com/order-buyer-view/share-order/list",
            target: "_self"
        }, {
            id: 317,
            name: "商品确认",
            href: "http://buyer.hnc.jcloudec.com/order-buyer-view/shared-order/list",
            target: "_self"
        }, {
            id: 318,
            name: "已购商品列表",
            href: "http://buyer.hnc.jcloudec.com/order-buyer-view/purchasedlist",
            target: "_self"
        }]
    }]
}, {
    id: 4,
    name: "财务管理",
    children: [{
        id: 41,
        name: "财务管理",
        icon: "xx",
        children: [{
            id: 411,
            name: "卡券管理",
            href: "http://buyer.hnc.jcloudec.com/promotion-buyer-view/coupon/grid",
            target: "_self"
        }]
    }]
}, {
    id: 5,
    name: "采购管理",
    children: [{
        id: 51,
        name: "采购管理",
        icon: "xx",
        children: [{
            id: 511,
            name: "商品需求",
            href: "http://buyer.hnc.jcloudec.com/purchase-buyer-view/management",
            target: "_self"
        }, {
            id: 512,
            name: "解决方案征询",
            href: "http://buyer.hnc.jcloudec.com/purchase-buyer-view/solution",
            target: "_self"
        }]
    }]
}, {
    id: 6,
    name: "发票管理",
    children: [{
        id: 61,
        name: "发票管理",
        href: "http://buyer.hnc.jcloudec.com/invoice-buyer-view/invoice",
        target: "_self",
        icon: "xx"
    }, {
        id: 62,
        name: "资质管理",
        href: "http://buyer.hnc.jcloudec.com/invoice-buyer-view/qualification",
        target: "_self",
        icon: "xx"
    }]

}, {
    id: 7,
    name: "账期管理",
    children: [{
        id: 71,
        name: "账期管理",
        href: "http://buyer.hnc.jcloudec.com/bill-buyer-view/accountapplication",
        target: "_self"
    }]
}, {
    id: 8,
    name: "关注中心",
    children: [{
        id: 81,
        name: "关注中心",
        icon: "xx",
        children: [{
            id: 811,
            name: "我的收藏",
            href: "http://buyer.hnc.jcloudec.com/buyer-view/attention-center/collection",
            target: "_self"
        }, {
            id: 812,
            name: "浏览历史",
            href: "http://buyer.hnc.jcloudec.com/buyer-view/attention-center/history",
            target: "_self"
        }]
    }]
}];
var Buyer = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Buyer, _Component);

    function Buyer(props, context) {
        (0, _classCallCheck3.default)(this, Buyer);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Buyer.__proto__ || (0, _getPrototypeOf2.default)(Buyer)).call(this, props, context));

        _this.state = {
            menus: [],
            icon: "",
            logo: ''
        };
        return _this;
    }

    //------------------动态获取菜单begin-------------------------------------


    (0, _createClass3.default)(Buyer, [{
        key: 'buyerMenuSearch',
        value: function buyerMenuSearch() {
            var _this2 = this;

            var client = new _ApiClient2.default();
            var form = null;
            var url = '/authority-service/mall/resource/queryResourceMenuByBuyId';
            var menuType = this.props.menuType || this.props.children && this.props.children.props && this.props.children.props.route && this.props.children.props.route.menuType;
            if (menuType && menuType == 'companymanage') {
                url = '/authority-service/mall/resource/queryResourceMenuByCompanyId';
            }
            client.get(url, { params: form }).then(function (res) {
                if (res.code == 0 && res.data) {
                    var tmp = res.data;
                    var result = _this2.reformData(tmp);
                    _this2.setState({
                        menus: result
                    });
                }
            }, function (err) {});
        }
    }, {
        key: 'reformData',
        value: function reformData(data) {
            var result = [];
            if (data && data.length) {
                for (var ia = 0; ia < data.length; ++ia) {
                    result.push(this.reformUnit(data[ia]));
                }
            } else {}
            return result;
        }
    }, {
        key: 'reformUnit',
        value: function reformUnit(data) {
            var unit = { id: '', name: '', href: '', target: '', children: [] };
            unit.id = data.id + '';
            unit.name = data.name;
            unit.href = data.url;
            unit.target = data.target ? data.target : '_self';
            unit.icon = data.icon;
            if (data && data.url && data.url == '/subaccount-buyer-view/subaccountmanage') {
                if (data && data.children && data.children.length > 0) {
                    unit.href = data.children[0].url;
                }
                unit.target = '_blank';
                delete unit['children'];
                return unit;
            }
            if (data && data.children && data.children.length > 0) {
                for (var ib = 0; ib < data.children.length; ++ib) {
                    unit.children.push(this.reformUnit(data.children[ib]));
                }
            } else {
                delete unit['children'];
            }
            return unit;
        }
        //------------------动态获取菜单end-------------------------------------

    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.buyerMenuSearch();
            this.getWebsiteConfig();
            this.minHeight = typeof window !== 'undefined' ? document.body.clientHeight - 64 : 580;
            this.location = typeof window !== 'undefined' ? window.location.href : "";
            this.referer = typeof document !== 'undefined' ? document.referrer : "";
        }
        //------------------获取ICON--------------------------------------------

    }, {
        key: 'getWebsiteConfig',
        value: function getWebsiteConfig() {
            var _this3 = this;

            var client = new _ApiClient2.default();
            client.get('/platform-service/mallInfo/getMallInfo').then(function (res) {
                if (res.code == 0 && res.data) {
                    _this3.setState({ icon: res.data.icon, logo: res.data.userLogo });
                }
            }, function (err) {});
        }
        //----------------------------------------------------------------------

    }, {
        key: 'getHref',
        value: function getHref(o) {
            if (o && o.length) {
                for (var i = 0; i < o.length; i++) {
                    var menu = o[i];
                    if (menu.href && menu.href != "") {
                        return menu.href;
                    } else if (menu.children && menu.children.length) {
                        return this.getHref(menu.children);
                    } else {
                        return "";
                    }
                }
            } else {}
            return "";
        }
    }, {
        key: 'horizontalMenu',
        value: function horizontalMenu(o) {
            var _this4 = this;

            var horizontalMenu = [];
            if (o && o.length && o.length > 0) {
                o.map(function (menu) {
                    var children = menu.children,
                        rest = (0, _objectWithoutProperties3.default)(menu, ['children']);

                    rest.href = rest.href && rest.href != "" ? rest.href : _this4.getHref(children);
                    horizontalMenu.push(rest);
                });
            }
            return horizontalMenu;
        }
    }, {
        key: 'urlMatch',
        value: function urlMatch(location, href) {
            //href:       接口返回的全路径
            //location:   menuUrl
            //menuUrl优先匹配
            if (location != '' && href && href != '') {
                if (href.indexOf('//') > 0) {
                    if (location == href.substring(href.replace('//', '~%').indexOf('/'))) {
                        return true;
                    }
                } else {
                    if (location == href) {
                        return true;
                    }
                }
            }
            var finalLocation = '';
            if (location) {
                var result = String(location).split('.com');
                if (result && result.length && result[1]) {
                    var path = result[1];
                    var tmp = path.split('?');
                    if (tmp && tmp[0]) {
                        finalLocation = tmp[0];
                        if (finalLocation == href) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
    }, {
        key: 'verticalMenu',
        value: function verticalMenu(o, location) {
            var subMenu = [];
            var hKey = 0;
            var vKey = 0;
            var openKey = [];
            var vName = "";
            if (o && o.length && o.length > 0) {
                for (var i = 0; i < o.length; i++) {
                    var menu = o[i];
                    if (menu.href && menu.href != "" && this.urlMatch(location, menu.href)) {
                        subMenu = menu.children;
                        hKey = menu.id;
                        var tmpOpenKey = [];
                        for (var q in menu.children) {
                            tmpOpenKey.push(menu.children[q].id + '');
                        }
                        openKey = tmpOpenKey;
                    } else if (menu.children && menu.children.length) {
                        for (var j = 0; j < menu.children.length; j++) {
                            var vMenu = menu.children[j];
                            if (vMenu.href && vMenu.href != "" && this.urlMatch(location, vMenu.href)) {
                                subMenu = menu.children;
                                hKey = menu.id;
                                vKey = vMenu.id;
                                vName = vMenu.name;
                            } else if (vMenu.children && vMenu.children.length) {
                                for (var n = 0; n < vMenu.children.length; n++) {
                                    var sMenu = vMenu.children[n];
                                    if (sMenu.href && sMenu.href != "" && this.urlMatch(location, sMenu.href)) {
                                        subMenu = menu.children;
                                        hKey = menu.id;
                                        vKey = sMenu.id;
                                        vName = sMenu.name;
                                        openKey.push(vMenu.id);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return { subMenu: subMenu, hKey: hKey, openKey: openKey, vKey: vKey, vName: vName };
        }
        /*verticalMenu(o,location) {
         var subMenu = [];
         var hKey = 0;
         var vKey = 0;
         var openKey = 0;
         for(var i = 0; i < o.length; i++) {
         var menu = o[i];
         if(menu.href&&menu.href!=""&&location.indexOf(menu.href)!=-1) {
         subMenu=[];
         hKey = menu.id;
         }else if(menu.children&&menu.children.length){
         for(var j = 0; j < menu.children.length; j++) {
         var vMenu = menu.children[j];
         if(vMenu.href&&vMenu.href!=""&&location.indexOf(vMenu.href)!=-1) {
         subMenu = menu.children;
         hKey = menu.id;
         }else if(vMenu.children&&vMenu.children.length) {
         for(var n = 0; n < vMenu.children.length; n++) {
         var sMenu = vMenu.children[n];
         if(sMenu.href&&sMenu.href!=""&&location.indexOf(sMenu.href)!=-1) {
         subMenu = menu.children;
         hKey = menu.id;
         vKey = sMenu.id;
         openKey=vMenu.id;
         }
         }
         }
         }
         }
         }
           return {subMenu,hKey,openKey,vKey}
         }*/

    }, {
        key: 'render',
        value: function render() {
            var _props$menus = this.props.menus,
                menus = _props$menus === undefined ? ms : _props$menus;

            var horizontalMenu = this.horizontalMenu(this.state.menus);
            // 菜单选中
            var menuUrl = this.props.menuUrl || this.props.children && this.props.children.props && this.props.children.props.route && this.props.children.props.route.menuUrl;
            // 左侧菜单是否展示
            var siderNoRequest = this.props.siderNoRequest || this.props.children && this.props.children.props && this.props.children.props.route && this.props.children.props.route.siderNoRequest;
            // 头部名称
            var titleName = this.props.titleName || this.props.children && this.props.children.props && this.props.children.props.route && this.props.children.props.route.titleName;
            // 一级菜单是否展示
            var noFirstLevelMenu = this.props.noFirstLevelMenu || this.props.children && this.props.children.props && this.props.children.props.route && this.props.children.props.route.noFirstLevelMenu;
            var menuType = this.props.menuType || this.props.children && this.props.children.props && this.props.children.props.route && this.props.children.props.route.menuType;
            var headerClassName = siderNoRequest ? 'buyer-framework-body-container-right-nosider' : 'buyer-framework-body-container-right';
            var verticalMenu = { subMenu: [], hKey: '0', openKey: '0', vKey: [] };
            if (menuUrl) {
                verticalMenu = this.verticalMenu(this.state.menus, menuUrl);
            } else {
                verticalMenu = this.verticalMenu(this.state.menus, this.location);
            }
            if (verticalMenu.subMenu && verticalMenu.subMenu.length && verticalMenu.subMenu.length == 0) {
                verticalMenu = this.verticalMenu(this.state.menus, this.referer || "");
            }
            var _verticalMenu = verticalMenu,
                hKey = _verticalMenu.hKey,
                vName = _verticalMenu.vName,
                rest = (0, _objectWithoutProperties3.default)(_verticalMenu, ['hKey', 'vName']);

            return _react2.default.createElement(
                _localeProvider2.default,
                { locale: _zh_CN2.default },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactHelmet2.default,
                        null,
                        _react2.default.createElement(
                            'title',
                            null,
                            vName
                        ),
                        _react2.default.createElement('link', { rel: 'icon', href: this.state.icon, mce_href: this.state.icon, type: 'image/x-icon' })
                    ),
                    _react2.default.createElement(_TopTools2.default, null),
                    _react2.default.createElement(_Header2.default, { menus: horizontalMenu, selectKey: hKey, logo: this.state.logo, typeKey: this.props.typeKey, titleName: titleName, noFirstLevelMenu: noFirstLevelMenu, menuType: menuType }),
                    _react2.default.createElement(
                        'div',
                        { className: 'buyer-framework-body-container' },
                        !siderNoRequest && _react2.default.createElement(
                            'div',
                            { className: 'buyer-framework-body-container-left' },
                            _react2.default.createElement(_Sider2.default, rest)
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: headerClassName, style: { minHeight: this.minHeight + "px" } },
                            this.props.children
                        )
                    )
                )
            );
        }
    }]);
    return Buyer;
}(_react.Component), _class.propTypes = {
    children: _propTypes2.default.object.isRequired
}, _temp);
exports.default = Buyer;
module.exports = exports['default'];
//# sourceMappingURL=Buyer.js.map