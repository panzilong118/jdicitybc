// ---
// order: 1
// title:
//   zh-CN: 带搜索框
//   en-US: Search
// ---
//
// ## zh-CN
//
// 带搜索框的穿梭框，可以自定义搜索函数。
//
// ## en-US
//
// Transfer with a search box.
//
// ````jsx
import React from 'react';
import { Transfer } from '../../index';

export default class Search extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  }
  componentDidMount() {
    this.getMock();
  }
  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  }
  filterOption = (inputValue, option) => {
    return option.description.indexOf(inputValue) > -1;
  }
  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  }
  render() {
    return (
      <Transfer
        dataSource={this.state.mockData}
        showSearch
        filterOption={this.filterOption}
        targetKeys={this.state.targetKeys}
        onChange={this.handleChange}
        render={item => item.title}
      />
    );
  }
}
