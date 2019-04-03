import React, { Component } from 'react';
import { Input } from 'antd';
// import inputLess from './style';

class CInput extends Component {
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
      <div key={index}>
        <div>
          <Input
            onChange={(e) => this.onInputChange(e, index)}
          />
        </div>
      </div>
    );
  }
}

export default CInput;
