import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Confirm from './Confirm/Confirm';
import ResetPwdStep1 from './ResetPwd/ResetPwdStep1';
import ResetPwdStep2 from './ResetPwd/ResetPwdStep2';

const UserAuth = (props) => {

  return (
    <Switch>
      <Route path="/auth/sign-in" exact component={SignIn}/>
      <Route path="/auth/sign-up" exact component={SignUp}/>
      <Route path="/auth/confirm/:username" exact component={Confirm}/>
      <Route path="/auth/reset-pwd" exact component={ResetPwdStep1}/>
      <Route path="/auth/reset-pwd/:username" exact component={ResetPwdStep2}/>
      <Redirect from="/auth" to="/404"/>
    </Switch>
  );
};

export default UserAuth;