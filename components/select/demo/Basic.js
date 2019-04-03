import React from 'react';
import { Select } from '../../index';
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default class Basic extends React.Component{
  render() {
    return (
      <div>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} allowClear disabled>
          <Option value="lucy">Lucy</Option>
        </Select>
      </div>
    );
  }
}