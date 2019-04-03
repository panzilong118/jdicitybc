import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import omit from 'omit.js';

import Icon from '../icon';

if (typeof window !== 'undefined') {
    const matchMediaPolyfill = (mediaQuery) => {
        return {
            media: mediaQuery,
            matches: false,
            addListener() {
            },
            removeListener() {
            }
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

const mediaArray = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
const mediaDS = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
};

export default class Sider extends React.Component {
    // 默认props
    static defaultProps = {
        prefixCls: 'jc-layout-sider',
        className: '',
        triggerClassName: '',
        style: {},
        width: 200,
        collapsedWidth: 65, // 收缩宽度，设置为 0 会出现特殊Trigger
        collapsible: false, // 是否可收起
        defaultCollapsed: false, // 是否默认收起
        reverseArrow: false // 折叠按钮是否反向，当Sider在右边时可以使用
    };

    // props类型
    static propTypes = {
        prefixCls: PropTypes.string, // class前缀
        className: PropTypes.string, // Sider class
        triggerClassName: PropTypes.string, // trigger class
        style: PropTypes.object,
        width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        breakpoint: PropTypes.oneOf(mediaArray),
        collapsed: PropTypes.bool,
        collapsedWidth: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        collapsible: PropTypes.bool,
        defaultCollapsed: PropTypes.bool,
        reverseArrow: PropTypes.bool,
        trigger: PropTypes.node,
        onCollapse: PropTypes.func
    };

    /**
     * 获取父元素传递的参数
     * @variable {object} siderHandler 父组件处理Sider的对象
     */
    static contextTypes = {
        siderHandler: PropTypes.object,
    };

    // 向下(子组件)传递参数, eg: Menu接收参数,做出响应
    static childContextTypes = {
        siderCollapsed: PropTypes.bool,
        collapsedWidth: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    };

    constructor(props) {
        super(props);
        this.state = {
            collapsed: props.collapsed || props.defaultCollapsed
        };
        // 创建MediaQueryList对象
        let matchMediaFun;
        if (typeof window !== 'undefined') {
            matchMediaFun = window.matchMedia || {};
        }
        if (props.breakpoint && matchMediaFun) {
            this.mediaQueryList = matchMediaFun(`(max-width: ${mediaDS[props.breakpoint]})`);
        }
    }
 
    /**
     * 向下(子组件)传递参数, 例如：Menu接收参数, 做出响应
     * @return {boolean} siderCollapsed Sider的折叠状态
     * @return {(string | number)} collapsedWidth 面板折叠时宽度
     */
    getChildContext() {
        return {
            siderCollapsed: this.state.collapsed,
            collapsedWidth: this.props.collapsedWidth
        };
    }

    componentDidMount() {
        // 父组件计算Sider组件个数 +1
        if (this.context.siderHandler) {
            this.context.siderHandler.plus();
        }
        // 添加MediaQueryList监听事件
        if (this.mediaQueryList) {
            this.mediaQueryList.addListener(this.responsiveCollapse);
        }
    }

    componentWillReceiveProps(nextProps) {
        // 重新设置折叠状态
        if ('collapsed' in nextProps) {
            this.setState({
                collapsed: nextProps.collapsed
            });
        }
    }
    
    componentWillUnmount() {
        // 父组件计算Sider组件个数 -1
        if (this.context.siderHandler) {
            this.context.siderHandler.minus();
        }
        // 移除MediaQueryList监听事件
        if (this.mediaQueryList) {
            this.mediaQueryList.removeListener(this.responsiveCollapse);
        }
    }

    /**
     * 处理响应式：满足临界条件，折叠，否则展开
     * @param {MediaQueryList} mql
     */
    responsiveCollapse = (mql) => {
        this.setState({
            collapsed: mql.matches
        });
        this.handleCallback(mql.matches, 'responsive');
    }
    
    /**
     * 处理折叠click事件
     * 此处调用上一次的state，因此使用回调
     */
    toggleCollapse = () => {
        this.setState((prevState) => {
            this.handleCallback(!prevState.collapsed, 'click');
            return {
                collapsed: !prevState.collapsed
            };
        });
    }

    /**
     * 处理用户自定义的回调函数
     * 在执行click or responsive时调用
     * @param {boolean} collapsed : 标识Sider的折叠true和展开状态
     * @param {string} type : 标识目前是哪类操作, 'click' or 'responsive'
     */
    handleCallback = (collapsed, type) => {
        const { onCollapse } = this.props;
        if (onCollapse) {
            onCollapse(collapsed, type);
        }
    }

    /**
     * 渲染折叠展开组件(用Trigger指代)
     * 根据用户传递的reverseArrow参数，设置Trigger的方向
     * @variable {boolean} reverseArrow：是否使用反向箭头
     * @variable {string} triggerIcon: 用户设置的icon，用来替换默认icon，携带默认Icon的水平翻转效果
     * 优先使用triggerIcon，否则，根据reverseArrow判断使用默认icon
     */
    initTriggerComponent = () => {
        const { prefixCls, trigger, reverseArrow, triggerIcon, triggerClassName } = this.props;
        const divCls = classNames(`${prefixCls}-trigger`, triggerClassName, {
            [`${prefixCls}-trigger-reverse`]: reverseArrow
        });
        let iconType = 'right';
        // 优先使用triggerIcon，否则，根据reverseArrow判断使用默认icon
        if (triggerIcon) {
            iconType = triggerIcon;
        } else {
            iconType = reverseArrow ? 'right' : 'left';
        }
        return [
            <div className={divCls} onClick={this.toggleCollapse} >
                { trigger || <Icon type={`${iconType}`} className={`${prefixCls}-trigger-icon`} /> }
            </div>
        ];
    }

    render() {
        const { prefixCls, className, style, width, collapsible } = this.props;

        // 若折叠宽度不是数字，使用默认折叠宽度
        let collapsedWidth = parseInt(this.props.collapsedWidth, 10);
        collapsedWidth = Number.isNaN(collapsedWidth) ? this.state.defaultCollapsed : collapsedWidth;

        // Sider class
        const siderCls = classNames(className, prefixCls, {
            [`${prefixCls}-collapsed-zero`]: collapsedWidth === 0,
            [`${prefixCls}-collapsed`]: this.state.collapsed
        });

        // Sider展示宽度：折叠 or 展开
        const siderWidth = this.state.collapsed ? `${collapsedWidth}px` : `${width}px`;
        const siderStyle = {
            ...style,
            width: siderWidth,
            flex: `0 0 ${siderWidth}`
        };

        const otherProps = omit(this.props, [
            'prefixCls',
            'className',
            'triggerClassName',
            'style',
            'width',
            'breakpoint',
            'collapsed',
            'collapsedWidth',
            'collapsible',
            'defaultCollapsed',
            'trigger',
            'reverseArrow',
            'onCollapse'
        ]);

        return (
            <div className={siderCls} style={siderStyle} {...otherProps}>
                <div className={`${prefixCls}-content`}>{this.props.children}</div>
                {collapsible ? this.initTriggerComponent() : null}
            </div>
        );
    }
}
