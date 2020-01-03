import React, { Component } from 'react'
import { Table, Divider, Form, Input,Icon, Select, DatePicker, Button, Modal,Tag } from 'antd'
import router from 'umi/router';
import { connect } from 'dva'

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const { Option } = Select;
const { RangePicker } = DatePicker;
const statusType = [
  { label: '未开单', value: '10' },
  {label:'成功',value:'20'},
  {label:'失败',value:'30'}
]
// @connect(({ productsMaModel }) => ({
//   productsMaModel}))
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
@Form.create()

class SafetyTest extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render () {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username')
    const passwordError = isFieldTouched('password') && getFieldError('password')

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    )
  }
  

}

export default SafetyTest



