/* *************************
 * @author: FengYan
 * @update: 20180206
 * @description:选择收货地
 * ************************/

/* ***********  基础组件  ************ */
import React, {Component} from 'react';
import {Icon, Modal} from 'jdcloudui';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

/* ***********  自定义组件  ************ */
import getCitys, {getCitysAction} from './citys_redux';
import Cookies from '../../../common/Cookies';
const cookie = new Cookies();

/* ***********  redux  ************ */
@connect(
  state => (getCitys),
  dispatch => bindActionCreators({getCitysAction}, dispatch)
)

export default class ChooseLocal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityArr: [],
      disabled: false,
      areaName: '请选择',
      visible: true
    };
  }

  /*
   * 发送获取地市列表讲求
   * 根据cookie中是否有areaName控制地域选择弹框
   * */
  componentWillMount() {
    this.props.getCitysAction().then(rs => {
      if (rs.code != 0) return;
      this.setState({cityArr: rs.data});
    });
    if (cookie.get('areaName')) {
      this.setState({
        areaName: decodeURI(cookie.get('areaName')),
        visible: false
      });
    }
  }

  /*
   * 设置areaId和areaName到cookie中
   * setTimeout方法控制地域选择下拉列表
   * */
  setCookie(code, name) {
    cookie.set('areaId', code, '', this.props.defaultDomain);
    cookie.set('areaName', encodeURI(name), '', this.props.defaultDomain);
    this.setState({disabled: true, areaName: name, visible: false});
    setTimeout(_ => this.setState({disabled: false}), 100);
  }

  /*
   * 渲染地市列表
   * */
  renderCity(citys) {
    // 一级地市列表渲染
    const areaId = cookie.get('areaId') || '';
    const cityArr = [];
    citys.map(_city => {
      cityArr.push(
        <li key={_city.id}>
          <span
            onClick={() => this.setCookie(_city.code, _city.name)}
            className={areaId === _city.code ? 'active' : ''}
          >
            {_city.name}{this.state.ab}
          </span>
        </li>);
    });
    return cityArr;
  }

  render() {
    return (
      <div className="f-ib">
        <Modal
          visible={this.state.visible}
          title="请选择你的收货地区"
          footer={null}
          closable={false}
        >
          <div className="unChooseLocal">
            <ul>
              {this.renderCity(this.state.cityArr)}
            </ul>
          </div>
        </Modal>
        <div className="down-menu">
          <a><Icon type="new-gps f-fl f-fs26 mt2 active-text"/>{this.state.areaName}</a>
          {!this.state.disabled && (
            <ul className="down-menu-cont localCont">
              {this.renderCity(this.state.cityArr)}
            </ul>
          )}
        </div>
      </div>
    );
  }
}