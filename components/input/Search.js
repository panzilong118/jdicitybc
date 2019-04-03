import * as React from 'react';
import classNames from 'classnames';
import Input from './Input';
// eslint校验提示变量没有被使用，暂时注释掉
// import { InputProps } from './Input';
import Icon from '../icon';
import Button from '../button';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.input = {};
    }

    static defaultProps = {
        inputPrefixCls: 'jc-input',
        prefixCls: 'jc-input-search',
        enterButton: false,
    };

    onSearch = () => {
        const { onSearch } = this.props;
        if (onSearch) {
            onSearch(this.input.input.value);
        }
        this.input.focus();
    }

    focus() {
        this.input.focus();
    }

    blur() {
        this.input.blur();
    }

    saveInput = (node) => {
        this.input = node;
    }

    getButtonOrIcon() {
        const { enterButton, prefixCls, size } = this.props;
        if (!enterButton) {
            return <Icon className={`${prefixCls}-icon`} type='search' key='searchIcon' />;
        }
        const enterButtonAsElement = enterButton;
        if (enterButtonAsElement.type === Button || enterButtonAsElement.type === 'button') {
            return React.cloneElement(enterButtonAsElement, enterButtonAsElement.type === Button ? {
                className: `${prefixCls}-button`,
                size,
                onClick: this.onSearch,
            } : {
                onClick: this.onSearch,
            });
        }
        return (
            <Button
                className={`${prefixCls}-button`}
                type='primary'
                size={size}
                onClick={this.onSearch}
                key='enterButton'
            >
                {enterButton === true ? <Icon type='search' /> : enterButton}
            </Button>
        );
    }

    render() {
        const { className, prefixCls, inputPrefixCls, size, suffix, enterButton, ...others } = this.props;
        delete others.onSearch;
        const buttonOrIcon = this.getButtonOrIcon();
        const searchSuffix = suffix ? [suffix, buttonOrIcon] : buttonOrIcon;
        const inputClassName = classNames(prefixCls, className, {
            [`${prefixCls}-enter-button`]: !!enterButton,
            [`${prefixCls}-${size}`]: !!size,
        });
        return (
            <Input
                onPressEnter={this.onSearch}
                {...others}
                size={size}
                className={inputClassName}
                prefixCls={inputPrefixCls}
                suffix={searchSuffix}
                ref={this.saveInput}
            />
        );
    }
}
