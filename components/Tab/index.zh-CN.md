# Tab 标签页

选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

使用场景参考Ant Design的组件 - Tabs(https://ant.design/components/tabs-cn/)

- UCP统一样式。

## API

### Tab

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 标签页外层样式 | string | 无 |
| tabClass | 标签样式 | string | 无 |
| tabs | 标签名称 | string[] | 无 |
| active | 当前标签idx | number | 0 |
| onChange | 切换标签的回调 | Function(index) {} | 无 |
| render | 生成渲染函数，参数分别为标签名称，标签索引 | Function(tabName, index) {} | 无 |
