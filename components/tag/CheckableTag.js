import * as React from 'react';
import classNames from 'classnames';

export default class CheckableTag extends React.Component {
  handleClick = () => {
    const { checked, onChange } = this.props;
    if (onChange) {
      onChange(!checked);
    }
  }
  render() {
    const { prefixCls = 'jc-tag', className, checked, ...restProps } = this.props;
    const cls = classNames(prefixCls, {
      [`${prefixCls}-checkable`]: true,
      [`${prefixCls}-checkable-checked`]: checked,
    }, className);

    delete restProps.onChange; // TypeScript cannot check delete now.
    return <div {...restProps} className={cls} onClick={this.handleClick} />;
  }
}
