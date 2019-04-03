/* *************************
 * @author: FengYan
 * @update: 20180206
 * @description:我的商城
 * ************************/

/* ***********  基础组件  ************ */
import React, {Component} from 'react';
import {Icon} from 'jdcloudui';

/* ***********  自定义组件  ************ */
import getBusinessMenu, {getBusinessMenuAction} from './get_business_menu_redux';
/* ***********  ajax  ************ */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
@connect(
    state => (getBusinessMenu),
    dispatch => bindActionCreators({getBusinessMenuAction}, dispatch)
)
export default class MyMall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            businessData: []
        }
    }

    /*
     * @获取buyer,shop头部我的商城下菜单
     * */
    componentDidMount() {
        this.props.getBusinessMenuAction().then(rs => {
            if (rs && rs.length > 0) {
                this.setState({businessData: rs});
            }else{
                const businessData = [
                    {
                        id: 1,
                        key: 1,
                        name: '采购商',
                        businessMenuLinkVos: [
                            {
                                id: 11,
                                key: 11,
                                menuName: '已买到的产品',
                                menuUrl: `//${this.props.buyer}/order-buyer-view/purchasedlist`
                            }, {
                                id: 12,
                                key: 12,
                                menuName: '优惠券',
                                menuUrl: `//${this.props.buyer}/promotion-buyer-view/coupon/grid`
                            }, {
                                id: 13,
                                key: 13,
                                menuName: '退款/售后',
                                menuUrl: `//${this.props.buyer}/customer-service-buyer-view/refund/grid`
                            }
                        ]
                    },
                    {
                        id: 2,
                        key: 2,
                        name: '商家',
                        businessMenuLinkVos: [
                            {
                                id: 21,
                                key: 21,
                                menuName: '商家中心',
                                menuUrl: `//${this.props.buyer}/user-buyer-view/store-manage`
                            }, {
                                id: 22,
                                key: 22,
                                menuName: '商家入驻',
                                menuUrl: `//${this.props.shop}/user-shop-view/sellerinfo/defaultshophome`
                            }
                        ]
                    },
                    {
                        id: 3,
                        key: 3,
                        name: '自营供应商',
                        businessMenuLinkVos: [
                            {
                                id: 31,
                                key: 31,
                                menuName: '供应商中心',
                                menuUrl: `//${this.props.buyer}/user-buyer-view/store-manage`
                            }, {
                                id: 32,
                                key: 32,
                                menuName: '供应商入驻',
                                menuUrl: `//${this.props.shop}/user-shop-view/sellerinfo/defaultsupplyhome`
                            }
                        ]
                    }
                ]
                this.setState({businessData})
            }
        });
    }

    /*
     * @渲染业务菜单
     * */
    renderBussinessMenu(data) {
        const el = [];
        let num = 0;
        data.map(_item => {
            if (_item.businessMenuLinkVos.length > num) {
                num = _item.businessMenuLinkVos.length
            }
        });
        data.map((_item, _index) => {
            const elList = [];
            _item.businessMenuLinkVos.map(_busi => {
                elList.push(
                    <dd key={`${_index}-${_busi.id}`}>
                        <a href={_busi.menuUrl}
                           className="text-999">{_busi.menuName}</a>
                    </dd>
                )
            });

            const num1 = num - _item.businessMenuLinkVos.length;
            for (let i = 0; i < num1; i++) {
                elList.push(
                    <dd key={i}>
                        <a className="text-999"> </a>
                    </dd>
                )
            }

            el.push(
                <li key={_index}>
                    <dl>
                        <dt><strong className="text-333">{_item.name}</strong></dt>
                        {elList}
                    </dl>
                </li>
            )
        });
        return el;
    }

    render() {
        return (
            <div className="down-menu f-ib deg180">
                <a>我的商城<Icon type="down" className="ml5 arrows"/></a>
                <ul className="down-menu-cont my-mall">
                    {this.renderBussinessMenu(this.state.businessData)}
                </ul>
            </div>
        );
    }
}