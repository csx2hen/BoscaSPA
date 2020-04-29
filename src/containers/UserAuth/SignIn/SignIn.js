import React from 'react';
import {Button, Form, Input} from 'antd';
import CenterBox from '../../../components/UI/CenterBox/CenterBox';
import config from './SignInFormConfig';
import {Link} from 'react-router-dom';

const SignIn = (props) => {

  const formItems = config.map(e => {
    const prefix = React.createElement(e.icon, {}, null);
    return (
      <Form.Item key={e.name} name={e.name} rules={e.rules}>
        <Input prefix={prefix} type={e.type} placeholder={e.placeholder}/>
      </Form.Item>
    );
  });

  return (
    <CenterBox title="Sign in to your account">
      <Form>
        {formItems}
        <Form.Item>
          <Link to="/auth/rest-pwd">Forgot password</Link>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign in
          </Button>
          Or <Link to="/auth/sign-up">register now!</Link>
        </Form.Item>
      </Form>
    </CenterBox>
  );
};

export default SignIn;