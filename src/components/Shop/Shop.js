import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';	//链接跳转，相当于a标签
import ShopHeader from './Header/Header';
import ShopSider from './Sider/Sider';
import TopTools from '../TopTools/TopTools';
import Helmet from 'react-helmet';
import ApiClient from '../../apiClient/ApiClient';
import './style/shop.css';

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
      icon:"",
      logo:''
    }
    this.buyerDomain='/';
    this.resource={};
  }

  //获取买家域名
  getBuyerDomainForSubcount() {
    var client = new ApiClient();
    client.get('/passport/logout')
      .then(
        (res) => {
          if(res.code == 0 && res.data) {
            res.data.map(_item => {
              if (_item.domainType == 2) {
                this.buyerDomain = _item.domain;
                let result = this.reformData(this.resource);
                this.setState({
                  menus: result,
                })
              }
            });
          }
        },
        (err) => {
        }
      );
  }


  // 根据name获取cookie值
  getCookieByArray(name){
    if(typeof document !== 'undefined'){
      var cookies = document.cookie.split(';');
      var c;
      for(var i=0; i<cookies.length ; i++){
        c = cookies[i].split('=');
        if (c[0].replace(' ', '') == name) {
          return c[1];
        }
      }
    }else{
      return null;
    }
  }
  //------------------动态获取菜单begin-------------------------------------
  shopMenuSearch(){
    var client = new ApiClient();
    let form = null;
    client.get('/authority-service/mall/resource/queryResourceMenuBySellerId',{params:{shopType:this.getCookieByArray('shopType')?this.getCookieByArray('shopType'):''}})
      .then(
        (res) => {
          if(res.code==0 && res.data){
            this.resource = res.data;
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
      for(let ia=0;ia<data.length;++ia){
        let tmp = this.reformUnit(data[ia])
        if(tmp){
          result.push(tmp);
        }
      }
    }
    return result;
  }

  reformUnit(data){
    let unit = {id:'',name:'',href:'',target:'',children:[]};
    unit.id = data.id+'';
    unit.name = data.name;
    if(data.name=='子账号管理' && data.url && data.url.indexOf('buyer.')==-1){
      unit.href = '//'+this.buyerDomain + data.url;
      unit.target = '_blank'
    }else{
      unit.href = data.url;
      unit.target = data.target?data.target:'_self';
    }
    unit.icon = data.icon;
    if(data && data.url && data.url=='/subaccount-buyer-view/subaccountmanage'){
      if(data && data.children && data.children.length>0) {
        if(this.buyerDomain=='/'){
          return false;
        }else{
          unit.href = '//'+this.buyerDomain + data.children[0].url
        }
      }
      unit.target = '_blank'
      delete unit['children'];
      return unit;
    }
    if(data && data.children && data.children.length > 0){
      for(let ib=0;ib<data.children.length;++ib){
        let tmp = this.reformUnit(data.children[ib]);
        if(tmp){
          unit.children.push(tmp)
        }
      }
    }else{
      delete unit['children'];
    }
    return unit;
  }
  //------------------动态获取菜单end-------------------------------------
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
  componentWillMount() {
    this.getBuyerDomainForSubcount();
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
    const {menus=ms} = this.props;
    const horizontalMenu = this.horizontalMenu(this.state.menus);
      let menuUrl =
          this.props.menuUrl || (
              this.props.children &&
              this.props.children.props &&
              this.props.children.props.route &&
              this.props.children.props.route.menuUrl
          );
    let verticalMenu = { subMenu:[], hKey:'0', openKey:'0', vKey:[],} ;
    if(menuUrl){
      verticalMenu = this.verticalMenu(this.state.menus, menuUrl);
    }else{
      verticalMenu = this.verticalMenu(this.state.menus, this.location);
    }
    if(verticalMenu.subMenu && verticalMenu.subMenu.length && verticalMenu.subMenu.length == 0) {
       verticalMenu =  this.verticalMenu(this.state.menus, this.referer||"");
    }
    const {hKey,vName,...rest} = verticalMenu;
    return (
      <LocaleProvider locale={zh_CN}>
        <div>
          <Helmet>
              <title>{vName}</title>
              <link rel="icon" href={this.state.icon} mce_href={this.state.icon} type="image/x-icon" />
          </Helmet>
          <TopTools />
          <ShopHeader menus={horizontalMenu} selectKey = {hKey} logo = {this.state.logo}/>
          <div className="shop-framework-body-container">
            <div className='shop-framework-body-container-left'>
              <ShopSider {...rest} />
            </div>
            <div className='shop-framework-body-container-right' style={{ minHeight:this.minHeight+"px"}}>
              {this.props.children}
            </div>
          </div>
        </div>
      </LocaleProvider>
    )
  }
}