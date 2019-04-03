// ---
// order: 6
// iframe: 360
// title:
//   zh-CN: 固定头部
//   en-US: Fixed Header
// ---

// ## zh-CN

// 一般用于固定顶部导航，方便页面切换。

// ## en-US

// Fixed Header is generally used to fix the top navigation to facilitate page switching.
import React from 'react';
import { Layout, Menu, Breadcrumb } from '../../index';
const { Header, Content, Footer } = Layout;

export default class Fixed extends React.Component {
  render(){
    return (
      <Layout>
        <Header style={{ position: 'fixed', width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}