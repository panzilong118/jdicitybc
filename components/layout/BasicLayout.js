/**
 * @file 为Layout提供基础组件组件服务
 * @author chenyanhua
 */
import React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

export default class BasicLayout extends React.Component {
    // 默认props
    static defaultProps = {
        prefixCls: 'jc-layout', // class前缀
        className: '',
        hasSider: false // 是否有Sider子组件
    };
    // props 类型
    static propTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        hasSider: PropTypes.bool
    };
    // 向Sider子元素传递参数
    static childContextTypes = {
        siderHandler: PropTypes.object
    };
    constructor(props) {
        super(props);
        this.state = {
            siderNum: 0 // 记录子组件Sider数量
        };
    }
    /**
     * 向子组件传递参数
     * @return {object} returnObj.siderHandler 包含计算子组件Sider个数的函数
     * @variable {function} plus  : 子组件个数加1
     * @variable {function} minus : 子组件个数减1
     */
    getChildContext() {
        return {
            // 计算子组件Sider个数
            siderHandler: {
                // Sider个数 +1
                plus: () => {
                    this.setState((prevState) => {
                        return {
                            siderNum: prevState.siderNum + 1
                        };
                    });
                },
                // Sider个数 -1
                minus: () => {
                    this.setState((prevState) => {
                        return {
                            siderNum: prevState.siderNum - 1
                        };
                    });
                }
            }
        };
    }
    render() {
        const { prefixCls, className, hasSider, ...others } = this.props;
        const divCls = classNames(className, prefixCls, {
            [`${prefixCls}-has-sider`]: hasSider || this.state.siderNum > 0
        });
        return (
            <div className={divCls} {...others}>{this.props.children}</div>
        );
    }
}
