/**
 * @file 为Header，Footer，Content提供基础组件服务
 * @author chenyanhua
 */
import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

export default function BasicComponent(props) {
    const { prefixCls, className, ...others } = props;

    // 组合样式
    const divCls = classNames(className, prefixCls);

    return <div className={divCls} {...others}>{props.children}</div>;
}

BasicComponent.defaultProps = {
    prefixCls: 'jc-layout',
    className: '',
    type: ''
};

BasicComponent.propTypes = {
    prefixCls: PropTypes.string, // class前缀
    className: PropTypes.string,
    type: PropTypes.string // 判断组件类型
};

