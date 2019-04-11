import React, { Component } from 'react';
import { Input } from 'antd';
import inputLess from './style/index.less';

class Cinput extends Component {
  onInputChange(e, index) {
    const { handleInputChange } = this.props;
    handleInputChange(e.target.value, index);
  }

  render() {
    const {
      item,
      index,
    } = this.props;
    return (
      <div className={inputLess.sectionInput} key={index}>
        <div className={inputLess.inputName}>{item.inputBoxDetail.name}</div>
        <div className={inputLess.test}>hahaha哈哈哈哈</div>
        <div>
          <Input
            className={inputLess.inputStyle}
            value={item.inputBoxDetail.value}
            onChange={(e) => this.onInputChange(e, index)}
          />
        </div>
      </div>
    );
  }
}

export default Cinput;
