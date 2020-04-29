import React from 'react';
import Amplify from 'aws-amplify';
import awsConfig from './config/awsConfig';
import SignIn from './containers/UserAuth/SignIn/SignIn';

Amplify.configure(awsConfig);

const App = () => {
  return (
    <div>
      My App
      <SignIn/>
    </div>
  );
};

export default App;
