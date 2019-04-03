import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Layout} from 'jdcloudui';
const {Header, Content, Footer, Sider} = Layout;
import OperatingHeader from './Header/Header';
import OperatingSider from './Sider/Sider';
import ApiClient from '../../apiClient/ApiClient';
import Helmet from 'react-helmet';
import "./style/operating.css";

// 国际化中文
import { LocaleProvider } from 'jdcloudui';
import zh_CN from 'jdcloudui/lib/locale-provider/zh_CN';
import moment from 'moment';
moment.locale('zh-cn');

let name = "";
const ms = [
  {
    id: 1,
    name: "首页",
    href: "http://platform.hnc.jcloudec.com/operating-view/home",
    target: "_self"
  },
  {
    id: 2,
    name: "用户管理",
    children: [
      {
        id: 21,
        name: "供应商管理",
        icon: "gys",
        children: [
          {
            id: 211,
            name: "入驻资料审核",
            href: "http://platform.hnc.jcloudec.com/user-operating-view/information/informationreview",
            target: "_self"
          },
          {
            id: 212,
            name: "合同管理",
            href: "http://platform.hnc.jcloudec.com/user-operating-view/contract/contract",
            target: "_self"
          },
          {
            id: 213,
            name: "返点管理",
            href: "http://platform.hnc.jcloudec.com/user-operating-view/rebate/rebate",
            target: "_self"
          },
          {
            id: 214,
            name: "供应商管理",
            href: "http://platform.hnc.jcloudec.com/user-operating-view/provider/list",
            target: "_self"
          },
          {
            id: 215,
            name: "信息变更审核",
            href: "http://platform.hnc.jcloudec.com/user-operating-view/informationcheck/informationcheck",
            target: "_self"
          },
          {
            id: 216,
            name: "供应商交易合同管理",
            href: "http://platform.hnc.jcloudec.com/user-operating-view/shopcontract",
            target: "_self"
          }
        ]
      },
      {
        id: 22,
        name: "采购商管理",
        icon: "cgs",
        children: [
          {
            id: 221,
            name: "采购商管理",
            href: "http://platform.hnc.jcloudec.com/user-operating-view/buyermanagement/buyermanagement",
            target: "_self"
          },
          {
            id: 222,
            name: "采购商信息变更审核",
            href: "http://platform.hnc.jcloudec.com/user-operating-view/buyermanagement/buyermanagementchange",
            target: "_self"
          },
          {
            id: 223,
            name: "采购商交易合同管理",
            href: "http://platform.hnc.jcloudec.com/user-operating-view/buyercontract",
            target: "_self"
          }
        ]
      },
      {
        id: 23,
        name: "采购管理",
        icon: "cgs",
        children: [
          {
            id: 231,
            name: "商品需求",
            href: "http://platform.hnc.jcloudec.com/purchase-operating-view/purchase-manage-shops/shops",
            target: "_self"
          },
          {
            id: 232,
            name: "解决方案征询",
            href: "http://platform.hnc.jcloudec.com/purchase-operating-view/purchase-manage",
            target: "_self"
          },
          {
            id: 234,
            name: "缺货登记",
            href: "http://platform.hnc.jcloudec.com/purchase-operating-view/stockout",
            target: "_self"
          },
        ]
      },
      {
        id: 24,
        name: "会员/积分",
        icon: "cgs",
        children: [{
          id: 241,
          name: "会员管理",
          href: "http://platform.hnc.jcloudec.com/member-operating-view/membermanagement/membermanagement",
          target: "_self"
        }, {
          id: 242,
          name: "平台会员等级管理",
          href: "http://platform.hnc.jcloudec.com/member-operating-view/membergrade",
          target: "_self"
        }, {
          id: 243,
          name: "积分设置",
          href: "http://platform.hnc.jcloudec.com/member-operating-view/set-score/set-score",
          target: "_self"
        }, {
          id: 244,
          name: "会员积分查询",
          href: "http://platform.hnc.jcloudec.com/member-operating-view/pointsquery/pointsquery",
          target: "_self"
        }]
      },
      {
        id: 25,
        name: "采购商账期管理",
        icon: "cgs",
        children: [
          {
            id: 251,
            name: "账期申请",
            href: "http://platform.hnc.jcloudec.com/bill-operating-view/operate-backstage/payment-apply",
            target: "_self"
          },
          {
            id: 252,
            name: "账期管理",
            href: "http://platform.hnc.jcloudec.com/bill-operating-view/operate-backstage/account-period-manage",
            target: "_self"
          },
          {
            id: 253,
            name: "付款管理",
            href: "http://platform.hnc.jcloudec.com/bill-operating-view/operate-backstage/payment-manager",
            target: "_self"
          }
        ]
      },
      {
        id: 40,
        name: "运营子账号管理",
        icon: "cgs",
        children: [
          {
            id: 241,
            name: "部门管理",
            href: "http://platform.hnc.jcloudec.com/subaccount-operating-view/departmentmanage/departmentmanagepage",
            target: "_self"
          },
          {
            id: 242,
            name: "采购商认领",
            href: "http://platform.hnc.jcloudec.com/subaccount-operating-view/buyerclaim/buyerclaimpage",
            target: "_self"
          },
        ]
      },
      {
        id: 30,
        name: "风险名单",
        href: "http://platform.hnc.jcloudec.com/operating-view/risklist",
        target: "_self"
      },
      {
        id: 26,
        name: "用户反馈",
        href: "http://platform.hnc.jcloudec.com/operating-view/feedbackcollection/list",
        target: "_self"
      },
      {
        id: 29,
        name: "修改密码",
        href: "yyyyy",
        target: "_self"
      }
    ]
  },
  {
    id: 3,
    name: "商品管理",
    children: [
      {
        id: 31,
        name: "商品管理",
        icon: "xx",
        children: [
          {
            id: 311,
            name: "商品发布",
            href: "http://platform.hnc.jcloudec.com/operating-item-view/goods-release",
            target: "_self"
          },
          {
            id: 312,
            name: "商品库管理",
            href: "http://platform.hnc.jcloudec.com/operating-item-view/item-base",
            target: "_self"
          },
          {
            id: 313,
            name: "销售商品管理",
            href: "http://platform.hnc.jcloudec.com/operating-item-view/sale-item",
            target: "_self"
          },
          {
            id: 314,
            name: "供货申请审核",
            href: "http://platform.hnc.jcloudec.com/operating-item-view/supply-audit",
            target: "_self"
          },
          {
            id: 315,
            name: "品牌管理",
            href: "http://platform.hnc.jcloudec.com/operating-item-view/brand",
            target: "_self"
          },
          {
            id: 316,
            name: "规格参数管理",
            href: "http://platform.hnc.jcloudec.com/operating-item-view/specifications",
            target: "_self"
          },
          {
            id: 317,
            name: "类目管理",
            href: "http://platform.hnc.jcloudec.com/operating-item-view/category",
            target: "_self"
          },
          {
            id: 318,
            name: "批量上传",
            href: "http://platform.hnc.jcloudec.com/operating-item-view/batch-upload/upload",
            target: "_self"
          },
          {
            id: 319,
            name: "商品评价",
            href: "http://platform.hnc.jcloudec.com/operating-item-view/evaluation-manage",
            target: "_self"
          }, {
            id: 320,
            name: "行业标签",
            href: "http://platform.hnc.jcloudec.com/operating-item-view/industry-label",
            target: "_self"
          }]
        },
        {
          id: 25,
          name: "采购商账期管理",
          icon: "cgs",
          children:[
            {
              id: 251,
              name: "账期申请",
              href: "http://platform.hnc.jcloudec.com/bill-operating-view/operate-backstage/payment-apply",
              target: "_self"
            },
            {
              id: 252,
              name: "账期管理",
              href: "http://platform.hnc.jcloudec.com/bill-operating-view/operate-backstage/account-period-manage",
              target: "_self"
            },
            {
              id: 253,
              name: "付款管理",
              href: "http://platform.hnc.jcloudec.com/bill-operating-view/operate-backstage/payment-manager",
              target: "_self"
            }
          ]
        },
        {
          id:30,
          name:"风险名单",
          href:"http://platform.hnc.jcloudec.com/operating-view/risklist",
          target:"_self"
        },
        {
          id:26,
          name:"用户反馈",
          href:"http://platform.hnc.jcloudec.com/operating-view/feedbackcollection/list",
          target:"_self"
        },
        {
          id:29,
          name:"修改密码",
          href:"http://platform.hnc.jcloudec.com/user-operating-view/changepwd",
          target:"_self"
        }
      ]
    },
    {
      id:3,
      name:"商品管理",
      children:[
        {
          id:31,
          name:"商品管理",
          icon:"xx",
          children:[
            {
              id:311,
              name:"商品发布",
              href:"http://platform.hnc.jcloudec.com/operating-item-view/goods-release",
              target:"_self"
            },
            {
              id:312,
              name:"商品库管理",
              href:"http://platform.hnc.jcloudec.com/operating-item-view/item-base",
              target:"_self"
            },
            {
              id:313,
              name:"销售商品管理",
              href:"http://platform.hnc.jcloudec.com/operating-item-view/sale-item",
              target:"_self"
            },
            {
              id:314,
              name:"供货申请审核",
              href:"http://platform.hnc.jcloudec.com/operating-item-view/supply-audit",
              target:"_self"
            },
            {
              id:315,
              name:"品牌管理",
              href:"http://platform.hnc.jcloudec.com/operating-item-view/brand",
              target:"_self"
            },
            {
              id:316,
              name:"规格参数管理",
              href:"http://platform.hnc.jcloudec.com/operating-item-view/specifications",
              target:"_self"
            },
            {
              id:317,
              name:"类目管理",
              href:"http://platform.hnc.jcloudec.com/operating-item-view/category",
              target:"_self"
            },
            {
              id:318,
              name:"批量上传",
              href:"http://platform.hnc.jcloudec.com/operating-item-view/batch-upload/upload",
              target:"_self"
            },
            {
              id:319,
              name:"商品评价",
              href:"http://platform.hnc.jcloudec.com/operating-item-view/evaluation-manage",
              target:"_self"
            },{
              id:320,
              name:"行业标签",
              href:"http://platform.hnc.jcloudec.com/operating-item-view/industry-label",
              target:"_self"
            }
          ]
        }
      ]
    },
    {
      id:4,
      name:"订单管理",
      children:[
        {
          id:41,
          name:"订单管理",
          icon:"xx",
          children:[
            {
              id:411,
              name:"订单管理",
              href:"http://platform.hnc.jcloudec.com/order-operating-view/order/order-grid",
              target:"_self"
            },
            {
              id:412,
              name:"采购单管理",
              href:"http://platform.hnc.jcloudec.com/order-operating-view/purchase-order/list",
              target:"_self"
            },
            {
              id:417,
              name:"询价单管理",
              href:"http://platform.hnc.jcloudec.com/order-operating-view/inquirysheet-manage/grid",
              target:"_self"
            },
            {
              id:413,
              name:"报价单管理",
              href:"http://platform.hnc.jcloudec.com/order-operating-view/quotation-order/list",
              target:"_self"
            },
            {
              id:414,
              name:"退款/售后管理",
              href:"http://platform.hnc.jcloudec.com/customer-service-operating-view/refund/grid",
              target:"_self"
            },
            {
              id:415,
              name:"中转站地址管理",
              href:"http://platform.hnc.jcloudec.com/customer-service-operating-view/refund/address",
              target:"_self"
            },
            {
              id:416,
              name:"换货采购单管理",
              href:"http://platform.hnc.jcloudec.com/customer-service-operating-view/exchangepurchase/grid",
              target:"_self"
            },
            {
              id:418,
              name:"订单中转站(物流中转站)",
              href:"http://platform.hnc.jcloudec.com/order-operating-view/transfer",
              target:"_self"
            },
            {
              id:419,
              name:"退货/换货中转站",
              href:"http://platform.hnc.jcloudec.com/customer-service-operating-view/refund/transfer",
              target:"_self"
            }
          ]
        },
        {
          id:42,
          name:"代客下单",
          href:"http://platform.hnc.jcloudec.com/order-operating-view/replace",
          target:"_self"
        },
      ]
    },
    {
      id:5,
      name:"系统设置",
      children:[
        {
          id:51,
          name:"系统设置",
          icon:"xx",
          children:[
            {
              id:511,
              name:"邮件设置",
              href:"http://platform.hnc.jcloudec.com/website-settings-operating-view/mail/info",
              target:"_self"
            },
            {
              id:512,
              name:"短信设置",
              href:"http://platform.hnc.jcloudec.com/website-settings-operating-view/message/info",
              target:"_self"
            },
            {
              id:513,
              name:"调整供应商时效设置",
              href:"http://platform.hnc.jcloudec.com/website-settings-operating-view/supplier/setting-supplier-time",
              target:"_self"
            },
            {
              id:514,
              name:"主要时间设置",
              href:"http://platform.hnc.jcloudec.com/website-settings-operating-view/majortimesetting/majortime",
              target:"_self"
            },
            {
              id:515,
              name:"敏感词设置",
              href:"http://platform.hnc.jcloudec.com/website-settings-operating-view/sensitiveWords/list",
              target:"_self"
            }
          ]
        }
      ]
    }
    ,
    {

    id: 6,
    name: "优惠促销",
    children: [
      {
        id: 61,
        name: "优惠促销",
        icon: "xx",
        children: [
          {
            id: 611,
            name: "促销管理",
            href: "http://platform.hnc.jcloudec.com/promotion-operating-view/promotion/grid",
            target: "_self",
            icon: "xx",
          },
          {
            id: 612,
            name: "优惠券管理",
            href: "http://platform.hnc.jcloudec.com/promotion-operating-view/coupon/grid",
            target: "_self",
            icon: "xx",
          },
          {
            id: 613,
            name: "优惠券活动管理",
            href: "http://platform.hnc.jcloudec.com/promotion-operating-view/activity/grid",
            target: "_self",
            icon: "xx",
          },

        ]
      }
    ]

  },
  {
    id: 7,
    name: "支付方式配置",
    children: [
      {
        id: 71,
        name: "支付方式配置",
        href: "http://platform.hnc.jcloudec.com/pay-operating-view/paytypeconfiguration",
        target: "_self",
        icon: "xx",
      },
      {
        id: 72,
        name: "汇款订单操作",
        target: "_self",
        icon: "xx",
        children: [
          {
            id: 721,
            name: "汇款收款操作",
            href: "http://platform.hnc.jcloudec.com/pay-operating-view/remit",
            target: "_self",
            icon: "xx",
          },
          {
            id: 722,
            name: "汇款退款操作",
            href: "http://platform.hnc.jcloudec.com/customer-service-operating-view/refund/remit",
            target: "_self",
            icon: "xx",
          },
        ]
      }
    ]
  },
  {
    id: 8,
    name: "金融管理",
    children: [
      {
        id: 81,
        name: "发票管理",
        icon: "xx",
        children: [
          {
            id: 811,
            name: "采购商发票管理",
            href: "http://platform.hnc.jcloudec.com/invoice-operating-view/invoiceoperating",
            target: "_self",
            icon: "xx",
          },
          {
            id: 812,
            name: "资质管理",
            href: "http://platform.hnc.jcloudec.com/invoice-operating-view/qualification",
            target: "_self",
            icon: "xx",
          },
        ]
      },
      {
        id: 82,
        name: "财务管理",
        icon: "xx",
        children: [
          {
            id: 821,
            name: "财务首页",
            href: "http://platform.hnc.jcloudec.com/finance-operating-view/financemanage/grid",
            target: "_self",
            icon: "xx",
          },
          {
            id: 822,
            name: "交易收益管理",
            href: "http://platform.hnc.jcloudec.com/finance-operating-view/tradeProfit",
            target: "_self",
            icon: "xx",
          },
          {
            id: 823,
            name: "资金流水",
            href: "http://platform.hnc.jcloudec.com/finance-operating-view/financestatements/grid",
            target: "_self",
            icon: "xx",
          },
          {
            id: 824,
            name: "结算管理",
            href: "http://platform.hnc.jcloudec.com/finance-operating-view/settlement/grid",
            target: "_self",
            icon: "xx",
          },
          {
            id: 825,
            name: "付款单管理",
            href: "http://platform.hnc.jcloudec.com/finance-operating-view/payment/bills",
            target: "_self",
            icon: "xx",
          },
          {
            id: 826,
            name: "结算周期设置",
            href: "http://platform.hnc.jcloudec.com/finance-operating-view/settlementcycle/grid",
            target: "_self",
            icon: "xx",
          },
        ]
      },
      {
        id: 83,
        name: "返点设置",
        icon: "xx",
        href: "http://platform.hnc.jcloudec.com/finance-operating-view/rebate/grid",
      }
    ]
  },
  {
    id: 9,
    name: "商城管理",
    children: [
      {
        id: 91,
        name: "商城设置",
        icon: "xx",
        children: [
          {
            id: 911,
            name: "基本设置",
            href: "http://platform.hnc.jcloudec.com/operating-view/basic-setup",
            target: "_self",
            icon: "xx",
          },
          {
            id: 912,
            name: "商城热词",
            href: "yyyy",
            target: "_self",
            icon: "xx",
          },
          {
            id: 913,
            name: "商城装修",
            href: "http://platform.hnc.jcloudec.com/operating-view/basic-set",
            target: "_self",
            icon: "xx",
          },
          {
            id: 914,
            name: "登录页设置",
            href: "yyyy",
            target: "_self",
            icon: "xx",
          },
          {
            id: 915,
            name: "分类导航设置",
            href: "http://platform.hnc.jcloudec.com/operating-item-view/fictitious-category",
            target: "_self",
            icon: "xx",
          },
        ]
      },
      {
        id: 92,
        name: "文章管理",
        icon: "xx",
        children: [
          {
            id: 921,
            name: "公告设置",
            href: "http://platform.hnc.jcloudec.com/operating-view/notice/list",
            target: "_self",
            icon: "xx",
          },
          {
            id: 922,
            name: "文档设置",
            href: "http://platform.hnc.jcloudec.com/operating-view/fileset",
            target: "_self",
            icon: "xx",
          },
        ]
      },
      {
        id: 93,
        name: "资讯后台管理",
        icon: "xx",
        children: [
          {
            id: 931,
            name: "资讯设置",
            href: "http://platform.hnc.jcloudec.com/news-operating-view/information-manage/manage",
            target: "_self",
            icon: "xx",
          },
          {
            id: 932,
            name: "评论管理",
            href: "http://platform.hnc.jcloudec.com/news-operating-view/information-manage/remark",
            target: "_self",
            icon: "xx",
          },
        ]
      },
      {
        id: 94,
        name: "移动商城管理",
        icon: "xx",
        children: [{
          id: 941,
          name: "下载页配置",
          href: "http://platform.hnc.jcloudec.com/website-settings-operating-view/download-set/index",
          target: "_self",
          icon: "xx"
        }, {
          id: 942,
          name: "引导页配置",
          href: "http://platform.hnc.jcloudec.com/website-settings-operating-view/bootpage",
          target: "_self",
          icon: "xx"
        }]
      }
    ]
  }
];

