/**
 * Created by huangxiao3 on 2018/1/23.
 */

import React, {Component} from 'react';
export default class CustomerRenderHtml extends Component {
  constructor(props, context) {
    super(props, context);
    this.randomId = 'customer_' + String(Math.random());
  }

  componentWillMount() {

  }
  componentDidMount() {
    // var dom = document.getElementById(this.randomId);
    // dom.innerHTML += this.props.customerHtmlStr;
    // var newScript = document.createElement('script');
    // newScript.type = 'text/javascript';
    // newScript.innerHTML = this.props.customerHtmlStr;
    // dom.appendChild(newScript);
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html:this.props.customerHtmlStr}}>
      </div>
    );
  }

}