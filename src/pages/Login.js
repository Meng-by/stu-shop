import React from "react"
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import { setToken } from '../utils/auth'
import './login.css'

function Login(props) {
const { getFieldDecorator } = props.form;
const handleSubmit =e=>{
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        setToken(values.username);
        props.history.push("/admin");
      }
    });
}
    return (
        <Card title="QF Admin SYS" className="login-form">
        <Form onSubmit={(e)=>handleSubmit(e)} >
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住密码</Checkbox>)}
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          {/* Or <a href="">注册</a> */}
        </Form.Item>
      </Form>
      </Card>
    );
}

export default Form.create({name:"loginForm"})(Login);