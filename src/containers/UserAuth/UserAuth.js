import React from 'react';
import {Route} from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Confirm from './Confirm/Confirm';
import RestPwd from './RestPwd/RestPwd';

const UserAuth = (props) => {

  return (
    <div>
      <Route path="/auth/sign-in" exact component={SignIn}/>
      <Route path="/auth/sign-up" exact component={SignUp}/>
      <Route path="/auth/confirm/:uid" exact component={Confirm}/>
      <Route path="/auth/rest-pwd" exact component={RestPwd}/>
    </div>
  );
};

export default UserAuth;