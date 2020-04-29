import React, {useState} from 'react';
import CenterBox from '../../../components/UI/CenterBox/CenterBox';
import {Button, Form, Input, notification} from 'antd';
import {formItemLayout, tailFormItemLayout} from '../FormLayoutConfig';
import AuthService from '../../../services/AuthService';

const Confirm = (props) => {

  const [form] = Form.useForm();
  const username = props.match.params.username;
  const [loading, setLoading] = useState(false);

  const confirmHandler = async (values) => {
    setLoading(true);
    const result = await AuthService.confirm(username, values.code);
    setLoading(false);
    if (result.success) {
      notification['success']({
        message: 'Welcome',
        description: 'You have successfully logged in.',
        duration: 5,
      });
      // todo storage user info into local storage
      props.history.push(`/`);
    } else {
      notification['error']({
        message: 'Could not log in',
        description: result.message,
        duration: 5,
      });
    }
  };

  const resendHandler = async () => {
    const result = await AuthService.resendConfirmationCode(username);
    if (result.success) {
      notification['success']({
        message: 'Resent successfully',
        description: 'New confirm code has been sent to your Email.',
        duration: 5,
      });
    } else {
      notification['error']({
        message: 'Could not resend code',
        description: result.message,
        duration: 5,
      });
    }
  };

  return (
    <CenterBox title='Use code to confirm your E-mail' width={8}>
      <Form form={form} name="confirm" onFinish={confirmHandler}>
        <Form.Item {...formItemLayout}
                   name="code"
                   label="Code"
                   rules={[{required: true, message: 'Please input your emailed code.'}]}>
          <Input/>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
          <Button type="link" htmlType="button" onClick={resendHandler}>
            Resend
          </Button>
        </Form.Item>
      </Form>
    </CenterBox>
  );
};

export default Confirm;