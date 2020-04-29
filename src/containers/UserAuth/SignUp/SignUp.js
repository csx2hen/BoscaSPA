import React from 'react';
import {formContentConfig, formItemLayout, tailFormItemLayout} from './SignUpFormConfig';
import {Button, Form, Input} from 'antd';
import CenterBox from '../../../components/UI/CenterBox/CenterBox';

const SignUp = (props) => {

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
      <Form>
        {formItems}
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Create account
          </Button>
        </Form.Item>
      </Form>
    </CenterBox>
  );
};

export default SignUp;