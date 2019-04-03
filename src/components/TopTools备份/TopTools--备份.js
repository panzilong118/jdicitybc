/**************************
 * @author: FengYan
 * @update: 20170523
 * @description:供应商顶部工具栏
 *************************/
/************  基础组件  *************/
import React, {Component} from 'react';
import {Row, Col, Icon, Modal} from 'jdcloudui';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import getCitys, {getCitysAction} from './redux/citys_redux';
import isLogin, {getLoginAction} from './redux/isLogin_redux';
import getUrl, {getUrlAction} from './redux/getUrl_redux';
import getCode, {getCodeAction} from './redux/getCode_redux';
import getTel, {getTelAction} from './redux/getTel_redux';
import onLogout from '../../sso/onLogout';
import ApiClient from '../../apiClient/ApiClient';
const client = new ApiClient();
/************  自定义组件  *************/
import styles from './styles/styles.css';
import CompanySelect from './CompanySelect/CompanySelect';
import ShopSelect from './ShopSelect/ShopSelect';
import AccountManagement from './AccountManagement/AccountManagement';
import Cookies from '../../common/Cookies';
import CompanyLayer from './CompanyLayer/CompanyLayer';
const company = new CompanyLayer();
import AccountMa from './AccountMa/AccountMa';

@connect(
  state => (getCitys, isLogin, getUrl, getCode, getTel),
  dispatch => bindActionCreators({getCitysAction, getLoginAction, getUrlAction, getCodeAction, getTelAction}, dispatch)
)

