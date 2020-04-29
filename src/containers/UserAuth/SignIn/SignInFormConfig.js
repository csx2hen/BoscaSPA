import {LockOutlined, UserOutlined} from '@ant-design/icons';

const config = [
  {
    name: 'email',
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
    placeholder: 'Password',
    icon: LockOutlined,
    rules: [
      {
        required: true,
        message: 'Please input your password.',
      },
    ],
  },
];

export default config;