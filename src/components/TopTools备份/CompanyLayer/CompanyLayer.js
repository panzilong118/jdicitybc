/*
 * author:  冯炎
 * created:  20180104
 * description: 未入驻公司提示弹框
 * */

/* **********  系统组件  ********** */
import React, {Component} from 'react';
import {Modal} from 'jdcloudui';
import Cookies from '../../../common/Cookies';
const cookie = new Cookies();

/* **********  自定义组件  ********** */

class CompanyLayer extends Component {
  constructor(props) {
    super(props)
  }

  isCompanyId() {
    if (typeof window !== 'undefined') {
      const btnArr = document.getElementsByClassName('company-a') || [];
      const btnArrLen = btnArr.length;
      for (let i = 0; i < btnArrLen; i++) {
        btnArr[i].onclick = e => {
          if (cookie.get('companyId') == '') {
            Modal.warning({
              title: <span style={{fontSize: '16px'}}>您还未有任何可管理的有效公司</span>,
              content: <span style={{fontSize: '14px'}}>您可以前往“账号管理-公司管理”中维护公司，或者“立即入驻"维护公司信息，平台审核通过后，您可以选择公司进行采购</span>,
              okText: '确定'
            });
            return false;
          }
        };
      }
    }
  }
}
export default CompanyLayer;