export default class TopTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citys: [],
      citysVisible: false,
      cityName: '未选择',
      cityId: '',
      username: '',
      shopDomain: '',
      buyerDomain: '',
      paltformDomain: '',
      domain: '',
      contactInfo: '',
      weixinCodeUrl: '',
      appDownCodeUrl: '',
      shopNum: 0
    };
  }

  setCookie({areaId, areaName}) {
    // 存储，IE6~7 cookie 其他浏览器HTML5本地存储
    const cityName = encodeURIComponent(areaName);
    document.cookie = `areaName=${cityName}; path=/; domain=${this.state.domain}`;
    document.cookie = `areaId=${areaId}; path=/; domain=${this.state.domain}`;
    // if (localStorage) {
    //   localStorage.areaId = areaId;
    //   localStorage.areaName = areaName;
    this.defaultCookie();
    // this.setState({
    //   cityName: areaName,
    //   cityId: areaId
    // });
    // } else {
    // document.cookie = `areaId=${areaId};areaName=${areaName}`;
    // }
    if (this.state.citysVisible) {
      this.setState({
        citysVisible: false
      });
    }
    document.getElementById('citys').style.display = 'none';
  }

  renderCity(citys) {
    // 一级地市列表渲染
    const cityArr = [];
    citys.map(_city => {
      cityArr.push(
        <li key={_city.code + Math.random() * 100000}>
          <a href="javascript:void(0)"
             onClick={() => this.setCookie({areaId: _city.code, areaName: _city.name})}
             className={this.state.cityName === _city.name ? 'active' : ''}
             key={_city.code}>
            {_city.name}
          </a>
        </li>);
    });
    return cityArr;
  }

  componentDidMount() {
    // 获取一级地市数据，存入citys
    this.props.getCitysAction().then(rs => {
      if (rs.code != 0) return;
      let cityList = [];
      rs.data.map(_item => {
        cityList.push({
          name: _item.name,
          code: _item.code
        });
      });
      this.setState({
        citys: cityList
      });
      this.defaultCookie();
    });
    // 获取用户登录信息
    this.props.getLoginAction().then(rs => {
      if (rs.code == 0) {
        this.setState({
          username: rs.data.username
        });
      }
    });
    // 获取url
    this.props.getUrlAction().then(rs => {
      if (rs.code == 0) {
        rs.data.map(_item => {
          if (_item.domainType == 3) this.setState({shopDomain: _item.domain});
          if (_item.domainType == 2) this.setState({buyerDomain: _item.domain});
          if (_item.domainType == 5) this.setState({paltformDomain: _item.domain});
          if (_item.domainType == 1) this.setState({domain: _item.domain});
        });
      }
    });
    document.getElementById('chooseLocal').onmouseenter = () => {
      document.getElementById('citys').style.display = 'inline-block';
    };
    document.getElementById('chooseLocal').onmouseleave = () => {
      document.getElementById('citys').style.display = 'none';
    };
    // 获取二维码
    this.props.getCodeAction().then(rs => {
      if (rs.code == 0) {
        this.setState({
          weixinCodeUrl: rs.data.weixinCodeUrl,
          appDownCodeUrl: rs.data.appDownCodeUrl
        });
      }
    });
    // 获取 400电话
    this.props.getTelAction().then(rs => {
      if (rs.code == 0) {
        if (rs.data[0] && rs.data[0].contactInfo) {
          this.setState({
            contactInfo: rs.data[0].contactInfo
          });
        } else {
          this.setState({
            contactInfo: ''
          });
        }
      }
    });
    // 获取购物车数量
    client.get('cart/mall/cart/queryCartItemNum').then(rs => {
      if (rs.code == 0) {
        this.setState({
          shopNum: rs.data
        });
      }
    });

    // 获取companyId
    const ck = new Cookies();
    this.companyId = ck.get('companyId');
  }

  defaultCookie() {
    const cookie = document.cookie;
    const cookieArr = cookie.split(';');
    if (cookie.indexOf('areaId') < 0) {
      this.setState({
        citysVisible: true
      });
    } else {
      cookieArr.map(_item => {
        if (_item.indexOf('areaName') >= 0) {
          this.setState({
            cityName: decodeURIComponent(_item.substr(_item.indexOf('=') + 1, _item.length))
          });
        } else {
          this.setState({
            cityId: _item.substr(_item.indexOf('=') + 1, _item.length)
          });
        }
      });
    }
    // }
  }

  logout() {
    const logouts = {
      "passport": ["/service-passport-view/logout", false],
      "shop": ["/shop-view/logout", false],
      "buyer": ["/buyer-view/logout", false],
      "main": ["/website-view/logout", false]
    }
    onLogout(logouts, "login");
  }

  isInfo() {
    if (window) {
      const href = window.location.href;
      if (href.indexOf('sellerinfo/') >= 0 ||
        href.indexOf('accountmanage/') >= 0) {
        return true;
      }
      return false;
    }
  }

  isBuyer() {
    if (window) {
      const href = window.location.href;
      if (href.indexOf('buyer.') >= 0) {
        return true;
      }
      return false;
    }
  }

  render() {
    company.isCompanyId();
    return (
      <Row className="topTools">
        <Modal
          visible={this.state.citysVisible}
          title="请选择你的收货地区"
          footer={null}
          closable={false}
        >
          <div className="unChooseLocal">
            <ul>
              {this.renderCity(this.state.citys)}
            </ul>
          </div>
        </Modal>
        <Row className="topToolsWidth">
          <Col span={2}>
            <a href={`http://${this.state.domain}`} className="company-a">
              <Icon
                type="new-home"
                className="marginRight5 iconSize"
              />
              商城首页
            </a>
          </Col>
          <Col span={22}>
            <div className="toolsMenu">
              <ul>
                {/* 登录信息 */}
                {
                  this.state.username ?
                    (<li>
                     <span>
                        HI~
                       <a
                         href={`http://${this.state.buyerDomain}/buyer-view/homepage`}
                         className="company-a"
                       >
                         {this.state.username}
                         </a>
                       {/*  账号管理链接  */}
                       <AccountManagement shopDomain={this.state.shopDomain} buyerDomain={this.state.buyerDomain}/>
                       {/*  公司下拉列表  */}
                       {
                         !this.isInfo() && (
                           this.isBuyer() ?
                             <CompanySelect
                               doma={this.state.domain}
                               buyerDomain={this.state.buyerDomain}
                               shopDomain={this.state.shopDomain}
                             /> :
                             <ShopSelect
                               doma={this.state.domain}
                               shopDomain={this.state.shopDomain}
                             />
                         )
                       }
                       {
                         this.isInfo() &&
                         <AccountMa
                           doma={this.state.domain}
                           buyerDomain={this.state.buyerDomain}
                           shopDomain={this.state.shopDomain}
                         />
                       }
                       <a href="javascript:void(0)" onClick={() => this.logout()}
                          className={styles.textColor777}>【退出】</a>
                     </span>
                    </li>) :
                    (<li>
                      {/* <a href={`http://${this.state.buyerDomain}/service-passport-view/login`}>请登录</a> */}
                      {/* <a href={`http://${this.state.buyerDomain}/service-passport-view/register`}>免费注册</a> */}
                    </li>)
                }
                {/* 购物车 */}
                <li>
                  <a href={`http://${this.state.domain}/website-view/cart`} className="company-a">
                    <Icon type="new-cart" className="iconSize"/>
                    <span className={this.state.shopNum < 1 ? 'f-dn' : 'icon-num'}>
                      {this.state.shopNum > '99' ? '99+' : this.state.shopNum}
                      </span>
                  </a>
                </li>
                {/* 我的订单 */}
                <li>
                  <a href={`http://${this.state.buyerDomain}/order-buyer-view/purchaserback/ordermanagement`}
                     className="company-a">我的订单</a>
                </li>
                {/* 采购商中心 */}
                <li>
                  <a href={`http://${this.state.buyerDomain}/buyer-view/homepage`} className="company-a">采购商中心</a>
                </li>
                {/* 合作招商 */}
                <li>
                  <div className="downMenu shop">
                    <a>
                      合作招商<Icon type="down ml5" className="trans180"/>
                    </a>
                    <ul>
                      <dl>
                        <dt><strong>商家</strong></dt>
                        <dd>
                          <a
                            href={`http://${this.state.buyerDomain}/user-buyer-view/store-manage`}
                            target="_blank">
                            商家中心
                          </a>
                        </dd>
                        <dd>
                          <a href={`http://${this.state.shopDomain}/user-shop-view/sellerinfo/defaultshophome`}
                             target="_blank">
                            商家入驻
                          </a>
                        </dd>
                      </dl>
                      <dl>
                        <dt><strong>自营供应商</strong></dt>
                        <dd>
                          <a
                            href={`http://${this.state.buyerDomain}/user-buyer-view/store-manage`}
                            target="_blank">
                            供应商中心
                          </a>
                        </dd>
                        <dd>
                          <a href={`http://${this.state.shopDomain}/user-shop-view/sellerinfo/defaultsupplyhome`}
                             target="_blank">
                            供应商入驻
                          </a>
                        </dd>
                      </dl>
                    </ul>
                  </div>
                </li>
                {/* 二维码 */}
                <li>
                  <div className="downMenu app">
                    <a>
                      <Icon type="new-phone iconSize"/>
                    </a>
                    <ul>
                      <li>
                        <img src={this.state.weixinCodeUrl} alt="微信商城"/>
                        <p>微信扫一扫</p>
                        <p>关注商城</p>
                        <p>微信商城</p>
                      </li>
                      <li>
                        <img src={this.state.appDownCodeUrl} alt="立即下载APP"/>
                        <p>扫描二维码</p>
                        <p>立即下载APP</p>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* 消息中心 */}
                <li>
                  <a href={`http://${this.state.shopDomain}/shop-view/message/message-center`}
                     className="company-a">消息</a>
                </li>
                {/* 归属地 */}
                <li>
                  <div className="downMenu chooseLocal" id="chooseLocal">
                    <a href="javascript:void(0)">
                      <Icon
                        type="new-gps"
                        className="textColorRed marginRight5 iconSize"
                      />
                      {this.state.cityName}
                    </a>
                    <ul id="citys">
                      {this.renderCity(this.state.citys)}
                    </ul>
                  </div>
                </li>
                {/* 在线客服 */}
                <li>
                  <a href="javascript:void(0)">
                    <Icon
                      type="new-phone2"
                      className="textColorRed marginRight5 iconSize"
                    />
                    <strong className="hotLine">{this.state.contactInfo}</strong>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Row>
    )
      ;
  }
}