import React, {useState} from 'react';
import {Button, Form, Input, notification} from 'antd';
import AuthService from '../../../services/AuthService';
import CenterBox from '../../../components/UI/CenterBox/CenterBox';
import {formItemLayout, tailFormItemLayout} from '../FormLayoutConfig';
import formContentConfig from './ResetPwdS2FormConfig';

const ResetPwdStep2 = (props) => {

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const username = props.match.params.username;

  const setNewPwdHandler = async (values) => {
    setLoading(true);
    const result = await AuthService.setNewPwd(username, values.code, values.password);
    setLoading(false);
    if (result.success) {
      notification['success']({
        message: 'Password reset',
        description: 'You have successfully reset your password.',
        duration: 5,
      });
      props.history.push('/auth/sign-in');
    } else {
      notification['error']({
        message: 'Could not reset your password',
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
        <Input type={e.type} autoComplete={e.autoComplete}/>
      </Form.Item>
    );
  });

  return (
    <CenterBox title="Set new password">
      <Form form={form} name="rest-pwd-step-2" onFinish={setNewPwdHandler}>
        {/*Just for autoComplete hint.*/}
        <Form.Item {...formItemLayout} name="username" label="Username" style={{display: 'none'}}>
          <Input disabled value={username} autoComplete="username"/>
        </Form.Item>

        {formItems}
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </CenterBox>
  );
};

export default ResetPwdStep2;