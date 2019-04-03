/**
 * @author chenyanhua
 * @date 2018-08-03
 * @file 销售信息表格：自定义扩展列
 * /item-shop-view/configs/components-react/ReleasePriceAndStock/v1.0.1
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveConfig, searchConfig } from './redux';
import queryString from 'query-string';
import { Row, Col, Checkbox, Form, Button, message, Spin, Icon, Tooltip  } from 'jdcloudui';
import PropTypes from 'prop-types';
const FormItem = Form.Item;
import AppConfigHoc from '../../../../AppConfig/AppConfigHoc';

import './style.css';
let ev;
@connect(state => ({ components: state.centerConfig }), { saveConfig, searchConfig })
@AppConfigHoc
@Form.create()
export default class ReleasePriceAndStockConfig extends Component {
    static contextTypes = {
        store: PropTypes.object
    }

    constructor(props, context) {
        super(props, context);
        this.componentId = '';
        this.pageId = '';
        this.state = { loading: false, spinLoading: true };

    }

    handleSubmit = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let examin = {};

                this.setState({ loading: true });
                var that = this;
                this.props.saveConfigHoc({ componentId: this.componentId, pageId: this.pageId, config: JSON.stringify(values) }).then(
                    (result) => {
                        that.callParent();
                        message.success('修改成功', 2);
                        that.setState({ loading: false });
                    },
                    (error) => {
                        message.error(error, 2);
                        that.setState({ loading: false });

                    }
                )
            }
        });
    }

    receiveMessage(event) {
        if(event && event.origin.indexOf('platform')>=0){
            ev = event;
        }
    }

    callParent() {
        ev && ev.source && ev.source.postMessage && ev.source.postMessage('ok', ev.origin);
    }

    componentDidMount() {
        window.addEventListener('message', this.receiveMessage, false);
        const componentId = queryString.parse(window.location.search).componentId;
        const pageId = queryString.parse(window.location.search).pageId;
        let source = window.location.href.split('/');
        let length = source.length;
        /*        this.componentId = source[length-2];
                this.pageId = source[length-1];*/
        this.componentId = componentId;
        this.pageId = pageId;
        this.props.searchConfigHoc({ componentId: this.componentId, pageId: this.pageId }).then(
            (result) => {
                this.setState({ ...result, spinLoading: false })
                this.forceUpdate();
            },
            (error) => {
                message.error(error, 2);
                this.setState({ spinLoading: false })
            }
        );
        console.log('componentId----', this.componentId)
        console.log('pageId-----', this.pageId)
    }

    render() {
        console.log('this.props.testPropsFromHoc is:', this.props.testPropsFromHoc);
        console.log('this.props.saveConfigHoc is:', this.props.saveConfigHoc);
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = { labelCol: { span: 18 }, wrapperCol: { span: 6 } };
        return (
            <Spin spinning={this.state.spinLoading}>
                <div style={{ width: '600px', overflow:'auto', margin: 'auto' }}>
                    <Form>
                        <Row>
                            <h3 style={{'lineHeight': '50px'}}>价格及库存信息列表可选展示条目(默认不展示) : </h3>
                            <Col span={4}>
                                <FormItem label="建议售价" {...formItemLayout}>
                                    {getFieldDecorator('ifProposalPrice', {
                                        valuePropName: 'checked',
                                        initialValue: this.state.ifProposalPrice === undefined ? false : this.state.ifProposalPrice
                                    })(
                                        <Checkbox />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                    <div className="buttonFooter">
                        <Button type="primary" onClick={() => this.handleSubmit()} loading={this.state.loading}>保存</Button>
                        <Button className="ml15" onClick={() => this.callParent()}>取消</Button>
                    </div>
                </div>
            </Spin>
        );
    }
    /**
     * @param e checkbox 对象
     * @param field 修改的字段
     */
    onCheckboxChange = (e, field) => {
        this.props.form.setFieldsValue({
            [field]: e.target.checked
        });
    }
}
