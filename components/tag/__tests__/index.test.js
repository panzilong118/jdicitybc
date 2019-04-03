import React from 'react';
import { mount } from 'enzyme';
import Tag from '..';

describe('Tag', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should be closable', () => {
    const onClose = jest.fn();
    const wrapper = mount(
      <Tag closable onClose={onClose} />
    );
    expect(wrapper.find('.jcicon-cross').length).toBe(1);
    expect(wrapper.find('.jc-tag').length).toBe(1);
    wrapper.find('.jcicon-cross').simulate('click');
    expect(onClose).toBeCalled();
    jest.runAllTimers();
    wrapper.update();
    expect(wrapper.find('.jc-tag').length).toBe(0);
  });

  it('should not be closed when prevent default', () => {
    const onClose = (e) => {
      e.preventDefault();
    };
    const wrapper = mount(
      <Tag closable onClose={onClose} />
    );
    expect(wrapper.find('.jcicon-cross').length).toBe(1);
    expect(wrapper.find('.jc-tag').length).toBe(1);
    wrapper.find('.jcicon-cross').simulate('click');
    jest.runAllTimers();
    expect(wrapper.find('.jc-tag').length).toBe(1);
  });
});
