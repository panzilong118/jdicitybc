/* *************************
 * @author: FengYan
 * @update: 20180206
 * @description:首页链接跳转
 * ************************/

/* ***********  基础组件  ************ */
import React, {Component} from 'react';

/* ***********  自定义组件  ************ */
export default class IndexLinkBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={`//${this.props.defaultDomain}`} className="signName company-a">首页</a>
    );
  }
}