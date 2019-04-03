/* *************************
 * @author: FengYan
 * @update: 20180206
 * @description:消息
 * ************************/

/* ***********  基础组件  ************ */
import React, {Component} from 'react';

/* ***********  自定义组件  ************ */
export default class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let urlPath = '';
    if (this.props.domain) {
      urlPath = this.props.domain.indexOf('buyer.') !== -1 ? 'buyer' : 'shop';
    } else {
      urlPath = '';
    }
    return (
      <a
        href={`//${this.props.domain}/${urlPath}-view/message/message-center`}
        className="signName">消息</a>
    );
  }
}