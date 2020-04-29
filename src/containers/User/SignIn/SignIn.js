import React from 'react';
import {Button, Form, Input} from 'antd';
import CenterBox from '../../../components/UI/CenterBox/CenterBox';
import config from './SignInFormConfig';

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
    <CenterBox title="Sign in to your account">
      <Form>
        {formItems}
        <Form.Item>
          <a href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </CenterBox>
  );
};

export default SignIn;