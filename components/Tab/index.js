/**
 * tab
 *
 * usage:
 *  <Tab
 *    className='xxx'
 *    tabClass='set tab style'
 *    tabs={[]}
 *    active={activeIdx}
 *    onChange={(tabIdx) => handlerChange(tabIdx)}
 *    render={(tab, idx) => renderFunction}
 *  />
 *
 *  props:
 *    {string}  className   [option]
 *    {string}  tabClass    [option]
 *    {array}    tabs       [name1, name2...]
 */

import React, { Component } from 'react';
import { validFunc } from '../util/validate';
import './style/index.less';

class Tab extends Component {
  static defaultProps = {
    prefixCls: 'jdic-tab',
  };

  render() {
    const {
      tabs, render, active, onChange, className, tabClass, prefixCls
    } = this.props;
    const tabActive = `${prefixCls}-uc-tab-active`;
    return (
      <ul className={className}>
        {
          tabs.map((name, idx) => (
            <li
              key={idx}
              className={`${prefixCls}-uc-tab ${tabClass} ${active === idx ? tabActive : ''}`}
              onClick={() => validFunc(onChange, idx)}
            >
              {validFunc(render, name, idx) || name}
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Tab;
