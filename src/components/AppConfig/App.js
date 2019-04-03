import React, { Component } from 'react';
/*import { withRouter } from 'react-router';*/
import { renderRoutes } from 'react-router-config';
import { Layout,Button } from 'jdcloudui';
const { Header, Footer, Sider, Content } = Layout;
import './style.css'

/*@withRouter*/
export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

    render() {
        const { route } = this.props;
        return (
            <Layout>
                <Header>组件配置中心</Header>
                <Layout>
                    <Content>{route?renderRoutes(route.routes):''}</Content>
                </Layout>
            </Layout>
        );
    }
}
