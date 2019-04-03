/* eslint-disable import/prefer-default-export */
export function selectDate(wrapper, date, index) {
  let calendar = wrapper;
  if (index !== undefined) {
    calendar = wrapper.find('.jc-calendar-range-part').at(index);
  }
  calendar.find({ title: date.format('LL'), role: 'gridcell' }).simulate('click');
}

export function hasSelected(wrapper, date) {
  return wrapper.find({ title: date.format('LL'), role: 'gridcell' }).hasClass('jc-calendar-selected-day');
}

export function openPanel(wrapper) {
  wrapper.find('.jc-calendar-picker-input').simulate('click');
}

export function clearInput(wrapper) {
  wrapper.find('.jc-calendar-picker-clear').hostNodes().simulate('click');
}

export function nextYear(wrapper) {
  wrapper.find('.jc-calendar-next-year-btn').simulate('click');
}

export function nextMonth(wrapper) {
  wrapper.find('.jc-calendar-next-month-btn').simulate('click');
}

import React from 'react';
import { mount } from 'enzyme';

describe('Badge', () => {
  test('2加2等于4', ()=> {
    expect(2 + 2).toBe(4);
});
});
