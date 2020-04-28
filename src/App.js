import React from 'react';
import Amplify from 'aws-amplify';
import awsConfig from './config/awsConfig';

Amplify.configure(awsConfig);

const App = () => {
  return (
    <div>
      My App
    </div>
  );
};

export default App;
