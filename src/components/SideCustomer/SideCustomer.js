/**
 * Created by fanwb on 2018/6/22.
 */
import React,{Component} from 'react';
import {Icon,message} from 'jdcloudui';
import './style/common.css';
import ApiClient from '../../apiClient/ApiClient';
export default class SideCustomer extends Component {
  constructor(props, content) {
    super(props, content);
    this.state = {
        scrollTop: 0,
        feedbackUrl: '',
        customUrl:'',

    };
  }
  componentWillMount() {
    var client = new ApiClient();
    client.get('/passport/logout')
      .then(
        (res) => {
          if(res.code == 0 && res.data) {
            res.data.map(_item => {
              if (_item.domainType == 1) {
                let feedbackUrl = `http://${_item.domain}/website-view/user-feedback`;
                this.setState({feedbackUrl: feedbackUrl});
              }
            });
          }
        },
        (err) => {
        }
      );
  }

  componentDidMount() {
    var client = new ApiClient();
    document.addEventListener('scroll', ()=>this.onChange(), true);
    let pathname =(window.location.pathname).trim();
      //获取平台当前启用客服，提示无启用客服
      client.get('/platform/shop/custom/queryCustomConfigBySiteUrl',{params:{customType: 1,siteUrl:pathname}}).then((res)=>{
        if(res.code == 0&&res.data){
          this.setState({
              customUrl:res.data.customUrl
            });
        }else{
            // message.warning('该站点没有设置客服，请到运营后台设置对应的客服连接！');
        }
      },(err)=>{})
  }
  toTop() {
    document.body.scrollTop = 0;
  }
  onChange() {
    this.setState({scrollTop: document.body.scrollTop});
  }
  handleCreateShangQiao=()=> {
    if(!this.state.customUrl){
      message.warning('该站点没有设置客服，请到运营后台设置对应的客服连接！');
    }else{
      var iWidth = 580;
      var iHeight = 510;
      var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
      var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
      window.open (this.state.customUrl, "shangqiao", `height=510, width=580, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, top=${iTop},left=${iLeft}`);
    }
  }

  render() {
    return (

        <div className="box-fixedbar">
            <div className="m-fixedbar">
                <div className="fixedbar-bd">
                    <div className="fixedbar-item">
                        <a className="sidecart" href="/website-view/cart" target="_blank">
                            <span className="goods-num"></span>
                            <i className="iconfont">&#xe7ea;</i>
                            <span className="fixedbar-text">进货车</span>
                        </a>
                    </div>
                    <div className="fixedbar-item js-qrcode">
                        <a href="javascript:;"><i className="iconfont">&#xe6dd;</i><span className="fixedbar-text">扫码优惠</span></a>
                        { /* <!-- 二维码弹层 -->
        {% if qrcode.code == 0 && qrcode.data && qrcode.data.weixinDisplay ==1 || qrcode.code == 0 && qrcode.data && qrcode.data.appDownDisplay ==1 %}
        {% set qrcodeurl = qrcode.data %}
        <div className="hnc-mobile-pop hnc-mobile-pop-right">
                <span className="arrow-rig">
                    <span className="right"></span>
                </span>
          {% if qrcodeurl.weixinDisplay == 1 %}
          <div className="mobile-pop-item f-cb item-wx">
            <div className="mobile_pop_qrcode">
              <img src="{{qrcodeurl.weixinCodeUrl}}" width="80" height="80">
            </div>
            <div className="mobile_pop_info">
              <p>微信扫一扫</p>
              <p>关注华南城网</p>
              <p>微信商城</p>
            </div>
          </div>
          {% endif %}
          {% if qrcodeurl.appDownDisplay == 1 %}
          <div className="mobile-pop-item f-cb">
            <div className="mobile_pop_qrcode">
              <img src="{{qrcodeurl.appDownCodeUrl}}" width="80" height="80">
            </div>
            <div className="mobile_pop_info">
              <p>扫描二维码</p>
              <p>立即下载APP</p>
            </div>
          </div>
          {% endif %}
        </div>
      {% endif %}*/}
                    </div>
                    <div className="fixedbar-item js-kefu-item" id="box-js-kefu-item" onClick={this.handleCreateShangQiao}>
                        <a href="javascript:;" target="_blank"><i className="iconfont">&#xe7ed;</i><span className="fixedbar-text" >联系客服</span></a>
                    </div>
                    <div className="fixedbar-show">
                        <div className="fixedbar-item">
                            <a href="javascript:;"><i className="iconfont">&#xe7ec;</i><span className="fixedbar-text">商品对比</span></a>
                        </div>
                    </div>
                    <div className="fixedbar-item">
                        <a href={this.state.feedbackUrl} target="_blank"><i className="iconfont">&#xe7eb;</i><span className="fixedbar-text">反馈</span></a>
                    </div>
                </div>
                <div className="fixedbar-ft">
                    <div className="fixedbar-item fixedbar-gotop">
                        <a href="#"><i className="iconfont">&#xe62f;</i></a>
                    </div>
                </div>
            </div>
        </div>


    );
  }
}
