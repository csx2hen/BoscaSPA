import React, {useState} from 'react';
import CenterBox from '../../../components/UI/CenterBox/CenterBox';
import {Button, Form, Input, notification} from 'antd';
import {formItemLayout, tailFormItemLayout} from '../FormLayoutConfig';
import AuthService from '../../../services/AuthService';

const ResetPwdStep1 = (props) => {

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const resetPwdHandler = async (values) => {
    setLoading(true);
    const result = await AuthService.resetPwd(values.email);
    setLoading(false);
    if (result.success) {
      props.history.push(`/auth/reset-pwd/${result.username}`);
    } else {
      notification['error']({
        message: 'Could not reset your password',
        description: result.message,
        duration: 5,
      });
    }
  };

  return (
    <CenterBox title="Reset your password">
      <Form form={form} name="rest-pwd-step-1" onFinish={resetPwdHandler}>
        <Form.Item {...formItemLayout}
                   name="email"
                   label="E-mail"
                   rules={[
                     {
                       required: true,
                       message: 'Please input your e-mail address.',
                     },
                     {
                       type: 'email',
                       message: 'The input is not a valid e-mail address.',
                     },
                   ]}>
          <Input autoComplete="username"/>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </CenterBox>
  );
};

export default ResetPwdStep1;