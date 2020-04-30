const formContentConfig = [
  {
    name: 'code',
    label: 'Code',
    autoComplete: 'off',
    rules: [
      {
        required: true,
        message: 'Please input your emailed code.',
      },
    ],
  },
  {
    name: 'password',
    type: 'password',
    label: 'New Password',
    hasFeedback: true,
    autoComplete: 'new-password',
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
    autoComplete: 'new-password',
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