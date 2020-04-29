import {Auth, Logger} from 'aws-amplify';

const logger = new Logger('AuthService', 'INFO');

class AuthService {

  static signIn = async (username, password) => {
    try {
      const data = await Auth.signIn(username, password);
      return {
        success: true,
        message: '',
        user: data,
      };
    } catch (err) {
      logger.error(err);
      return {
        success: false,
        message: err.message,
        error: err,
      };
    }
  };

  static signUp = async (username, password, name) => {
    try {
      const data = await Auth.signUp({
        username,
        password,
        attributes: {
          'preferred_username': name,
        },
      });
      logger.info(data);
      return {
        success: true,
        message: '',
        username: data.userSub,
      };
    } catch (err) {
      logger.error(err);
      return {
        success: false,
        message: err.message,
      };
    }
  };

  static resendConfirmationCode = async (username) => {
    try {
      await Auth.resendSignUp(username);
      return {
        success: true,
        message: '',
      };
    } catch (err) {
      logger.error(err);
      return {
        success: false,
        message: err.message,
      };
    }
  };

  static confirm = async (username, code) => {
    try {
      const data = await Auth.confirmSignUp(username, code);
      return {
        success: true,
        message: '',
        user: data,
      };
    } catch (err) {
      logger.error(err);
      return {
        success: false,
        message: err.message,
      };
    }
  };
}

export default AuthService;