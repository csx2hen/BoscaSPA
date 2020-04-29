import React from 'react';
import Amplify from 'aws-amplify';
import awsConfig from './config/awsConfig';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import UserAuth from './containers/UserAuth/UserAuth';

Amplify.configure(awsConfig);

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home}/>
        <Route path="/auth" component={UserAuth}/>
      </div>
    </BrowserRouter>

  );
};

export default App;
