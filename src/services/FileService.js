import {Logger, Storage} from 'aws-amplify';

const logger = new Logger('FileService', 'INFO');


class FileService {

  static upload = async (filename, file, onProgress) => {
    try {
      const data = await Storage.vault.put(filename, file, {
        progressCallback(progress) {
          onProgress(filename, Math.round(progress.loaded / progress.total * 100).toFixed(2));
        },
      });
      return {
        success: true,
        message: '',
        storedName: data.key,
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

  static list = async (path) => {
    try {
      const data = await Storage.vault.list(path);
      return {
        success: true,
        message: '',
        fileList: data,
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

  static download = async (key) => {
    try {
      const data = await Storage.vault.get(key);
      return {
        success: true,
        message: '',
        url: data,
      };
    } catch (err) {
      logger.error(err);
      return {
        success: false,
        message: err.message,
      };
    }
  };

  static delete = async (key) => {
    try {
      await Storage.vault.remove(key);
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

export default FileService;