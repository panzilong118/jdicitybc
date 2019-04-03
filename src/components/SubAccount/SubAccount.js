import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';	//链接跳转，相当于a标签
import BuyerHeader from '../Buyer/Header/Header';
import BuyerSider from '../Buyer/Sider/Sider';
import '../Buyer/style/buyer.css';
import TopTools from '../TopTools/TopTools';
import ApiClient from '../../apiClient/ApiClient';
import Helmet from 'react-helmet';
const subaccountmanageUrl = '/subaccount-buyer-view/subaccountmanage';
const rolemanageUrl = '/subaccount-buyer-view/rolemanage';
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
    client.get('/authority-service/mall/resource/queryResourceMenuByBuyId',{params:form})
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
    unit.icon = data.icon;
    if(data && data.children && data.children.length>0){
      for(let i in data.children){
        unit.children.push(this.reformUnit(data.children[i]))
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

  urlMatch(location,menu){
    // menu.href:/dfsd/sdfs  数据库中返回的数据
    // location:优先为menuUrl，其次this.location
    // menuUrl优先匹配
    // if ( menu && menu.href && (menu.href == subaccountmanageUrl || menu.href == rolemanageUrl)){
      if(location!='' && menu && menu.href && menu.href!=''){
        if(location==subaccountmanageUrl){
          if(location == menu.href && menu.name == '账号管理'){
            return true;
          }
        }else{
          if(location == menu.href){
            return true;
          }
        }
      }
    // }
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
        if (menu.href && menu.href != "" && this.urlMatch(location,menu)) {
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
            if (vMenu.href && vMenu.href != "" && this.urlMatch(location,vMenu)) {
              subMenu = menu.children;
              // subMenu = vMenu.children;
              hKey = menu.id;
              vKey = vMenu.id;
              vName = vMenu.name;
            } else if (vMenu.children && vMenu.children.length) {
              for (var n = 0; n < vMenu.children.length; n++) {
                var sMenu = vMenu.children[n];
                if (sMenu.href && sMenu.href != "" && this.urlMatch(location,sMenu)) {
                  subMenu = vMenu.children;
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
    const horizontalMenu = this.horizontalMenu(this.state.menus);
    let menuUrl =
      this.props.children &&
      this.props.children.props &&
      this.props.children.props.route &&
      this.props.children.props.route.menuUrl;
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
      <div>
        <Helmet>
          <title>{vName}</title>
          <link rel="icon" href={this.state.icon} mce_href={this.state.icon} type="image/x-icon" />
        </Helmet>
        <TopTools />
        <BuyerHeader menus={horizontalMenu} selectKey={hKey} logo={this.state.logo} type="subaccount"/>
        <div className="buyer-framework-body-container">
          <div className='buyer-framework-body-container-left'>
            <BuyerSider {...rest} />
          </div>
          <div className='buyer-framework-body-container-right' style={{minHeight: this.minHeight + "px"}}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}