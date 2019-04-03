// ---
// order: 2
// title:
//     zh-CN: 前置/后置标签
//     en-US: Pre / Post tab
// ---
//
// ## zh-CN
//
// 用于配置一些固定组合。
//
// ## en-US
//
// Using pre & post tabs example.
//
// ````jsx

import React from 'react';
import { Input, Select, Icon } from '../../index';
const Option = Select.Option;

const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 90 }}>
    <Option value="Http://">Http://</Option>
    <Option value="Https://">Https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" style={{ width: 80 }}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

export default class Addon extends React.Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input addonAfter={<Icon type="setting" />} defaultValue="mysite" />
        </div>
      </div>
    );
  }
}
