/**
 * @file 组合 Layout, Header, Content, Sider, 返回Layout组件
 * @author chenyanhua
 * @namespace Layout
 */

import React from 'react';

import BasicComponent from './BasicComponent';

import BasicLayout from './BasicLayout';

import Sider from './Sider';

// 注册新组件
const injectComponent = basicProps => (WrappedComponent) => {
    // 返回新组件并传参
    return class extends React.Component {
        static Header;
        static Footer;
        static Content;
        static Sider;

        render() {
            return (
                <WrappedComponent {...basicProps} {...this.props} />
            );
        }
    };
};

const Layout = injectComponent({
    prefixCls: 'jc-layout'
})(BasicLayout);

const Header = injectComponent({
    prefixCls: 'jc-layout-header'
})(BasicComponent);

const Footer = injectComponent({
    prefixCls: 'jc-layout-footer'
})(BasicComponent);

const Content = injectComponent({
    prefixCls: 'jc-layout-content'
})(BasicComponent);

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;

export default Layout;
