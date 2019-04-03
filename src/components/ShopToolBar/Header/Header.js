import React, {Component} from 'react';
import { Badge,Icon,Menu,Dropdown } from 'jdcloudui';
import {Link} from 'react-router';
import './style/templateHader.css';
import ApiClient from '../../../apiClient/ApiClient';
export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      mainDomain: '/',
    };
  }

  componentWillMount() {
    this.getMainDomainForLogo();
  }

  //获取域名
  getMainDomainForLogo() {
    var client = new ApiClient();
    client.get('/passport/logout')
      .then(
        (res) => {
          if(res.code == 0 && res.data) {
            res.data.map(_item => {
              if (_item.domainType == 1) {
                let mainDomain = `http://${_item.domain}`;
                this.setState({mainDomain: mainDomain});
              }
            });
          }
        },
        (err) => {
        }
      );
  }
  //客服
  handleCreateShangQiao(){
    var iWidth=580;
    var iHeight=510;
    var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
    let sqUrl = "http://p.qiao.baidu.com/cps/chat?siteId=10819178&userId=23978973";
    window.open (sqUrl, "shangqiao", `height=510, width=580, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, top=${iTop},left=${iLeft}`);
  }

  render() {
    const {menus,selectKey} = this.props;
    const horizontal = menus.map((menu)=>{
      return <Menu.Item key={menu.id} ><a href={menu.href}>{menu.name}</a></Menu.Item>;
    });
    return (
      <div className="shop-framework-header">
        <div className="shop-framework-container">
          <ul>
            <li><a className="shop-framework-logo" href={this.state.mainDomain} >{this.props.logo?<img src={this.props.logo} />:''}</a></li>
            <li><span className="shop-framework-title" >{this.props.flowType && this.props.flowType=='shop'?'商家中心':'供应商中心'}</span></li>
          </ul>
          <div style={{paddingTop:'2%'}} className="audit-framework-kefu">
            <p>如有疑问，<a onClick={()=>this.handleCreateShangQiao()}>咨询客服</a></p>
          </div>
        </div>
      </div>
    )
  }
}
