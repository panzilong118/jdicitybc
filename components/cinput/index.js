import React, { Component } from 'react';
import { Input } from 'antd';

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
      <div className="sectionInput" key={index}>
        <div className="inputName">{item.inputBoxDetail.name}</div>
        <div>
          <Input
            className="inputStyle"
            value={item.inputBoxDetail.value}
            onChange={(e) => this.onInputChange(e, index)}
          />
        </div>
      </div>
    );
  }
}

export default Cinput;
