import React from 'react';
import { render } from 'enzyme';
import List from '..';
import Icon from '../../icon';

describe('List', () => {
  it('renders empty loading', () => {
    const loading = {
      spinning: true,
    };
    const wrapper = render(
      <List loading={loading} dataSource={[]} renderItem={() => <List.Item />} />
    );
    expect(wrapper.find('.jc-list-empty-text')).toHaveLength(0);
  });

  it('renders object loading', () => {
    const loading = {
      spinning: true,
    };
    const wrapper = render(
      <List
        loading={loading}
        dataSource={[1]}
        renderItem={() => <List.Item />}
      />
    );
    expect(wrapper.find('.jc-spin-spinning')).toHaveLength(1);
  });

  it('renders object loading with indicator', () => {
    const jcIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

    const loading = {
      spinning: true,
      indicator: jcIcon,
    };
    const wrapper = render(
      <List
        loading={loading}
        dataSource={[1]}
        renderItem={() => <List.Item />}
      />
    );
    expect(wrapper.find('.jcicon-loading')).toHaveLength(1);
  });
});
