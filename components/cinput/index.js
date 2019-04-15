import * as React from 'react';
import { Input } from 'antd';
import './style/index.less';

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
      <div className="jdic-sectioninput" key={index}>
        <div className="jdic-inputname">{item.inputBoxDetail.name}</div>
        <div>
          <Input
            className="jdic-inputstyle"
            value={item.inputBoxDetail.value}
            onChange={(e) => this.onInputChange(e, index)}
          />
        </div>
      </div>
    );
  }
}
