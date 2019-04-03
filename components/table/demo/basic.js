// ---
// order: 0
// title:
//   en-US: Basic Usage
//   zh-CN: 基本用法
// ---

// ## zh-CN

// 简单的表格，最后一列是各种操作。

// ## en-US

// Simple table with actions.

// ````jsx
import React from 'react';
import { Table, Icon } from '../../index';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Action 一 {record.name}</a>
       | 
      <a href="javascript:;">Delete</a>
       | 
      <a href="javascript:;" className="jc-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

export default function Demo() {
  return <Table columns={columns} dataSource={data} />;
}

// ReactDOM.render(, mountNode);
// ````
