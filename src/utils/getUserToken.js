import AuthService from '../services/AuthService';
import {notification} from 'antd';

const getUserToken = async (history) => {
  const result = await AuthService.getCurrentSession();
  if (result.success) {
    return result.session.getIdToken().getJwtToken();
  } else {
    notification['warning']({
      message: 'Not logged in',
      description: 'You have not logged in yet. Please log in.',
      duration: 5,
    });
    history.push('/auth/sign-in');
  }
};

export default getUserToken;