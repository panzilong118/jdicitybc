// ---
// order: 3
// title:
//   zh-CN: 不区分大小写
//   en-US: Non-case-sensitive AutoComplete
// ---
//
// ## zh-CN
//
// 不区分大小写的 AutoComplete
//
// ## en-US
//
// A non-case-sensitive AutoComplete
//
// ````jsx

import React from 'react';
import { AutoComplete } from '../../index';

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

export default function NonCaseSensitive() {
  return (
    <AutoComplete
      style={{ width: 200 }}
      dataSource={dataSource}
      placeholder="try to type `b`"
      filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    />
  );
}
