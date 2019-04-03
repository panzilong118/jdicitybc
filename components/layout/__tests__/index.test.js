import React from 'react';
import { mount } from 'enzyme';
import {Layout, Icon} from '../../index';

const { Sider, Content } = Layout;

describe('Layout', () => {
  it('detect the sider as children', async () => {
    const wrapper = mount(
      <Layout>
        <Sider key='1'>Sider</Sider>
        <Content>Content</Content>
      </Layout>
    );
    expect(wrapper.find('.jc-layout').hasClass('jc-layout-has-sider')).toBe(true);
  });

  it('detect the sider inside the children', async () => {
    const wrapper = mount(
      <Layout>
        <div><Sider key='2'>Sider</Sider></div>
        <Content>Content</Content>
      </Layout>
    );
    expect(wrapper.find('.jc-layout').hasClass('jc-layout-has-sider')).toBe(true);
  });
});
