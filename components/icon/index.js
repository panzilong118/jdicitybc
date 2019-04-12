/**
 * @file icon
 * @author chenyanhua
 * @version: 3.2.3
 */
import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

function Icon(props) {
    const { prefixCls, type, spin, className, ...others } = props;
    // 组合样式
    const classNameStr = classNames(`${prefixCls} ${prefixCls}-${type} `, {
        [`${prefixCls}-spin`]: spin || type.indexOf('loading') >= 0
    }, className);
    return <i className={classNameStr} {...others} />;
}

Icon.defaultProps = {
    prefixCls: 'jcicon',
    spin: false,
    className: '',
    style: {}
};

Icon.propTypes = {
    prefixCls: PropTypes.string, // class前缀
    type: PropTypes.string.isRequired,
    spin: PropTypes.bool, // 动画效果
    style: PropTypes.object, // 内联样式
    className: PropTypes.string
};

export default Icon;
