/**
 * Created by huangxiao3 on 2017/6/8.
 */
import React,{Component} from 'react';
import {Icon} from 'jdcloudui';
import './styles.css';
import ApiClient from '../../apiClient/ApiClient';
export default class Customer extends Component {
  constructor(props, content) {
    super(props, content);
    this.state = {scrollTop: 0, feedbackUrl: ''};
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
    document.addEventListener('scroll', ()=>this.onChange(), true);
  }
  toTop() {
    document.body.scrollTop = 0;
  }
  onChange() {
    this.setState({scrollTop: document.body.scrollTop});
  }
  handleCreateShangQiao() {
    let defaultUrl = 'http://p.qiao.baidu.com/cps/chat?siteId=10819178&userId=23978973';
    var iWidth = 580;
    var iHeight = 510;
    var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
    let sqUrl = this.props.SqCode?this.props.SqCode:defaultUrl;
    // 去hnc 暂时拦截
    window.open (defaultUrl, "shangqiao", `height=510, width=580, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, top=${iTop},left=${iLeft}`);
  }

  render() {
    return (
      <div className="rightBox">
        <div onClick={()=>this.handleCreateShangQiao()} className="custo">
          <span className="tb">
            <Icon type="new-service" />
          </span>
          <span className="wenzi">在线客服</span>
        </div>
        <div className="toTop" style={this.state.scrollTop == 0 ? {display: 'none'} : {display: ''}}>
          <span className="top" onClick={()=>this.toTop()}>
            <Icon type="arrow-up" />
          </span>
        </div>
        <div className="feedback">
          <a href={this.state.feedbackUrl} target="_blank">
            <span className="tb">
              <Icon type="new-feedback" />
            </span>
            <span className="wenzi">反馈</span>
          </a>
        </div>
      </div>
    );
  }
}
