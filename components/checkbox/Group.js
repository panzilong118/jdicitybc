/**
 * @file checkbox封装成一组
 * @author chenyanhua
 */
import * as React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import shallowEqual from 'shallowequal';

import Checkbox from './Checkbox';

export default class CheckboxGroup extends React.Component {
    static defaultProps = {
        options: [],
        prefixCls: 'jc-checkbox-group',
        ghost: false
    };

    static propTypes = {
        prefixCls: PropTypes.string,
        defaultValue: PropTypes.array, // 默认选中的选项
        value: PropTypes.array, // 指定选中的选项
        options: PropTypes.array, // 指定可选项，数据源
        onChange: PropTypes.func,
        ghost: PropTypes.bool
    };

    static childContextTypes = {
        checkboxGroup: PropTypes.any
    };

    constructor(props) {
        super(props);
        this.state = {
            value: props.value || props.defaultValue || []
        };
    }
    /**
     * 向子组件checkbox传递当前checkbox组相关数据
     */
    getChildContext() {
        return {
            checkboxGroup: {
                ghost: this.props.ghost,
                toggleOption: this.toggleOption, // 当前操作的checkbox项目
                value: this.state.value, // checkbox组已选中数据
                disabled: this.props.disabled // 当前组的disabled，作用于当前组的所有checkbox
            }
        };
    }
    /**
     * 设置选中项
     */
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value || []
            });
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }
    /**
     * 重组数据源
     */
    getOptions() {
        const { options } = this.props;
        // https://github.com/Microsoft/TypeScript/issues/7960
        return options.map((option) => {
            if (typeof option === 'string') {
                return { label: option, value: option };
            }
            return option;
        });
    }
    /**
     * 切换当前操作项目的checked/unchecked状态
     * @param option 当前操作的checkbox选项
     */
    toggleOption = (option) => {
        const optionIndex = this.state.value.indexOf(option.value);
        const value = [...this.state.value];
        if (optionIndex === -1) {
            value.push(option.value);
        } else {
            value.splice(optionIndex, 1);
        }
        if (!('value' in this.props)) {
            this.setState({ value });
        }
        const { onChange } = this.props;
        if (onChange) {
            onChange(value);
        }
    }
    render() {
        const { prefixCls, className, style, options, ghost } = this.props;
        let { children } = this.props;
        if (options && options.length > 0) {
            // 输出每一项checkbox
            children = this.getOptions().map(option => (
                <Checkbox
                    ghost={ghost}
                    key={option.value}
                    disabled={'disabled' in option ? option.disabled : this.props.disabled}
                    value={option.value}
                    checked={this.state.value.indexOf(option.value) !== -1}
                    onChange={() => this.toggleOption(option)}
                    className={`${prefixCls}-item`}
                >
                    {option.label}
                </Checkbox>
            ));
        }

        const classString = classNames(prefixCls, className);
        return (
            <div className={classString} style={style}>
                {children}
            </div>
        );
    }
}
