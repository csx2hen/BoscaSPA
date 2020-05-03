const awsConfig = {
  Auth: {
    identityPoolId: 'us-west-2:c7666fcf-0976-4a22-b595-0949ebb5545d',
    region: 'us-west-2',
    userPoolId: 'us-west-2_oAS7boRtM',
    userPoolWebClientId: '1sod7oaeti4l10dqqe6aivdttu',
  },
  Storage: {
    AWSS3: {
      bucket: 'bosca-user-files',
      region: 'us-west-2',
    },
  },

};

export default awsConfig;