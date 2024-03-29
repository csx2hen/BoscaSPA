import React from 'react';
import Amplify from 'aws-amplify';
import awsConfig from './config/awsConfig';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserAuth from './containers/UserAuth/UserAuth';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Main from './containers/Main/Main';


Amplify.configure(awsConfig);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" component={Main}/>
        <Route path="/auth" component={UserAuth}/>
        <Route path="/" component={PageNotFound}/>
      </Switch>
    </BrowserRouter>

  );
};

export default App;
