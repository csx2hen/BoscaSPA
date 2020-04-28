import React from 'react';
import {Button, Form, Input} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';

const config = [
  {
    name: 'email',
    type: '',
    label: 'E-mail',
    placeholder: 'E-mail',
    icon: UserOutlined,
    rules: [
      {
        required: true,
        message: 'Please input your e-mail address.',
      },
      {
        type: 'email',
        message: 'The input is not a valid e-mail address.',
      },
    ],
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Password',
    icon: LockOutlined,
    rules: [
      {
        required: true,
        message: 'Please input your password',
      },
    ],
  },
];

const SignIn = (props) => {

  const formItems = config.map(e => {
    const prefix = React.createElement(e.icon, {className: 'site-form-item-icon'}, null);
    return (
      <Form.Item key={e.name} name={e.label} rules={e.rules}>
        <Input prefix={prefix} type={e.type} placeholder={e.placeholder}/>
      </Form.Item>
    );
  });

  return (
    <Form>
      {formItems}
      <Form.Item>
        <a href="">
          Forgot password
        </a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default SignIn;