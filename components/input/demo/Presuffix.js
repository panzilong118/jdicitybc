// ---
// order: 8
// title:
//     zh-CN: 前缀和后缀
//     en-US: prefix and suffix
// ---
//
// ## zh-CN
//
// 在输入框上添加前缀或后缀图标。
//
// ## en-US
//
// Add prefix or suffix icons inside input.
//
// ````jsx

import React from 'react';
import { Input, Icon } from '../../index';

export default class Presuffix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }
  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }
  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <Input
        placeholder="Enter your username"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
        value={userName}
        onChange={this.onChangeUserName}
        ref={node => this.userNameInput = node}
      />
    );
  }
}
