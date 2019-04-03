import React, {Component} from 'react';
import { Badge,Icon,Menu,Dropdown } from 'jdcloudui';
import {Link} from 'react-router';
import  './style/templateHader.css';
import onLogout from '../../../sso/onLogout';
import ApiClient from '../../../apiClient/ApiClient';
export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      msgCount:'',
      userName:'',
      menus:'',
      isSubAccount:true,
      dyHeaderMinWidth:1000,
      key:''
    }
  }
  logout() {
     const logouts = {
        "passport-platform":["/passport-operating-view/logout",false],
        "platform":["/operating-view/logout",false],
        "view-zx-mall":["/decoration/logout",false],
        "view-zone":["/zone/logout",false]
      }
      onLogout(logouts,"plogin");
  }
  getMsgCount(){
    var client = new ApiClient(null,null,null,true);
    client.get('/postman/platform/websitemsg/queryUnreadWebSiteCount')
      .then(
        (res) => {
          if(res.code==0 && res.data){
            this.setState({
              msgCount: res.data,
            });
          }
        },
        (err) => {

        }
      )
  }
  getUserName(){
    var client = new ApiClient(null,null,null,true);
    client.get('/platform-passport/platform/Login/queryLoginInfo',{params:{platformId:2}})
      .then(
        (res) => {
          if(res.code==0 && res.data && res.data.username){
            this.setState({
              userName: res.data.username,
            });
          }
        },
        (err) => {

        }
      )
  }
  getChangePassWordPermission(){
    var client = new ApiClient(null,null,null,true);
    client.get('/authority/platform/platformsubaccount/checkSubAccountInfo')
      .then(
        (res) => {
          if(res.code==0){
            this.setState({
              isSubAccount: res.data,
            });
          }
        },
        (err) => {

        }
      )
  }
  componentWillMount() {
    this.getMsgCount();
    this.getUserName();
    this.getChangePassWordPermission();
  }

  calculateNum(menus,clientWidth,headMenuPx) {
    //fontSize:14 padding:15x2 current:1028;clientWidth:可用空间 1028:目前菜单总长度
    let menuNamepx=0;
    if(menus && menus.length){
      for (let i=0;i<menus.length;++i) {
        const menuNameLength = menus[menus.length - parseInt(i)-1].name.length;
        menuNamepx += parseInt(menuNameLength) * 14 + 30;
        if (headMenuPx-menuNamepx < clientWidth) {
          return parseInt(i) + 1
        }
      }
    }else{
      return 0;
    }
  }

  createMenu(menus, selectKey,type) {
    //sider：200 userinfo：200 ，ore：80 buffer：200,titleName:100
    if(typeof(window) !== 'undefined'){
        // const clientWidth = window.screen.availWidth -200 -200-80-100;
        var w = document.documentElement.scrollWidth || document.body.scrollWidth;
        const clientWidth = w - 200 - 84 - 140 - 85 - 10;
        if(type == 2) {
          this.setState({key: Math.random()});
        }
      let headMenuPx = 0;
      if ( menus && menus.length && menus.length!=0) {
        headMenuPx = 86 * menus.length;
      }
      if (clientWidth < headMenuPx) {
        const dropNum = this.calculateNum(menus,clientWidth,headMenuPx);
        const mainMenu = menus && menus.slice(0, menus.length - dropNum);
        const dropDownMenu = menus && menus.slice(menus.length - dropNum, menus.length);
        const mainMenuData = mainMenu && mainMenu.map((menu)=>{
          return <Menu.Item key={menu.id}><a href={menu.href}>{menu.name}</a></Menu.Item>;
        });
        const dropDownMenuData = dropDownMenu && dropDownMenu.map((menu)=>{
          return <Menu.Item key={menu.id}><a href={menu.href}>{menu.name}</a></Menu.Item>;
        });
        let forceMoreMenu=false;
        for(let q=0;q<dropDownMenu.length;++q){
          if(dropDownMenu[q].id==[String(selectKey)]){
            forceMoreMenu = true;
            break;
          }
        }
        const finalData = (
          <Menu
            className="dropdownmenu1"
            key={Math.random()}
            theme="light"
            mode="inline"
            selectedKeys={[String(selectKey)]}
            style={{ lineHeight: '20px', borderBottom: '0', float: 'right', marginRight: '10px', fontSize: '14px'}}
          >
            {dropDownMenuData}
          </Menu>
        )
        return (
          <div className="moremenu">
              <Badge count={dropNum} overflowCount={10}>
                <Dropdown overlay={finalData} placement="bottomCenter" >
                    <a className="jc-dropdown-link" href="javascript:void(0)">
                      {forceMoreMenu?
                        <span style={{fontSize:'14px',color:'#333'}}>更多</span>
                        :
                        <span style={{fontSize:'14px',color:'#999'}}>更多</span>
                      }
                      <Icon type="down" style={{color:"#b1b1b1"}}/>
                    </a>
                </Dropdown>
              </Badge>
            <Menu
              theme="light"
              mode="horizontal"
              selectedKeys={[String(selectKey)]}
              style={{ lineHeight: '63px', borderBottom: '0', float: 'right', marginRight: '10px', fontSize: '14px', paddingRight:'5px'}}
            >
              {mainMenuData}
            </Menu>
          </div>

        );
      } else {
        const horizontal = menus && menus.map((menu)=>{
          return <Menu.Item key={menu.id}><a href={menu.href}>{menu.name}</a></Menu.Item>;
        });
        return (
          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={[String(selectKey)]}
            style={{ lineHeight: '63px', borderBottom: '0', float: 'right', marginRight: '10px', fontSize: '14px',paddingRight:'5px'}}
          >
            {horizontal}
          </Menu>
        );
      }
    }else{
      return (<div></div>);
    }
  }
  createUserMenu() {
    if (!this.state.isSubAccount) {
      return (
        <Menu className="dropdownmenuUser">
          <Menu.Item>
            <a rel="noopener noreferrer" target="_blank" href="/user-operating-view/changepwd">修改密码</a>
          </Menu.Item>
          <Menu.Item>
            <a rel="noopener noreferrer" onClick={()=>this.logout()} href="javascript:void(0)">退出</a>
          </Menu.Item>
        </Menu>
      );
    }else {
      return (
        <Menu className="dropdownmenuUser">
          <Menu.Item>
            <a rel="noopener noreferrer" onClick={()=>this.logout()} href="javascript:void(0)">退出</a>
          </Menu.Item>
        </Menu>
      );
    }
  }

  componentDidMount(){
      // const clientWidth = window.screen.availWidth -200 -200-80-100;
      var w = document.documentElement.scrollWidth || document.body.scrollWidth;
      const clientWidth = w - 200 - 84 - 140 - 85 - 10;
    this.setState({
      dyHeaderMinWidth:clientWidth,
    })
      var _this = this;
      window.onresize = function(){
        const {menus, selectKey} = _this.props;
        _this.createMenu(menus, selectKey, 2)
      }
  }

  render() {
    const {menus, selectKey} = this.props;
    return (
      <div>
        <div className="ui-header" style={{minWidth: this.state.dyHeaderMinWidth}}>
          <h2>运营后台</h2>
          <div className="userInfo">
            {/* cont>99添加className="mBadge" */}
            <Badge count={this.state.msgCount} className="ui-badge" overflowCount={99}>
              <a href="/operating-view/message/message-center"><Icon type="new-icon72" style={{fontSize:"25px", color:'#b2b2b2'}} /></a>
            </Badge>
            <Dropdown overlay={this.createUserMenu()} >
              <a className="jc-dropdown-link" href="javascript:void(0)">
                {this.state.userName} <Icon type="down" />
              </a>
            </Dropdown>
          </div>
          {this.createMenu(menus, selectKey,1)}
        </div>
      </div>
    );
  }
}
