import * as React from 'react';
import classNames from 'classnames';
import RcInputNumber from 'rc-input-number';

export default class InputNumber extends React.Component {
    constructor(props){
        super(props);
    }
    focus() {
        this.inputNumberRef.focus();
    }

    blur() {
        this.inputNumberRef.blur();
    }
    render() {
        const { className, size, ...others } = this.props;
        const inputNumberClass = classNames({
            [`${this.props.prefixCls}-lg`]: size === 'large',
            [`${this.props.prefixCls}-sm`]: size === 'small',
        }, className);

        return <RcInputNumber ref={(c) => this.inputNumberRef = c} className={inputNumberClass} {...others} />;
    }
}
InputNumber.defaultProps = {
    prefixCls: 'jc-input-number',
    step: 1,
};