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
                   * @description:我的商城
                   * ************************/

/* ***********  基础组件  ************ */


/* ***********  自定义组件  ************ */

/* ***********  ajax  ************ */


require('jdcloudui/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _get_business_menu_redux = require('./get_business_menu_redux');

var _get_business_menu_redux2 = _interopRequireDefault(_get_business_menu_redux);

var _redux = require('redux');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyMall = (_dec = (0, _reactRedux.connect)(function (state) {
    return _get_business_menu_redux2.default;
}, function (dispatch) {
    return (0, _redux.bindActionCreators)({ getBusinessMenuAction: _get_business_menu_redux.getBusinessMenuAction }, dispatch);
}), _dec(_class = function (_Component) {
    (0, _inherits3.default)(MyMall, _Component);

    function MyMall(props) {
        (0, _classCallCheck3.default)(this, MyMall);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MyMall.__proto__ || (0, _getPrototypeOf2.default)(MyMall)).call(this, props));

        _this.state = {
            businessData: []
        };
        return _this;
    }

    /*
     * @获取buyer,shop头部我的商城下菜单
     * */


    (0, _createClass3.default)(MyMall, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.getBusinessMenuAction().then(function (rs) {
                if (rs && rs.length > 0) {
                    _this2.setState({ businessData: rs });
                } else {
                    var businessData = [{
                        id: 1,
                        key: 1,
                        name: '采购商',
                        businessMenuLinkVos: [{
                            id: 11,
                            key: 11,
                            menuName: '已买到的产品',
                            menuUrl: '//' + _this2.props.buyer + '/order-buyer-view/purchasedlist'
                        }, {
                            id: 12,
                            key: 12,
                            menuName: '优惠券',
                            menuUrl: '//' + _this2.props.buyer + '/promotion-buyer-view/coupon/grid'
                        }, {
                            id: 13,
                            key: 13,
                            menuName: '退款/售后',
                            menuUrl: '//' + _this2.props.buyer + '/customer-service-buyer-view/refund/grid'
                        }]
                    }, {
                        id: 2,
                        key: 2,
                        name: '商家',
                        businessMenuLinkVos: [{
                            id: 21,
                            key: 21,
                            menuName: '商家中心',
                            menuUrl: '//' + _this2.props.buyer + '/user-buyer-view/store-manage'
                        }, {
                            id: 22,
                            key: 22,
                            menuName: '商家入驻',
                            menuUrl: '//' + _this2.props.shop + '/user-shop-view/sellerinfo/defaultshophome'
                        }]
                    }, {
                        id: 3,
                        key: 3,
                        name: '自营供应商',
                        businessMenuLinkVos: [{
                            id: 31,
                            key: 31,
                            menuName: '供应商中心',
                            menuUrl: '//' + _this2.props.buyer + '/user-buyer-view/store-manage'
                        }, {
                            id: 32,
                            key: 32,
                            menuName: '供应商入驻',
                            menuUrl: '//' + _this2.props.shop + '/user-shop-view/sellerinfo/defaultsupplyhome'
                        }]
                    }];
                    _this2.setState({ businessData: businessData });
                }
            });
        }

        /*
         * @渲染业务菜单
         * */

    }, {
        key: 'renderBussinessMenu',
        value: function renderBussinessMenu(data) {
            var el = [];
            var num = 0;
            data.map(function (_item) {
                if (_item.businessMenuLinkVos.length > num) {
                    num = _item.businessMenuLinkVos.length;
                }
            });
            data.map(function (_item, _index) {
                var elList = [];
                _item.businessMenuLinkVos.map(function (_busi) {
                    elList.push(_react2.default.createElement(
                        'dd',
                        { key: _index + '-' + _busi.id },
                        _react2.default.createElement(
                            'a',
                            { href: _busi.menuUrl,
                                className: 'text-999' },
                            _busi.menuName
                        )
                    ));
                });

                var num1 = num - _item.businessMenuLinkVos.length;
                for (var i = 0; i < num1; i++) {
                    elList.push(_react2.default.createElement(
                        'dd',
                        { key: i },
                        _react2.default.createElement(
                            'a',
                            { className: 'text-999' },
                            ' '
                        )
                    ));
                }

                el.push(_react2.default.createElement(
                    'li',
                    { key: _index },
                    _react2.default.createElement(
                        'dl',
                        null,
                        _react2.default.createElement(
                            'dt',
                            null,
                            _react2.default.createElement(
                                'strong',
                                { className: 'text-333' },
                                _item.name
                            )
                        ),
                        elList
                    )
                ));
            });
            return el;
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
                    '\u6211\u7684\u5546\u57CE',
                    _react2.default.createElement(_icon2.default, { type: 'down', className: 'ml5 arrows' })
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'down-menu-cont my-mall' },
                    this.renderBussinessMenu(this.state.businessData)
                )
            );
        }
    }]);
    return MyMall;
}(_react.Component)) || _class);
exports.default = MyMall;
module.exports = exports['default'];
//# sourceMappingURL=MyMall.js.map