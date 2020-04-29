import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {

  return (
    <div>
      Welcome to Bosca!
      <Link to="/auth/sign-in">Sign in</Link>
    </div>
  );
};

export default Home;