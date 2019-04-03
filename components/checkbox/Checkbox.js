/**
 * @file 二次封装rc-checkbox
 * @author chenyanhua
 * @version 3.4.0
 */
import * as React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import RcCheckbox from 'rc-checkbox';

import shallowEqual from 'shallowequal';

export default class Checkbox extends React.Component {
    static defaultProps = {
        prefixCls: 'jc-checkbox',
        indeterminate: false,
        className: '',
        ghost: false
    };
    static propTypes = {
        prefixCls: PropTypes.string,
        indeterminate: PropTypes.bool,
        autoFocus: PropTypes.bool,
        checked: PropTypes.bool,
        indeterminate: PropTypes.bool,
        onChange: PropTypes.func,
        style: PropTypes.object,
        className: PropTypes.string,
        ghost: PropTypes.bool
    };
    /**
     * 父组件传递的checkbox组数据
     */
    static contextTypes = {
        checkboxGroup: PropTypes.any
    };

    constructor(props) {
        super(props);
        this.rcCheckbox = undefined;
    }
    /**
     * 浅比较，是否进行更新
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState) || !shallowEqual(this.context.checkboxGroup, nextContext.checkboxGroup);
    }
    /**
     * rc-checkbox 聚焦
     */
    focus = () => {
        this.rcCheckbox.focus();
    }
    /**
     * rc-checkbox 失焦
     */
    blur = () => {
        this.rcCheckbox.blur();
    }
    /**
     * 获取当前DOM元素
     */
    saveCheckbox = (node) => {
        this.rcCheckbox = node;
    }
    render() {
        const { props, context } = this;
        const { prefixCls, className, children, indeterminate, style, onMouseEnter, onMouseLeave, ghost, ...restProps } = props;
        const { checkboxGroup } = context;
        const checkboxProps = { ...restProps };
        if (checkboxGroup) {
            checkboxProps.onChange = () => checkboxGroup.toggleOption({ label: children, value: props.value });
            checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
            checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
        }
        const classString = classNames(className, {
            [`${prefixCls}-wrapper`]: true,
        });
        const checkboxClass = classNames({
            [`${prefixCls}-ghost`]: ghost,
            [`${prefixCls}-indeterminate`]: indeterminate
        });
        return (
            <label
                className={classString}
                style={style}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <RcCheckbox
                    {...checkboxProps}
                    prefixCls={prefixCls}
                    className={checkboxClass}
                    ref={this.saveCheckbox}
                />
                {children !== undefined ? <span>{children}</span> : null}
            </label>
        );
    }
}
