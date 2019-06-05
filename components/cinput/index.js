import * as React from 'react';
import { Input, Button } from 'antd';
import './style/index.less';

export default class Cinput extends React.Component {
  handleValueChange(e, index) {
    const { handleValueChange, panelConfigIndex } = this.props;
    handleValueChange(e.target.value, index, panelConfigIndex);
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
            onChange={(e) => this.handleValueChange(e, index)}
          />
        </div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    );
  }
}
