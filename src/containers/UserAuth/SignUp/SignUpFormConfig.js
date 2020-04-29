const formContentConfig = [
  {
    name: 'email',
    label: 'E-mail',
    rules: [
      {
        required: true,
        message: 'Please input your E-mail address.',
      },
      {
        type: 'email',
        message: 'The input is not a valid E-mail address.',
      },
    ],
  },
  {
    name: 'name',
    label: 'Name',
    rules: [
      {
        required: true,
        message: 'Please input your preferred username.',
      },
    ],
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    hasFeedback: true,
    rules: [
      {
        required: true,
        message: 'Please input your password.',
      },
      {
        validator: (rule, value) => {
          const format = /[a-z]/;
          if (value && !format.test(value)) {
            return Promise.reject('• No lowercase letters');
          }
          return Promise.resolve();
        },
      },
      {
        validator: (rule, value) => {
          const format = /[A-Z]/;
          if (value && !format.test(value)) {
            return Promise.reject('• No uppercase letters');
          }
          return Promise.resolve();
        },
      },
      {
        validator: (rule, value) => {
          const format = /[0-9]/;
          if (value && !format.test(value)) {
            return Promise.reject('• No numbers');
          }
          return Promise.resolve();
        },
      },
      {
        validator: (rule, value) => {
          const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
          if (value && !format.test(value)) {
            return Promise.reject('• No special characters');
          }
          return Promise.resolve();
        },
      },
      {
        validator: (rule, value) => {
          if (value && value.length < 8) {
            return Promise.reject('• Less than 8 characters');
          }
          return Promise.resolve();
        },
      },
    ],
  },
  {
    name: 'confirm',
    type: 'password',
    label: 'Confirm Password',
    hasFeedback: true,
    dependencies: ['password'],
    rules: [
      {
        required: true,
        message: 'Please confirm your password.',
      },
      ({getFieldValue}) => ({
        validator(rule, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject('The two passwords do not match.');
        },
      }),
    ],
  },
];

export default formContentConfig;