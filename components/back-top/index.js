import * as React from 'react';

import PropTypes from 'prop-types';

import Animate from 'rc-animate';

import addEventListener from 'rc-util/lib/Dom/addEventListener';

import classNames from 'classnames';

import omit from 'omit.js';

import getScroll from '../_util/getScroll';

import getRequestAnimationFrame from '../_util/getRequestAnimationFrame';

const reqAnimFrame = getRequestAnimationFrame();

const easeInOutCubic = (t, b, c, d) => {
    const cc = c - b;
    t /= d / 2;
    if (t < 1) {
        return cc / 2 * t * t * t + b;
    } else {
        return cc / 2 * ((t -= 2) * t * t + 2) + b;
    }
};

function noop() { }

function getDefaultTarget() {
    return window;
}

export const BackTopProps = {
    visibilityHeight: PropTypes.number, // 滚动高度达到此参数值才出现 BackTop
    onClick: PropTypes.func, // 点击按钮的回调函数
    target: PropTypes.any, // 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数,即说明：可以设置div等元素作为滚动框
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default class BackTop extends React.Component {
    static defaultProps = {
        visibilityHeight: 400,
        style: {},
        className: ''
    };
    static propTypes = { ...BackTopProps };

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.scrollEvent = undefined;
    }

    /**
     * 获取当前的ScrollTop值
     */
    getCurrentScrollTop = () => {
        const getTarget = this.props.target || getDefaultTarget;
        const targetNode = getTarget();
        if (targetNode === window) {
            return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        }
        return targetNode.scrollTop;
    }

    /**
     * 滚动到顶部，有动画效果
     */
    scrollToTop = (e) => {
        const scrollTop = this.getCurrentScrollTop();
        const startTime = Date.now();
        const frameFunc = () => {
            const timestamp = Date.now();
            const time = timestamp - startTime;
            this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
        };
        reqAnimFrame(frameFunc);
        (this.props.onClick || noop)(e);
    }

    /**
     * 滚动到指定位置
     * @param {*滚动距离} value 
     */
    setScrollTop(value) {
        const getTarget = this.props.target || getDefaultTarget;
        const targetNode = getTarget();
        if (targetNode === window) {
            document.body.scrollTop = value;
            document.documentElement.scrollTop = value;
        } else {
            targetNode.scrollTop = value;
        }
    }

    /**
     * 处理Backtop的显示或隐藏
     */
    handleScroll = () => {
        const { visibilityHeight, target = getDefaultTarget } = this.props;
        const scrollTop = getScroll(target(), true);
        this.setState({
            visible: scrollTop > visibilityHeight
        });
    }

    componentDidMount() {
        // 获取BackTop处理的目标元素，可是Widow，也可以是divD等元素
        const getTarget = this.props.target || getDefaultTarget;
        // 绑定滚动监听事件
        this.scrollEvent = addEventListener(getTarget(), 'scroll', this.handleScroll);
        // 处理滚动事件
        this.handleScroll();
    }

    /**
     * 移除滚动监听事件
     */
    componentWillUnmount() {
        if (this.scrollEvent) {
            this.scrollEvent.remove();
        }
    }

    render() {
        const { prefixCls = 'jc-back-top', className = '', children, right, bottom } = this.props;
        let { style = {} } = this.props;
        if (right && !style.right) {
            style.right = right;
        }
         if (bottom && !style.bottom) {
            style.bottom = bottom;
        }
        const classString = classNames(prefixCls, className);

        const defaultElement = (
            <div className={`${prefixCls}-content`}>
                <div className={`${prefixCls}-icon`} />
            </div>
        );

        // fix https://fb.me/react-unknown-prop
        const divProps = omit(this.props, [
            'style',
            'right',
            'bottom',
            'prefixCls',
            'className',
            'children',
            'visibilityHeight',
            'target',
        ]);

        const backTopBtn = this.state.visible ? (
            <div {...divProps} style={style} className={classString} onClick={this.scrollToTop}>
                {children || defaultElement}
            </div>
        ) : null;

        return (
            <Animate component="" transitionName="fade">
                {backTopBtn}
            </Animate>
        );
    }
}
