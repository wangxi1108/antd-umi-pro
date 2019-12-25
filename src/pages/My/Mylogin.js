import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'dva'
// import config from '../../../config/myweb.config'

import styles from './Mylogin.less';


@Form.create()
class NormalLoginForm extends Component {

  // constructor(props){
  //   super(props)
  // }
 
  componentDidMount () { 
    // this.getTokenFun()
  }

// 获取token
  getTokenFun = () => {
    const { dispatch, form, location } = this.props
    dispatch({
      type: 'myLoginMo/getTokenData',
      payload: {
        grant_type: config.grantType,
        client_id: config.clientId,
        client_secret: config.clientSecret,
        redirect_uri: 'www.baidu.com',// 'http://localhost:3002/Callback',
        // encodeURI(`${window.location.origin}${window.location.pathname}`),
        scope: config.oauthScope,
        pathname:'/Callback'// this.props.location.pathname
      }
    })
      .then(res => {
      if (res.success) {
        console.log('登录页获取token ')
        // userLogin().then((res) => {
        //   if (res === 'done') {
        //     this.props.dispatch({ type: 'app/updateState', payload: { isLogin: true } })
        //     const callbackUrl = storage.getItem('callback_url') || '/'
        //     router.replace(callbackUrl)
        //   }
        // })
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, form, location } = this.props
    form.validateFields((err, values) => {
      // if (!err) {
      //   console.log('Received values of form: ', values);
      // }
      dispatch({
        type: 'myLoginMo/getTokenData',
        payload: {
          username: values.username,
          password: values.password,
          remember_me: true
        }
      }).then(res => {
        console.log('点击登录',res)
        // if (res.success) {
          // userLogin().then((res) => {
          //   if (res === 'done') {
          //     this.props.dispatch({ type: 'app/updateState', payload: { isLogin: true } })
          //     const callbackUrl = storage.getItem('callback_url') || '/'
          //     router.replace(callbackUrl)
          //   }
          // })
        // }
      })
      
    });


  };

  render () {
    const formItemLayout = {
      labelCol: {
        sm: { span: 6 },
      },
      wrapperCol: {
        sm: { span: 18 },
      },
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.mylogin}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
          <Form.Item label="用户名：">
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item label="密码：">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item label="验证码：">
            {getFieldDecorator('vercode', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="vercode"
                placeholder="请输入二维码！"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <a href="">register now!</a> <a className="login-form-forgot" href="">
              Forgot password
            </a> 
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default connect(({ myLoginMo }) => ({ myLoginMo }))(NormalLoginForm);
// export default NormalLoginForm;
