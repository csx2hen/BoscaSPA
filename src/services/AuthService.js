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
      return {
        success: true,
        message: '',
        username: username,
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

  static resetPwd = async (username) => {
    try {
      await Auth.forgotPassword(username);
      return {
        success: true,
        message: '',
        username: username,
      };
    } catch (err) {
      logger.error(err);
      return {
        success: false,
        message: err.message,
      };
    }
  };

  static setNewPwd = async (username, code, newPwd) => {
    try {
      const data = await Auth.forgotPasswordSubmit(username, code, newPwd);
      return {
        success: true,
        message: '',
        username: username,
      };
    } catch (err) {
      logger.error(err);
      return {
        success: false,
        message: err.message,
      };
    }
  };

  static getCurrentUser = async (bypassCache = false) => {
    try {
      const data = await Auth.currentAuthenticatedUser({bypassCache: bypassCache});
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

  static signOut = async () => {
    try {
      await Auth.signOut();
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
}

export default AuthService;