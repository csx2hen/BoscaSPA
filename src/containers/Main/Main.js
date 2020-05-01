import React, {useEffect, useState} from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import AuthService from '../../services/AuthService';
import Logo from '../../components/Logo/Logo';
import Header from '../../components/Header/Header';


const Main = (props) => {

  const [user, setUser] = useState(null);
  const name = user ? user.attributes.preferred_username : null;

  // check Auth
  useEffect(() => {
    const checkAuth = async () => {
      const result = await AuthService.getCurrentUser(true);
      if (result.success) {
        setUser(result.user);
      } else {
        props.history.push('/auth/sign-in');
      }
    };
    checkAuth();
  }, []);

  return (
    <MainLayout header={<Header history={props.history} name={name}/>}
                logo={<Logo/>}/>
  );
};

export default Main;