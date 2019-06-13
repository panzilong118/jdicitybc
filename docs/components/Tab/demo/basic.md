# 基本

默认选中第一项。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Tab } from '../components';

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
