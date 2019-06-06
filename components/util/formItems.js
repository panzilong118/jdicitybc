import React from 'react';
import {
  Input, Form
} from 'antd';

const FormItem = Form.Item;
/**
 * usage: getInputFormItem.bind(this, ...)
 * @param {*} label
 * @param {*} name
 * @param {*} message
 * @param {*} placehoder
 * @param {*} rule
 */
export function getInputFormItem({
  label,
  name,
  messageInfo = '请输入',
  placehoder,
  rule,
  formItemLayout,
  initialValue,
  className
}) {
  const { form: { getFieldDecorator } } = this.props;
  const options = {
    rules: [{
      required: true,
      message: `${messageInfo} ${label}`
    }]
  };
  if (rule) options.rules.push(rule);
  if (initialValue) options.initialValue = initialValue;

  return (
    <FormItem
      hasFeedback
      className={className}
      label={label}
      {...formItemLayout}
    >
      {
        getFieldDecorator(name, options)(<Input placeholder={placehoder} />)
      }
    </FormItem>
  );
}

export function getFormItemWraper(opt = {}, decorator = {}) {
  const { form: { getFieldDecorator } } = this.props;
  return function (label, name, render) {
    return (
      <FormItem
        hasFeedback
        label={label}
        {...opt}
      >
        {
          getFieldDecorator(name, {
            rules: [{
              required: true,
              message: `${label}是必填项`
            }],
            ...decorator
          })(render())
        }
      </FormItem>
    );
  };
}
