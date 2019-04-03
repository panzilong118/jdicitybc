/**
 * Created by gaoqingli on 2018/3/19.
 */
import * as React from 'react';

import { findDOMNode } from 'react-dom';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import omit from 'omit.js';

import Icon from '../icon';

import Group from './button-group';


const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isSring(str) {
    return typeof str === 'string';
}

function insertSpace(child, needInserted) {
    if (child == null) {
        return null;
    }
    const SPACE = needInserted ? ' ' : '';
    if (typeof child !== 'string' && typeof child !== 'number' && isSring(child.type) && isTwoCNChar(child.props.children)) {
        return React.cloneElement(child, {}, child.props.children.split('').join(SPACE));
    }
    if (typeof child === 'string') {
        if (isTwoCNChar(child)) {
            child = child.split('').join(SPACE);
        }
        return <span>{child}</span>;
    }
    return child;
}

// 创建Button组件
export default class Button extends React.Component {
 static Group;
 static __JC_BUTTON = true;
 static timeout;
 static delayTimeout;

 constructor(props) {
     super(props);
     this.state = {
         loading: props.loading,
         clicked: false,
         hasTwoCNChar: false,
     };
 }

 componentDidMount() {
     // Fix for HOC usage like <FormatMessage />
     const buttonText = (findDOMNode(this)).innerText;
     if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
         this.setState({
             hasTwoCNChar: true,
         });
     }
 }
 componentWillReceiveProps(nextProps) {
     const currentLoading = this.props.loading;
     const { loading } = nextProps;

     if (currentLoading) {
         clearTimeout(this.delayTimeout);
     }

     if (typeof loading !== 'boolean' && loading && loading.delay) {
         this.delayTimeout = window.setTimeout(() => this.setState({ loading }), loading.delay);
     } else {
         this.setState({ loading });
     }
 }
 componentWillUnmount() {
     if (this.timeout) {
         clearTimeout(this.timeout);
     }
     if (this.delayTimeout) {
         clearTimeout(this.delayTimeout);
     }
 }
 handleClick = (e) => {
     this.setState({ clicked: true });
     clearTimeout(this.timeout);
     this.timeout = window.setTimeout(() => this.setState({ clicked: false }), 500);

     const { onClick } = this.props;
     if (onClick) {
         onClick(e);
     }
 }

 isNeedInserted() {
     const { loading, icon, children } = this.props;
     const iconType = loading ? 'loading' : icon;
     return React.Children.count(children) === 1 && (!iconType || iconType === 'loading');
 }
 render() {
     const { type, shape, size, className, htmlType, children, icon, prefixCls, ghost, ...others } = this.props;
     const { loading, clicked, hasTwoCNChar } = this.state;

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
     const ComponentProp = others.herf ? 'a' : 'button';
     const classes = classNames(prefixCls, className, {
         [`${prefixCls}-${type}`]: type,
         [`${prefixCls}-${shape}`]: shape,
         [`${prefixCls}-${sizeCls}`]: sizeCls,
         [`${prefixCls}-icon-only`]: !children && icon,
         [`${prefixCls}-loading`]: loading,
         [`${prefixCls}-clicked`]: clicked,
         [`${prefixCls}-background-ghost`]: ghost,
         [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar,
     });
     const iconType = loading ? 'loading' : icon;
     const iconNode = iconType ? <Icon type={iconType} /> : null;
     const kids = (children || children === 0) ? React.Children.map(children, child => insertSpace(child, this.isNeedInserted())) : null;


     return (
         <ComponentProp
             {...omit(others, ['loading'])}
             type={others.herf ? '' : (htmlType || 'button')}
             className={classes}
             onClick={this.handleClick}
         >
             {iconNode}{kids}
         </ComponentProp>
     );
 }
}

// 默认状态
Button.defaultProps = {
    prefixCls: 'jc-btn',
    loading: false,
    ghost: false,
};
// 参数类型校验
Button.propTypes = {
    ghost: PropTypes.bool,
    prefixCls: PropTypes.string,
    type: PropTypes.string,
    shape: PropTypes.oneOf(['circle', 'circle-outline']),
    size: PropTypes.oneOf(['large', 'default', 'small']),
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: PropTypes.func,
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    className: PropTypes.string,
    icon: PropTypes.string,
};

Button.Group = Group;
