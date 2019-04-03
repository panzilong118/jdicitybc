/**
 * @author chenyanhua
 * @version 3.4.0
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Animate from 'rc-animate';
import omit from 'omit.js';
import isCssAnimationSupported from '../_util/isCssAnimationSupported';

export const SpinProps = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    spinning: PropTypes.bool, // 是否旋转
    size: PropTypes.oneOf(['small', 'default', 'large']),
    wrapperClassName: PropTypes.string, // 包装器的类属性
    indicator: PropTypes.node, // 加载指示符
    delay: PropTypes.number, // 延迟显示加载效果的时间（防止闪烁）
    tip: PropTypes.string, // 当作为包裹元素时，可以自定义描述文案
    style: PropTypes.object
};

export default class Spin extends React.Component {
    static defaultProps = {
        prefixCls: 'jc-spin',
        spinning: true,
        size: 'default',
        wrapperClassName: ''
    };
    static propTypes = {...SpinProps};

    // static propTypes = {
    //     prefixCls: PropTypes.string,
    //     className: PropTypes.string,
    //     spinning: PropTypes.bool, // 是否旋转
    //     size: PropTypes.oneOf(['small', 'default', 'large']),
    //     wrapperClassName: PropTypes.string, // 包装器的类属性
    //     indicator: PropTypes.node, // 加载指示符
    //     delay: PropTypes.number, // 延迟显示加载效果的时间（防止闪烁）
    //     tip: PropTypes.string, // 当作为包裹元素时，可以自定义描述文案
    //     style: PropTypes.object
    // };

    constructor(props) {
        super(props);
        this.debounceTimeout = undefined;
        this.delayTimeout = undefined;
        this.state = {
            spinning: props.spinning
        };
    }
    componentDidMount() {
        if (!isCssAnimationSupported()) {
            // Show text in IE9
            this.setState({
                notCssAnimationSupported: true,
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        const currentSpinning = this.props.spinning;
        const { spinning } = nextProps;
        const { delay } = this.props;
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        if (currentSpinning && !spinning) {
            this.debounceTimeout = window.setTimeout(() => this.setState({ spinning }), 200);
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
        } else if (spinning && delay && !Number.isNaN(Number(delay))) {
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
            this.delayTimeout = window.setTimeout(() => this.setState({ spinning }), delay);
        } else {
            this.setState({ spinning });
        }
    }
    componentWillUnmount() {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        if (this.delayTimeout) {
            clearTimeout(this.delayTimeout);
        }
    }
    /**
     * 是否有子元素
     * 有子元素时，指示整个子元素的加载状态
     */
    isNestedPattern = () => {
        return !!(this.props && this.props.children);
    }
    /**
     * 渲染组件：自定义组件或者默认组件
     */
    renderIndicator = () => {
        const { prefixCls, indicator } = this.props;
        // 加载符
        const dotClassName = `${prefixCls}-dot`;
        // 存在自定义加载符
        if (React.isValidElement(indicator)) {
            return React.cloneElement(indicator, {
                className: classNames(indicator.props.className, dotClassName)
            });
        }
        // 使用默认加载符
        return (
            <span className={classNames(dotClassName, `${prefixCls}-dot-spin`)}>
                <i />
                <i />
                <i />
                <i />
            </span>
        );
    }
    render() {
        const { className, size, prefixCls, tip, wrapperClassName, ...restProps } = this.props;
        const { spinning, notCssAnimationSupported } = this.state;

        const spinClassName = classNames(prefixCls, {
            [`${prefixCls}-sm`]: size === 'small',
            [`${prefixCls}-lg`]: size === 'large',
            [`${prefixCls}-spinning`]: spinning,
            [`${prefixCls}-show-text`]: !!tip || notCssAnimationSupported,
        }, className);
        // fix https://fb.me/react-unknown-prop
        const divProps = omit(restProps, [
            'spinning',
            'delay',
            'indicator'
        ]);
        const spinElement = (
            <div {...divProps} className={spinClassName}>
                {this.renderIndicator()}
                {tip ? <div className={`${prefixCls}-text`}>{tip}</div> : null}
            </div>
        );
        // 如有子元素，包裹子元素，否则只返回加载符
        if (this.isNestedPattern()) {
            let animateClassName = `${prefixCls}-nested-loading`;
            if (wrapperClassName) {
                animateClassName = `${animateClassName} ${wrapperClassName}`;
            }
            const containerClassName = classNames({
                [`${prefixCls}-container`]: true,
                [`${prefixCls}-blur`]: spinning,
            });
            return (
                <Animate
                    {...divProps}
                    component='div'
                    className={animateClassName}
                    style={null}
                    transitionName='fade'
                >
                    {spinning && <div key='loading'>{spinElement}</div>}
                    <div className={containerClassName} key='container'>
                        {this.props.children}
                    </div>
                </Animate>
            );
        }
        return spinElement;
    }
}
