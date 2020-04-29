import React, {useState} from 'react';
import formContentConfig from './SignUpFormConfig';
import {formItemLayout, tailFormItemLayout} from '../FormLayoutConfig';
import {Button, Form, Input, notification} from 'antd';
import CenterBox from '../../../components/UI/CenterBox/CenterBox';
import AuthService from '../../../services/AuthService';

const SignUp = (props) => {

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const signUpHandler = async (values) => {
    setLoading(true);
    const result = await AuthService.signUp(values.email, values.password, values.name);
    setLoading(false);
    if (result.success) {
      props.history.push(`/auth/confirm/${result.username}`);
    } else {
      notification['error']({
        message: 'Could not create this account',
        description: result.message,
        duration: 5,
      });
    }
  };

  const formItems = formContentConfig.map(e => {
    return (
      <Form.Item {...formItemLayout}
                 key={e.name}
                 name={e.name}
                 rules={e.rules}
                 label={e.label}
                 hasFeedback={e.hasFeedback}
                 dependencies={e.dependencies}>
        <Input type={e.type}/>
      </Form.Item>
    );
  });

  return (
    <CenterBox title="Create a new account" width={8}>
      <Form form={form} name="sign-up" onFinish={signUpHandler}>
        {formItems}
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Create account
          </Button>
        </Form.Item>
      </Form>
    </CenterBox>
  );
};

export default SignUp;