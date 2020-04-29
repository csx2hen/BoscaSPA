import React, {useState} from 'react';
import {Button, Form, Input, notification} from 'antd';
import CenterBox from '../../../components/UI/CenterBox/CenterBox';
import config from './SignInFormConfig';
import {Link} from 'react-router-dom';
import AuthService from '../../../services/AuthService';

const SignIn = (props) => {

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const signInHandler = async (values) => {
    setLoading(true);
    const result = await AuthService.signIn(values.email, values.password);
    setLoading(false);
    if (result.success) {
      notification['success']({
        message: 'Welcome',
        description: 'You have successfully logged in.',
        duration: 5,
      });
      // todo storage user info into local storage
      props.history.push(`/`);
    } else if (result.error.code === 'UserNotConfirmedException') {
      notification['warning']({
        message: 'Could not log in',
        description: 'You have not confirmed your email.',
        duration: 5,
      });
      await AuthService.resendConfirmationCode(values.email);
      props.history.push(`/auth/confirm/${values.email}`);
    } else {
      notification['error']({
        message: 'Could not log in',
        description: result.message,
        duration: 5,
      });
    }
  };

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
      <Form form={form} name="sign-in" onFinish={signInHandler}>
        {formItems}
        <Form.Item>
          <Link to="/auth/rest-pwd">Forgot password</Link>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Sign in
          </Button>
          Or <Link to="/auth/sign-up">register now!</Link>
        </Form.Item>
      </Form>
    </CenterBox>
  );
};

export default SignIn;