/**
 * @author: chenyanhua
 * @version: 3.4.1
 */
import * as React from 'react';

import * as ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import addEventListener from 'rc-util/lib/Dom/addEventListener';

import classNames from 'classnames';

import shallowequal from 'shallowequal';

import omit from 'omit.js';

import getScroll from '../_util/getScroll';

import { throttleByAnimationFrameDecorator } from '../_util/throttleByAnimationFrame';

function getTargetRect(target) {
    return target !== window ? target.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
}

function getOffset(element, target) {
    const elemRect = element.getBoundingClientRect();
    const targetRect = getTargetRect(target);

    const scrollTop = getScroll(target, true);
    const scrollLeft = getScroll(target, false);

    const docElem = window.document.body;
    const clientTop = docElem.clientTop || 0;
    const clientLeft = docElem.clientLeft || 0;

    return {
        top: elemRect.top - targetRect.top + scrollTop - clientTop,
        left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
        width: elemRect.width,
        height: elemRect.height
    };
}

function noop() {}

function getDefaultTarget() {
    return typeof window !== 'undefined' ? window : null;
}

// Affix
export const AffixProps = {
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop: PropTypes.number,
    offset: PropTypes.number,
    /** 距离窗口底部达到指定偏移量后触发 */
    offsetBottom: PropTypes.number,
    style: PropTypes.object,
    /** 固定状态改变时触发的回调函数 */
    onChange: PropTypes.func,
    /** 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
    target: PropTypes.func,
    prefixCls: PropTypes.string
};

export default class Affix extends React.Component {
    static propTypes = {
        ...AffixProps,
        offsetTop: PropTypes.number,
        offsetBottom: PropTypes.number,
        target: PropTypes.func
    };
    
    constructor(props) {
        super(props);

        this.scrollEvent = undefined;
        this.resizeEvent = undefined;
        this.timeout = undefined;

        this.events = [
            'resize',
            'scroll',
            'touchstart',
            'touchmove',
            'touchend',
            'pageshow',
            'load'
        ];

        this.eventHandlers = {};

        this.state = {
            affixStyle: undefined,
            placeholderStyle: undefined
        };

        this.fixedNode = undefined;
        this.placeholderNode = undefined;
    }

    setAffixStyle(e, affixStyle) {
        const { onChange = noop, target = getDefaultTarget } = this.props;
        const originalAffixStyle = this.state.affixStyle;
        const isWindow = target() === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowequal(affixStyle, originalAffixStyle)) {
            return;
        }
        this.setState({ affixStyle }, () => {
            const affixed = !!this.state.affixStyle;
            if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
                onChange(affixed);
            }
        });
    }

    setPlaceholderStyle(placeholderStyle) {
        const originalPlaceholderStyle = this.state.placeholderStyle;
        if (shallowequal(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.setState({ placeholderStyle });
    }

    syncPlaceholderStyle(e) {
        const { affixStyle } = this.state;
        if (!affixStyle) {
            return;
        }
        this.placeholderNode.style.cssText = '';
        this.setAffixStyle(e, {
            ...affixStyle,
            width: this.placeholderNode.offsetWidth,
        });
        this.setPlaceholderStyle({
            width: this.placeholderNode.offsetWidth,
        });
    }

    @throttleByAnimationFrameDecorator()
    updatePosition(e) {
        const { offsetBottom, offset, target = getDefaultTarget } = this.props;
        let { offsetTop } = this.props;
        const targetNode = target();

        // Backwards support
        offsetTop = offsetTop || offset;
        const scrollTop = getScroll(targetNode, true);
        const affixNode = ReactDOM.findDOMNode(this);
        const elemOffset = getOffset(affixNode, targetNode);
        const elemSize = {
            width: this.fixedNode.offsetWidth,
            height: this.fixedNode.offsetHeight
        };

        const offsetMode = {
            top: false,
            bottom: false
        };
        // Default to `offsetTop=0`.
        if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
            offsetMode.top = true;
            offsetTop = 0;
        } else {
            offsetMode.top = typeof offsetTop === 'number';
            offsetMode.bottom = typeof offsetBottom === 'number';
        }

        const targetRect = getTargetRect(targetNode);
        const targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
        if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
            // Fixed Top
            const width = elemOffset.width;
            const top = targetRect.top + offsetTop;
            this.setAffixStyle(e, {
                position: 'fixed',
                top,
                left: targetRect.left + elemOffset.left,
                width,
            });
            this.setPlaceholderStyle({
                width,
                height: elemSize.height,
            });
        } else if (scrollTop < elemOffset.top + elemSize.height + offsetBottom - targetInnerHeight && offsetMode.bottom) {
            // Fixed Bottom
            const targetBottomOffet = targetNode === window ? 0 : (window.innerHeight - targetRect.bottom);
            const width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + offsetBottom,
                left: targetRect.left + elemOffset.left,
                width,
            });
            this.setPlaceholderStyle({
                width,
                height: elemOffset.height,
            });
        } else {
            const { affixStyle } = this.state;
            if (e.type === 'resize' && affixStyle && affixStyle.position === 'fixed' && affixNode.offsetWidth) {
                this.setAffixStyle(e, { ...affixStyle, width: affixNode.offsetWidth });
            } else {
                this.setAffixStyle(e, null);
            }
            this.setPlaceholderStyle(null);
        }

        if (e.type === 'resize') {
            this.syncPlaceholderStyle(e);
        }
    }

    componentDidMount() {
        const target = this.props.target || getDefaultTarget;
        // Wait for parent component ref has its value
        this.timeout = setTimeout(() => {
            this.setTargetEventListeners(target);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.target !== nextProps.target) {
            this.clearEventListeners();
            this.setTargetEventListeners(nextProps.target);

            // Mock Event object.
            this.updatePosition({});
        }
    }

    componentWillUnmount() {
        this.clearEventListeners();
        clearTimeout(this.timeout);
        this.updatePosition.cancel();
    }

    setTargetEventListeners(getTarget) {
        const target = getTarget();
        if (!target) {
            return;
        }
        this.clearEventListeners();

        this.events.forEach((eventName) => {
            this.eventHandlers[eventName] = addEventListener(target, eventName, this.updatePosition);
        });
    }

    clearEventListeners() {
        this.events.forEach((eventName) => {
            const handler = this.eventHandlers[eventName];
            if (handler && handler.remove) {
                handler.remove();
            }
        });
    }

    saveFixedNode = (node) => {
        this.fixedNode = node;
    }

    savePlaceholderNode = (node) => {
        this.placeholderNode = node;
    }

    render() {
        const className = classNames({
            [this.props.prefixCls || 'jc-affix']: this.state.affixStyle
        });

        const props = omit(this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target', 'onChange']);
        const placeholderStyle = { ...this.state.placeholderStyle, ...this.props.style };
        return (
            <div {...props} style={placeholderStyle} ref={this.savePlaceholderNode}>
                <div className={className} ref={this.saveFixedNode} style={this.state.affixStyle}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
