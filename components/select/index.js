/**
 * Created by gaoqingli on 2018/3/30.
 */
import * as React from 'react';

import PropTypes from 'prop-types';

import RcSelect, { Option, OptGroup } from 'rc-select';

import classNames from 'classnames';

import LocaleReceiver from '../locale-provider/LocaleReceiver';

import defaultLocale from '../locale-provider/default';

export default class Select extends React.Component {
    // static rcSelect;
    static Option = Option;
    static OptGroup = OptGroup;

    constructor(props) {
        super(props);
        this.rcSelect = undefined;
    }

    getNotFoundContent(locale) {
        const { notFoundContent, mode } = this.props;
        const isCombobox = mode === 'combobox';
        if (isCombobox) {
            return notFoundContent === undefined ? null : notFoundContent;
        }
        return notFoundContent === undefined ? locale.notFoundContent : notFoundContent;
    }
    focus() {
        this.rcSelect.focus();
    }
    blur() {
        this.rcSelect.blur();
    }

    saveSelect = (node) => {
        this.rcSelect = node;
    }
    renderSelect = (locale) => {
        const {
            prefixCls,
            className = '',
            size,
            mode,
            ...restProps
        } = this.props;
        const cls = classNames(className, {
            [`${prefixCls}-lg`]: size === 'large',
            [`${prefixCls}-sm`]: size === 'small',
        });
        let { optionLabelProp } = this.props;
        const isCombobox = mode === 'combobox';
        if (isCombobox) {
            // children 带 dom 结构时，无法填入输入框
            optionLabelProp = optionLabelProp || 'value';
        }
        const modeConfig = {
            multiple: mode === 'multiple',
            tags: mode === 'tags',
            combobox: isCombobox,
        };
        return (
            <RcSelect
                {...restProps}
                {...modeConfig}
                prefixCls={prefixCls}
                className={cls}
                optionLabelProp={optionLabelProp || 'children'}
                notFoundContent={this.getNotFoundContent(locale)}
                ref={this.saveSelect}
            />
        );
    }
    render() {
        return (
            <LocaleReceiver
                componentName='Select'
                defaultLocale={defaultLocale.Select}
            >
                {this.renderSelect}
            </LocaleReceiver>
        );
    }
}
// 默认状态
Select.defaultProps = {
    prefixCls: 'jc-select',
    showSearch: false,
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
};
// 参数类型校验
Select.propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.oneOf(['large', 'default', 'small']),
    combobox: PropTypes.bool,
    notFoundContent: PropTypes.any,
    showSearch: PropTypes.bool,
    optionLabelProp: PropTypes.string,
    transitionName: PropTypes.string,
    choiceTransitionName: PropTypes.string,
};
