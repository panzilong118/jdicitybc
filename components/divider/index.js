import * as React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

export default function Divider({
    prefixCls = 'jc',
    type = 'horizontal',
    orientation = '',
    className,
    children,
    dashed,
    ...restProps
}) {
    const orientationPrefix = (orientation.length > 0) ? `-${orientation}` : orientation;
    const classString = classNames(className, `${prefixCls}-divider`, `${prefixCls}-divider-${type}`, {
        [`${prefixCls}-divider-with-text${orientationPrefix}`]: children,
        [`${prefixCls}-divider-dashed`]: !!dashed
    });
    return (
        <div className={classString} {...restProps}>
            {children && <span className={`${prefixCls}-divider-inner-text`}>{children}</span>}
        </div>
    );
}
Divider.propTypes = {
    prefixCls: PropTypes.string,
    type: PropTypes.oneOf(['horizontal', 'vertical']),
    orientation: PropTypes.oneOf(['left', 'right']),
    className: PropTypes.string,
    children: PropTypes.node,
    dashed: PropTypes.bool,
    style: PropTypes.object
};
