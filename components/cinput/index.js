import * as React from 'react';
import { Input } from 'antd';
import Blue from './blue';
import './style/index.less';
import './style/red.less';
import './style/test.less';

export default class Cinput extends React.Component {
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
        <div className="yellow">yellow</div>
        <div className="green">green</div>
        <div>
          <Input
            className="inputStyle"
            value={item.inputBoxDetail.value}
            onChange={(e) => this.onInputChange(e, index)}
          />
        </div>
        <Blue />
      </div>
    );
  }
}
