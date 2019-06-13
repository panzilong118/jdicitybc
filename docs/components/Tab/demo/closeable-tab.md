# 关闭页签

支持关闭关闭选项。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Icon
} from 'antd';
import { Tab } from '../components';
import { stopPropagation } from '../components/util/domEvent';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ['脚本', '模版'],
      tabActive: 0,
    };
  }

  handleTabChange = (key) => {
    this.setState({
      tabActive: key,
    });
  }

  confirmDelete = (idx) => {
    console.log(idx, '<---idx');
  }


  render() {
    const {
      tabs,
      tabActive,
    } = this.state;
    return (
      <div>
        <Tab
          tabs={tabs}
          active={tabActive}
          onChange={(key) => this.handleTabChange(key)}
          render={(tab, idx) => (
            <span>
              {tab}
              <Icon
                type="close"
                onClick={stopPropagation(this.confirmDelete, idx)}
              >
              </Icon>
            </span>
          )}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('app')
);
```
