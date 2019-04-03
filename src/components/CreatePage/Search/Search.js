import React, { Component } from 'react';
import {Form, Row, Button, message} from 'jdcloudui';
const FormItem = Form.Item;

@Form.create()
export default class Search extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = () => {
        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log('values is', values);
                const params = {...this.props.search, ...values, pageNum: 1};
                typeof this.props.onChangeSearch === "function" && this.props.onChangeSearch(params);
                this.props.onSubmit(params);
            }
        })
    }
    onReset = () => {
        this.props.form.resetFields();
    }
    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const {item, revert} = this.props;
        return (
            <div className="ui-search mb20">
                <Row className="l-content" style={revert ? { minHeight: '70' } : {}}>
                    <Form layout="inline">
                        {(item || []).map((item, index) => {
                            return <FormItem label={item.title}>
                                {getFieldDecorator(item.key, {initialValue: item.initialValue != undefined ? item.initialValue : undefined,})(
                                    item.render
                                )}
                            </FormItem>
                        })}
                        <div className="r-action" >
                            <Button style={revert ? { top: '25%' } : {}} type="primary" onClick={()=>this.handleSubmit()}>查 询</Button>
                            {revert && <Button style={{ top: '75%' }} type="primary" onClick={::this.onReset}>重 置</Button>}
                        </div>
                    </Form>
                </Row>
            </div>
        )
    }
}