/* *************************
 * @author: FengYan
 * @update: 20180206
 * @description:公司信息
 * ************************/

/* ***********  基础组件  ************ */
import React, {Component} from 'react';
import {Icon} from 'jdcloudui';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

/* ***********  自定义组件  ************ */
import getCompanyList, {getCompanyListAction} from './companyList_redux';
import Cookies from '../../../common/Cookies';
const cookie = new Cookies();
/* ***********  redux  ************ */
@connect(
  state => (getCompanyList),
  dispatch => bindActionCreators({getCompanyListAction}, dispatch)
)
export default class CompanyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyArr: [],
      companyName: '请选择'
    };
  }

  /*
   * 发送获取公司列表请求
   * 判断cookie中是否有companyId，如果没有则调用defaultCompanyId方法设置
   * 如果公司列表为空则跳转到注册公司引导页
   * */
  componentWillMount() {
    this.props.getCompanyListAction().then(rs => {
      if (rs.code != 0) return;
      if (rs.data.length === 0) {
        location.href = `//${this.props.buyer}/user-buyer-view/accountmanage/addcompany?type=1`;
      } else if (!cookie.get('companyId')) {
        this.defaultCompanyId(rs.data[0]);
      }else{
        rs.data.map(_item=>{
          if (_item.companyId == cookie.get('companyId')) {
            this.setState({companyName:_item.companyName});
          }
        });
        this.setState({companyArr: rs.data});
      }
    });
  }

  /*
   * 通过onclick事件添加companyId到cookie中
   * */
  setCompanyId({companyId}) {
    cookie.set('companyId', companyId, '', this.props.defaultDomain);
  }

  /*
   * 设置默认cookie
   * 跳转到获取菜单中间页
   * */
  defaultCompanyId({companyId}) {
    cookie.set('companyId', companyId, '', this.props.defaultDomain);
    if (this.props.disabled) {
      location.href = `//${this.props.buyer}/user-buyer-view/defaultbuyermenu`;
    }
  }

  /*
   * 渲染公司列表
   * */
  renderOptions() {
    const companyArr = [];
    this.state.companyArr.map(_item => {
      companyArr.push(
        <li key={_item.companyId}>
          <a
            onClick={() => this.setCompanyId({companyId: _item.companyId})}
            href={`//${this.props.buyer}/user-buyer-view/defaultbuyermenu`}
            className={cookie.get('companyId') == _item.companyId ? 'active' : ''}
            title={_item.companyName}
          >
            {_item.companyName || '未命名'}
          </a>
        </li>
      );
    });
    return companyArr;
  }

  render() {
    return (
      <div className="down-menu f-ib deg180">
        <a>{this.state.companyName}<Icon type="down" className="ml5 arrows"/></a>
        <ul className="down-menu-cont select width380">
          {this.renderOptions()}
        </ul>
      </div>
    );
  }
}