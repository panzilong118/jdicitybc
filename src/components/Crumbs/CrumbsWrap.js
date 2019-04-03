import React, {Component} from 'react';
import JcBreadCrumb from '../JcBreadCrumb/JcBreadCrumb';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {queryResourceMenuByBuyId, queryResourceMenuBySellerId, queryResourceMenuByOwnerType, queryResourceMenuByCompanyId, queryResourceMenuByPuserId} from './redux';

@connect(
  state => ({}),
  dispatch => bindActionCreators({queryResourceMenuByBuyId, queryResourceMenuBySellerId, queryResourceMenuByOwnerType, queryResourceMenuByCompanyId, queryResourceMenuByPuserId}, dispatch)
)

export default class CrumbsWrap extends Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      menuData: [],
      willMenuData: props.menuData
    }
    this.pathname = '';
    this.host = '';
  }

  componentDidMount() {
    let domain = window.location.host.slice(0, 4);
    this.pathname = window.location.pathname;
    this.host = window.location.host;
    let menuType = this.props.menuType;
    let shopType = this.getCookieByArray('shopType');
    if(menuType === 'companymanage'){
      this.props.queryResourceMenuByCompanyId().then(
        result => {
          if(result.code == 0) {
            this.setState({menuData: result.data});
          }
        }
      )
      return;
    }
    if(shopType == 4) {
      this.props.queryResourceMenuByOwnerType({ownerType: 'pseudorandom'}).then(
        result => {
          if(result.code == 0) {
            this.setState({menuData: result.data});
          }
        }
      )
      return;
    }
    if(domain === "buye") {
      this.props.queryResourceMenuByBuyId().then(
        result => {
          if(result.code == 0) {
            this.setState({menuData: result.data});
          }
        }
      )
    }
    if(domain === 'shop') {
      (shopType == 1 || shopType == 2) && this.props.queryResourceMenuBySellerId({shopType}).then(
        result => {
          if(result.code == 0) {
            this.setState({menuData: result.data});
          }
        }
      )
    }
    if(domain === 'plat') {
      this.props.queryResourceMenuByPuserId().then(
        result => {
          if(result.code == 0) {
            this.setState({menuData: result.data});
          }
        }
      );
    }
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

  // // 渲染menu
  // renderMenu() {
  //   var menu = [];
  //   for(let i = 0 ; i < this.state.menuData.length ; i++){
  //     // 进入第一层for循环，判断接口url是否与访问url相同，如果相同则后面代码不执行
  //     if(this.pathname == this.state.menuData[i].url) {
  //       menu.push({name: this.state.menuData[i].name, url: '//' + this.host + this.state.menuData[i].url});
  //       return menu;
  //     }
  //     if(!this.state.menuData[i].children.length) continue;

  //     // 进入第二层for循环，判断接口url是否与访问url相同，如果相同则后面代码不执行
  //     for(let j = 0 ; j < this.state.menuData[i].children.length ; j++){
  //       if(this.pathname == this.state.menuData[i].children[j].url) {
  //         menu.push({name: this.state.menuData[i].name, url: '//' + this.host + this.state.menuData[i].url})
  //         menu.push({name: this.state.menuData[i].children[j].name, url: '//' + this.host + this.state.menuData[i].children[j].url});
  //         return menu;
  //       }
  //       if(!this.state.menuData[i].children[j].children.length) continue;

  //       // 进入第三层for循环，判断接口url是否与访问url相同，如果相同则后面代码不执行
  //       for(let k = 0 ; k < this.state.menuData[i].children[j].children.length ; k++){
  //         if(this.pathname == this.state.menuData[i].children[j].children[k].url) {
  //           menu.push({name: this.state.menuData[i].name, url: '//' + this.host + this.state.menuData[i].url})
  //           menu.push({name: this.state.menuData[i].children[j].name, url: '//' + this.host + this.state.menuData[i].children[j].url});
  //           menu.push({name: this.state.menuData[i].children[j].children[k].name, url: '//' + this.host + this.state.menuData[i].children[j].children[k].url});
  //           return menu;
  //         }
  //         if(!this.state.menuData[i].children[j].children[k].children.length) continue;

  //         // 进入第四层for循环，判断接口url是否与访问url相同，如果相同则后面代码不执行
  //         for(let m = 0 ; m < this.state.menuData[i].children[j].children[k].children.length.length ; m++){
  //           if(this.pathname == this.state.menuData[i].children[j].children[k].children[m].url) {
  //             menu.push({name: this.state.menuData[i].name, url: '//' + this.host + this.state.menuData[i].url})
  //             menu.push({name: this.state.menuData[i].children[j].name, url: '//' + this.host + this.state.menuData[i].children[j].url});
  //             menu.push({name: this.state.menuData[i].children[j].children[k].name, url: '//' + this.host + this.state.menuData[i].children[j].children[k].url});
  //             menu.push({name: this.state.menuData[i].children[j].children[k].children[m].name, url: '//' + this.host + this.state.menuData[i].children[j].children[k].children[m].url});
  //             return menu;
  //           }
  //           if(!this.state.menuData[i].children[j].children[k].children[m].children.length) continue;
  //         }
  //       }
  //     }
  //   }
  //   return menu;
  // }

  // // 渲染menu
  // renderMenu(menuData) {
  //   console.log(1);
  //   for(let i = 0 ; i < menuData.length ; i++) {
  //     menu.push({name: menuData[i].name, url: '//' + this.host + menuData[i].url});
  //     if(this.pathname != menuData[i].url) {
  //       if(menuData[i].children.length) {
  //         return this.renderMenu(menuData[i].children);
  //       }else{
  //         menu = [];
  //       }
  //     }else{
  //       return;
  //     }
  //   }
  // }

  // 渲染menu
  renderMenu(data) {
    if(this.state.willMenuData) return this.state.willMenuData
    const flatten = (data) => {
      data = data || []
      return data.reduce((arr, {name, url, code, pid, children = []}) =>
        arr.concat([{name, url, code, pid}], flatten(children)), [])
    }
    const arr = flatten(data)
    const crumbsObj = arr.reduce((obj, v) => {
      obj[v.code] = v;
      return obj;
    }, {});
    let code = (arr.find((item, index, data) => item.url == this.pathname) || {}).code;
    return this.getMenus(crumbsObj, code);
  }

  getMenus(obj, code) {
    const menu = [];
    if(!code) return menu;
    const pushMenu = (code) => {
      menu.unshift(obj[code]);
      if(obj[code].pid != 0){
        pushMenu(obj[obj[code].pid].code);
      }
    }
    pushMenu(code);
    return menu;
  }

  render () {
    const menu = this.state.menuData.length && this.renderMenu(this.state.menuData);
    return <div className="ui-breadcrumb">
        <JcBreadCrumb menu={menu} />
      </div>
  }
}