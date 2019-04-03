import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';	//链接跳转，相当于a标签
import { Layout} from 'jdcloudui';
import ShopHeader from './Header/Header';
// import ShopSider from './Sider/Sider';
import TopTools from '../TopTools/TopTools';

import ApiClient from '../../apiClient/ApiClient';
import '../Shop/style/shop.css';
const { Content } = Layout;
import Helmet from 'react-helmet';

// 国际化中文
import { LocaleProvider } from 'jdcloudui';
import zh_CN from 'jdcloudui/lib/locale-provider/zh_CN';
import moment from 'moment';
moment.locale('zh-cn');

const ms = [
    {
      id:1,
      name:"首页",
      href: "http://shop.hnc.jcloudec.com/shop-view/home",
      target:"_self",
      children:[
        {
          id:11,
          name:"商品管理",
          icon:"cgs",
          children:[
            {
              id:111,
              name:"经营类目",
              href:"http://shop.hnc.jcloudec.com/item-shop-view/goods-manage/category",
              target:"_self"
            },
            {
              id:112,
              name:"经营品牌",
              href:"http://shop.hnc.jcloudec.com/item-shop-view/goods-manage/brand",
              target:"_self"
            }
          ]
        },
        {
          id:12,
          name:"商品发布",
          icon:"cgs",
          children:[
            {
              id:121,
              name:"选择供货商品",
              href:"http://shop.hnc.jcloudec.com/item-shop-view/selectgoods",
              target:"_self"
            },
            {
              id:122,
              name:"商品信息管理",
              href:"http://shop.hnc.jcloudec.com/item-shop-view/iteminfo",
              target:"_self"
            },
            {
              id:123,
              name:"提交新商品",
              href:"http://shop.hnc.jcloudec.com/item-shop-view/goods-release",
              target:"_self"
            }
          ]
        },
        {
          id:13,
          name:"物流服务",
          icon:"cgs",
          children:[
            {
              id:131,
              name:"地址管理",
              href:"http://shop.hnc.jcloudec.com/user-shop-view/supplier/address",
              target:"_self"
            }
          ]
        }
      ]
    },
    {
      id:2,
      name:"账号管理",
      children:[
        {
          id:21,
          name:"账号管理",
          icon:"cgs",
          children:[
            {
              id:211,
              name:"账号信息",
              href:"http://shop.hnc.jcloudec.com/user-shop-view/accountmanage/accountInfo",
              target:"_self"
            },
            {
              id:212,
              name:"账号安全",
              href:"http://shop.hnc.jcloudec.com/user-shop-view/accountmanage/accountSecurity",
              target:"_self"
            }
          ]
        }
      ]
    },
    {
      id:3,
      name:"订单管理",
      children:[
        {
          id:31,
          name:"订单管理",
          icon:"xx",
          children:[
            {
              id:311,
              name:"订单管理",
              href:"http://shop.hnc.jcloudec.com/order-shop-view/order/list",
              target:"_self"
            },
            {
              id:312,
              name:"销售区域设置",
              href:"http://shop.hnc.jcloudec.com/order-shop-view/salearea",
              target:"_self"
            },
            {
              id:313,
              name:"换货订单",
              href:"http://shop.hnc.jcloudec.com/customer-service-shop-view/exchange/grid",
              target:"_self"
            },
            {
              id:314,
              name:"退换货记录",
              href:"http://shop.hnc.jcloudec.com/customer-service-shop-view/returnexchangerecord/grid",
              target:"_self"
            }
          ]
        }
      ]
    },
  {
    id:5,
    name:"财务管理",
    children:[
      {
        id:51,
        name:"会员资金账户",
        href:"http://shop.hnc.jcloudec.com/finance-shop-view/memberFinanceAccount",
        target:"_self"
      },
      {
        id:52,
        name:"结算管理",
        href:"http://shop.hnc.jcloudec.com/finance-shop-view/settlement/grid",
        target:"_self"
      }
    ]
  },
]
export default class Shop extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  constructor(props, context) {
    super(props, context);
    this.state={
      menus:[],
      icon:''
    }
  }

  //------------------动态获取菜单begin-------------------------------------
  shopMenuSearch(){
    var client = new ApiClient();
    let form = null;
    client.get('/authority-service/mall/resource/queryResourceMenuBySellerId',{params:form})
      .then(
        (res) => {
          if(res.code==0 && res.data){
            let tmp = res.data.slice(0,9);
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
      for(let i in data){
        result.push(this.reformUnit(data[i]));
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
    if(data && data.children && data.children.length > 0){
      for(let i in data.children){
        unit.children.push(this.reformUnit(data.children[i]))
      }
    }else{
      delete unit['children'];
    }
    return unit;
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
  //------------------动态获取菜单end-------------------------------------

  componentWillMount() {
    this.shopMenuSearch();
    this.getWebsiteConfig();
    this.minHeight = typeof window !== 'undefined' ? document.body.clientHeight-64 : 580;
    this.location = typeof window !== 'undefined' ? window.location.href : "";
    this.referer = typeof document !== 'undefined' ? document.referrer : "";
  }
  getHref(o) {
    if(o && o.length){
      for(var i = 0; i < o.length; i++) {
        var menu = o[i];
        if(menu.href&&menu.href!="") {
          return menu.href;
        }else if(menu.children&&menu.children.length){
          return this.getHref(menu.children)
        }else{
          return "";
        }
      }
    }else{
      return "";
    }
  }
  horizontalMenu(o) {
    const horizontalMenu=[];
    if(o && o.length && o.length > 0){
      o.map((menu)=>{
        const {children,...rest} = menu;
        rest.href = rest.href&&rest.href!=""?rest.href:this.getHref(children);
        horizontalMenu.push(rest);
      });
    }else{}
    return horizontalMenu;
  }

  urlMatch(location,href){
    //href:/dfsd/sdfs
    //location:http://dfsd/sdf/sdfs
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
    var vName = "";
    var openKey = [];
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
  render() {
    const {menus=ms} = this.props;
    const horizontalMenu = this.horizontalMenu(this.state.menus);
    let verticalMenu = this.verticalMenu(this.state.menus, this.location);
    if(verticalMenu.subMenu.length==0) {
       verticalMenu =  this.verticalMenu(this.state.menus, this.referer||"");
    }
    const {hKey,vName,...rest} = verticalMenu;
    return (
      <LocaleProvider locale={zh_CN}>
        <div>
          <Helmet>
            <title>{this.props.flowType && this.props.flowType=='shop'?'商家入驻':'供应商入驻'}</title>
            <link rel="icon" href={this.state.icon} mce_href={this.state.icon} type="image/x-icon" />
          </Helmet>
          <TopTools />
          <ShopHeader menus={horizontalMenu} selectKey = {hKey} logo = {this.state.logo} flowType={this.props.flowType} />
          <div className="shop-framework-body-container">
            <Content style={{ minHeight:this.minHeight+"px"}}>
              {this.props.children}
            </Content>
          </div>
        </div>
      </LocaleProvider>
    )
  }
}