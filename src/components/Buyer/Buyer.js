import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';	//链接跳转，相当于a标签
import BuyerHeader from './Header/Header';
import BuyerSider from './Sider/Sider';
import './style/buyer.css';
import TopTools from '../TopTools/TopTools';
import ApiClient from '../../apiClient/ApiClient';
import Helmet from 'react-helmet';

// 国际化中文
import { LocaleProvider } from 'jdcloudui';
import zh_CN from 'jdcloudui/lib/locale-provider/zh_CN';
import moment from 'moment';
moment.locale('zh-cn');

const ms = [
    {
        id: 1,
        name: "首页",
        href: "http://buyer.hnc.jcloudec.com/buyer-view/homepage",
        target: "_self"
    },
    {
        id: 2,
        name: "账号管理",
        children: [
            {
                id: 21,
                name: "账号管理",
                icon: "cgs",
                children: [
                    {
                        id: 211,
                        name: "账号信息",
                        href: "http://buyer.hnc.jcloudec.com/user-buyer-view/accountmanage/accountInfo",
                        target: "_self"
                    },
                    {
                        id: 212,
                        name: "账号安全",
                        href: "http://buyer.hnc.jcloudec.com/user-buyer-view/accountmanage/accountSecurity",
                        target: "_self"
                    },
                    {
                        id: 213,
                        name: "账号绑定",
                        href: "http://buyer.hnc.jcloudec.com/user-buyer-view/accountmanage/bindingThirdPartyAccount",
                        target: "_self"
                    },
                    {
                        id: 214,
                        name: "收货地址",
                        href: "http://buyer.hnc.jcloudec.com/user-buyer-view/buyer/address",
                        target: "_self"
                    },
                    {
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
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "订单管理",
        children: [
            {
                id: 31,
                name: "订单管理",
                icon: "xx",
                children: [
                    {
                        id: 311,
                        name: "订单管理",
                        href: "http://buyer.hnc.jcloudec.com/order-buyer-view/purchaserback/ordermanagement",
                        target: "_self"
                    },
                    {
                        id: 315,
                        name: "询价单管理",
                        href: "http://buyer.hnc.jcloudec.com/order-buyer-view/inquirysheet-manage/grid",
                        target: "_self"
                    },
                    {
                        id: 312,
                        name: "报价单管理",
                        href: "http://buyer.hnc.jcloudec.com/order-buyer-view/quotation-manage/quotation-list",
                        target: "_self"
                    },
                    {
                        id: 313,
                        name: "退款/售后管理",
                        href: "http://buyer.hnc.jcloudec.com/customer-service-buyer-view/refund/grid",
                        target: "_self"
                    },
                    {
                        id: 314,
                        name: "评价管理",
                        href: "http://buyer.hnc.jcloudec.com/remark-buyer-view/evaluation",
                        target: "_self"
                    },
                    {
                        id: 316,
                        name: "商品确认管理",
                        href: "http://buyer.hnc.jcloudec.com/order-buyer-view/share-order/list",
                        target: "_self"
                    },
                    {
                        id: 317,
                        name: "商品确认",
                        href: "http://buyer.hnc.jcloudec.com/order-buyer-view/shared-order/list",
                        target: "_self"
                    },{
                        id:318,
                        name:"已购商品列表",
                        href:"http://buyer.hnc.jcloudec.com/order-buyer-view/purchasedlist",
                        target:"_self"
                    }
                ]
            }
        ]
    },
    {
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
    },
    {
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
            },
                {
                    id: 512,
                    name: "解决方案征询",
                    href: "http://buyer.hnc.jcloudec.com/purchase-buyer-view/solution",
                    target: "_self"
                },
            ]
        }]
    },
    {
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

    },
    {
        id: 7,
        name: "账期管理",
        children: [
            {
                id: 71,
                name: "账期管理",
                href: "http://buyer.hnc.jcloudec.com/bill-buyer-view/accountapplication",
                target: "_self"
            }
        ]
    },
    {
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
    }
]
export default class Buyer extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            menus: [],
            icon:"",
            logo:''
        }
    }

    //------------------动态获取菜单begin-------------------------------------
    buyerMenuSearch(){
        var client = new ApiClient();
        let form = null;
        let url = '/authority-service/mall/resource/queryResourceMenuByBuyId';
        let menuType =
            this.props.menuType || (
            this.props.children &&
            this.props.children.props &&
            this.props.children.props.route &&
            this.props.children.props.route.menuType);
        if(menuType && menuType=='companymanage'){
            url = '/authority-service/mall/resource/queryResourceMenuByCompanyId';
        }
        client.get(url,{params:form})
            .then(
                (res) => {
                    if(res.code==0 && res.data){
                        let tmp = res.data;
                        let result = this.reformData(tmp);
                        this.setState({
                            menus: result,
                        })
                    }
                },
                (err) => {
                }
            )
    }

    reformData(data) {
        let result = [];
        if(data && data.length){
            for(let ia=0;ia<data.length;++ia){
                result.push(this.reformUnit(data[ia]));
            }
        }else{}
        return result;
    }

    reformUnit(data){
        let unit = {id:'',name:'',href:'',target:'',children:[]};
        unit.id = data.id+'';
        unit.name = data.name;
        unit.href = data.url;
        unit.target = data.target?data.target:'_self';
        unit.icon = data.icon;
        if(data && data.url && data.url=='/subaccount-buyer-view/subaccountmanage'){
            if(data && data.children && data.children.length>0) {
                unit.href = data.children[0].url
            }
            unit.target = '_blank'
            delete unit['children'];
            return unit;
        }
        if(data && data.children && data.children.length>0){
            for(let ib=0;ib<data.children.length;++ib){
                unit.children.push(this.reformUnit(data.children[ib]))
            }
        }else{
            delete unit['children'];
        }
        return unit;
    }
    //------------------动态获取菜单end-------------------------------------

    componentWillMount() {
        this.buyerMenuSearch();
        this.getWebsiteConfig();
        this.minHeight = typeof window !== 'undefined' ? document.body.clientHeight - 64 : 580;
        this.location = typeof window !== 'undefined' ? window.location.href : "";
        this.referer = typeof document !== 'undefined' ? document.referrer : "";
    }
    //------------------获取ICON--------------------------------------------
    getWebsiteConfig() {
        var client = new ApiClient();
        client.get('/platform-service/mallInfo/getMallInfo')
            .then(
                (res) => {
                    if(res.code==0 && res.data){
                        this.setState({icon:res.data.icon,logo:res.data.userLogo})
                    }
                },
                (err) => {

                }
            )
    }
    //----------------------------------------------------------------------
    getHref(o) {
        if(o && o.length){
            for (var i = 0; i < o.length; i++) {
                var menu = o[i];
                if (menu.href && menu.href != "") {
                    return menu.href;
                } else if (menu.children && menu.children.length) {
                    return this.getHref(menu.children)
                } else {
                    return "";
                }
            }
        }else{}
        return "";
    }

    horizontalMenu(o) {
        const horizontalMenu = [];
        if(o && o.length && o.length > 0){
            o.map((menu) => {
                const {children, ...rest} = menu;
                rest.href = rest.href && rest.href != "" ? rest.href : this.getHref(children);
                horizontalMenu.push(rest);
            });
        }
        return horizontalMenu;
    }

    urlMatch(location,href){
        //href:       接口返回的全路径
        //location:   menuUrl
        //menuUrl优先匹配
        if(location!='' && href && href!=''){
            if(href.indexOf('//')>0){
                if(location == href.substring(href.replace('//','~%').indexOf('/'))){
                    return true;
                }
            }else{
                if(location == href){
                    return true;
                }
            }
        }
        let finalLocation= '';
        if(location){
            let result = String(location).split('.com');
            if(result && result.length && result[1]){
                let path = result[1];
                let tmp = path.split('?');
                if(tmp && tmp[0]){
                    finalLocation = tmp[0];
                    if(finalLocation==href){
                        return true;
                    }
                }
            }
        }
        return false;
    }

    verticalMenu(o, location) {
        var subMenu = [];
        var hKey = 0;
        var vKey = 0;
        var openKey = [];
        var vName = "";
        if(o && o.length && o.length > 0){
            for (var i = 0; i < o.length; i++) {
                var menu = o[i];
                if (menu.href && menu.href != "" && this.urlMatch(location,menu.href)) {
                    subMenu = menu.children;
                    hKey = menu.id;
                    let tmpOpenKey=[];
                    for(let q in menu.children){
                        tmpOpenKey.push(menu.children[q].id+'');
                    }
                    openKey=tmpOpenKey;
                } else if (menu.children && menu.children.length) {
                    for (var j = 0; j < menu.children.length; j++) {
                        var vMenu = menu.children[j];
                        if (vMenu.href && vMenu.href != "" && this.urlMatch(location,vMenu.href)) {
                            subMenu = menu.children;
                            hKey = menu.id;
                            vKey = vMenu.id;
                            vName = vMenu.name;
                        } else if (vMenu.children && vMenu.children.length) {
                            for (var n = 0; n < vMenu.children.length; n++) {
                                var sMenu = vMenu.children[n];
                                if (sMenu.href && sMenu.href != "" && this.urlMatch(location,sMenu.href)) {
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
        return {subMenu, hKey, openKey, vKey,vName}
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


    render() {
        const {menus = ms} = this.props;
        const horizontalMenu = this.horizontalMenu(this.state.menus);
        // 菜单选中
        let menuUrl =
            this.props.menuUrl || (
                this.props.children &&
                this.props.children.props &&
                this.props.children.props.route &&
                this.props.children.props.route.menuUrl
            );
        // 左侧菜单是否展示
        let siderNoRequest =
            this.props.siderNoRequest || (
                this.props.children &&
                this.props.children.props &&
                this.props.children.props.route &&
                this.props.children.props.route.siderNoRequest
            );
        // 头部名称
        let titleName =
            this.props.titleName||(
                this.props.children &&
                this.props.children.props &&
                this.props.children.props.route &&
                this.props.children.props.route.titleName
            );
        // 一级菜单是否展示
        let noFirstLevelMenu =
            this.props.noFirstLevelMenu || (
                this.props.children &&
                this.props.children.props &&
                this.props.children.props.route &&
                this.props.children.props.route.noFirstLevelMenu
            );
        let menuType =
            this.props.menuType || (
            this.props.children &&
            this.props.children.props &&
            this.props.children.props.route &&
            this.props.children.props.route.menuType);
        let headerClassName = siderNoRequest?'buyer-framework-body-container-right-nosider':'buyer-framework-body-container-right';
        let verticalMenu = { subMenu:[], hKey:'0', openKey:'0', vKey:[],} ;
        if(menuUrl){
            verticalMenu = this.verticalMenu(this.state.menus, menuUrl);
        }else{
            verticalMenu = this.verticalMenu(this.state.menus, this.location);
        }
        if (verticalMenu.subMenu && verticalMenu.subMenu.length && verticalMenu.subMenu.length == 0) {
            verticalMenu = this.verticalMenu(this.state.menus, this.referer || "");
        }
        const {hKey,vName, ...rest} = verticalMenu;
        return (
            <LocaleProvider locale={zh_CN}>
                <div>
                    <Helmet>
                        <title>{vName}</title>
                        <link rel="icon" href={this.state.icon} mce_href={this.state.icon} type="image/x-icon" />
                    </Helmet>
                    <TopTools />
                    <BuyerHeader menus={horizontalMenu} selectKey={hKey} logo = {this.state.logo} typeKey={this.props.typeKey} titleName = {titleName} noFirstLevelMenu = { noFirstLevelMenu } menuType = {menuType}/>
                    <div className="buyer-framework-body-container">
                        {
                            !siderNoRequest &&
                            <div className='buyer-framework-body-container-left'>
                                <BuyerSider {...rest} />
                            </div>
                        }
                        <div className={headerClassName} style={{minHeight: this.minHeight + "px", }}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </LocaleProvider>
        )
    }
}