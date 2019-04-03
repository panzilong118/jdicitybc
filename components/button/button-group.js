/**
 * Created by gaoqingli on 2018/3/23.
 */
import * as React from 'react';

import classNames from 'classnames';

// import { ButtonSize } from './button';

const ButtonGroup = (props) => {
    const { prefixCls = 'jc-btn-group', size, className, ...others } = props;
    // large => lg  small => sm
    let sizeCls = ' ';
    switch (size) {
    case 'large':
        sizeCls = 'lg';
        break;
    case 'small':
        sizeCls = 'sm';
        break;
    default:
        sizeCls = '';
        break;
    }
    const classes = classNames(prefixCls, {
        [`$[prefixCls]-${sizeCls}`]: sizeCls,
    }, className);
    return <div {...others} className={classes} />;
};
export default ButtonGroup;
