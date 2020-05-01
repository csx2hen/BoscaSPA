import React from 'react';
import {Avatar, Dropdown, Menu, notification} from 'antd';
import AuthService from '../../../services/AuthService';

const UserState = (props) => {

  const signOutHandler = async () => {
    const result = await AuthService.signOut();
    if (result.success) {
      props.history.push('/auth/sign-in');
      notification['success']({
        message: 'Bye',
        description: 'You have successfully logged out.',
        duration: 3,
      });
    } else {
      notification['error']({
        message: 'Could not log out',
        description: result.message,
        duration: 5,
      });
    }
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={signOutHandler}>
        Sign out
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <Avatar shape="square" style={{backgroundColor: '#4267b2'}}>
        {props.name}
      </Avatar>
    </Dropdown>
  );
};

export default UserState;