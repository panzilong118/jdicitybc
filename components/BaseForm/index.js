/**
 * form表单 base版
 * props:
 * @param {object} layout { labelCol: { span }, wrapperCol: { span } }
 * @param {array} items
 *    items=[{
 *      col,  // column
 *      label,
 *      key,
 *      required,
 *      component, // default is Input
 *      options = {},
 *      rules
 *    }]
 *
 * usage:
 *  import { Form } from 'src/components/common'
 *
 *  add = (e) =>{
 *    const { onOk } = this.props;
 *    Form.submit(e, this.formRef, (values) => {
 *      console.log('valide', values)
 *      // post to server
 *      onOk()
 *    })
 *  }
 *
 *  // render
 *  <Form
 *    items={[{
 *      label: '目录名',
 *      required: true,
 *      key: 'name'
 *    }, {
 *      label: '是否挂表',
 *      key: 'isLast',
 *      component: (
 *        <Switch
 *          checkedChildren={<Icon type="check" />}
 *          unCheckedChildren={<Icon type="close" />}
 *        />
 *      )
 *    }]}
 *  />
*/
import React from 'react';
import { Form, Input, Col } from 'antd';

const FormItem = Form.Item;
// 默认的layout
export const defaultLabelColSpan = 6;
const defaultFormItemLayout = {
  labelCol: { span: defaultLabelColSpan },
  wrapperCol: { span: 16 },
};

class BaseForm extends React.Component {
  static submit({ validateFieldsAndScroll, resetFields }, onValid) {
    validateFieldsAndScroll(async (err, values) => {
      if (err) {
        return;
      }
      await onValid(values);
      resetFields();
    });
  }

  // 渲染单个表单项
  renderFormItem = ({ item, layout, getFieldDecorator }) => {
    const {
      col = 24, label, key, required, component, options = {}, rules
    } = item;
    return (
      <Col span={col} key={key}>
        <FormItem label={label} {...layout}>
          {getFieldDecorator(key, {
            ...options,
            rules: rules || [{ required, message: `${label}为空` }],
          })(component || <Input />)}
        </FormItem>
      </Col>
    );
  }

  render() {
    const {
      items, layout = defaultFormItemLayout, form: { getFieldDecorator }
    } = this.props;
    return (
      <Form style={{ overflow: 'hidden' }}>
        {items.map(
          item => this.renderFormItem({ item, layout, getFieldDecorator })
        )}
      </Form>
    );
  }
}

export default Form.create()(BaseForm);