export default class Operating extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      menus: [],
      msgCount:'',
      icon:"",
      logo:''
    }
  }

  //------------------动态获取菜单begin-------------------------------------
   operatingMenuSearch(){
   var client = new ApiClient(null,null,null,true);
   let form = null;
   client.get('/authority-service/platform/resource/queryResourceMenuByPuserId',{params:form})
   .then(
     (res) => {
       if(res.code==0 && res.data){
         let result = this.reformData(res.data);
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
      for(let ib=0;ib<data.length;++ib){
        result.push(this.reformUnit(data[ib]));
      }
    }
    return result;
   }

   reformUnit(data){
    let unit = {id:'',name:'',href:'',target:'',children:[]};
    unit.id = data.id+'';
    unit.name = data.name;
    unit.href = data.url;
    unit.target = data.target?data.target:'_self';
    unit.icon = data.icon;
    if(data && data.children && data.children.length && data.children.length > 0) {
      for(let ia=0;ia<data.children.length;++ia){
        unit.children.push(this.reformUnit(data.children[ia]))
      }
    }else{
      delete unit['children'];
    }
    return unit;
   }
  //------------------动态获取菜单end-------------------------------------

  componentWillMount() {
    this.operatingMenuSearch();
    this.getWebsiteConfig();
    this.minHeight = typeof window !== 'undefined' ? document.body.clientHeight - 66 : 580;
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
            this.setState({icon:res.data.icon,logo:res.data.logo})
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
    }else{
      return "";
    }
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
    var openKey = 0;
    var vName = "";
    if(o && o.length && o.length > 0){
      for (var i = 0; i < o.length; i++) {
        var menu = o[i];
        if (menu.href && menu.href != "" && this.urlMatch(location,menu.href)) {
          subMenu = [];
          hKey = menu.id;
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
                  openKey = vMenu.id;
                  vName = sMenu.name;
                }
              }
            }
          }
        }
      }
    }
    return {subMenu, hKey, openKey, vKey, vName}
  }

  render() {
    const {menus = ms} = this.props;
    const horizontalMenu = this.horizontalMenu(this.state.menus);
    let menuUrl =
      this.props.menuUrl ||
      (this.props.children &&
      this.props.children.props &&
      this.props.children.props.route &&
      this.props.children.props.route.menuUrl);
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
        <div style={{minHeight: this.minHeight + "px"}} className='operating-layout'>
          <Helmet>
              <title>{vName}</title>
              <link rel="icon" href={this.state.icon} mce_href={this.state.icon} type="image/x-icon" />
          </Helmet>
          <div className='operating-layout-left'>
            <OperatingSider {...rest} logo={this.state.logo} />
          </div>
          <div className='operating-layout-right'>
            <div style={{background: '#fff', height: 'auto', padding: '0'}}>
              <OperatingHeader menus={horizontalMenu} selectKey={hKey}/>
            </div>
            <div style={{width: '100%', minHeight: this.minHeight + "px"}}>
              {this.props.children}
            </div>
          </div>
        </div>
      </LocaleProvider>
    );
  }
}
