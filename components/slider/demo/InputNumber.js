// ---
// order: 1
// title:
//   zh-CN: 带输入框的滑块
//   en-US: Slider with InputNumber
// ---

// ## zh-CN

// 和 [数字输入框](/components/input-number/) 组件保持同步。

// ## en-US

// Synchronize with [InputNumber](/components/input-number/) component.

// ````jsx
import * as React from 'react';

import { Slider, InputNumber, Row, Col } from '../../index';

class IntegerStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 1
        }
    }
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }
  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

class DecimalStep extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            inputValue: 0
        }
    }
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }
  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={0} max={1} onChange={this.onChange} value={this.state.inputValue} step={0.01} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={1}
            style={{ marginLeft: 16 }}
            step={0.01}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}
export default function() {
  return (
    <div>
      <IntegerStep />
      <DecimalStep />
    </div>
  );
}
// ReactDOM.render(
//   <div>
//     <IntegerStep />
//     <DecimalStep />
//   </div>
// , mountNode);
// ````
