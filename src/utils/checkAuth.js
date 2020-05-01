import AuthService from '../services/AuthService';
import {notification} from 'antd';

const checkAuth = async (history, bypassCache) => {
  const result = await AuthService.getCurrentUser(bypassCache);
  if (result.success) {
    return result.user;
  } else {
    notification['warning']({
      message: 'Not logged in',
      description: 'You have not logged in yet. Please log in.',
      duration: 5,
    });
    history.push('/auth/sign-in');
  }
};

export default checkAuth;