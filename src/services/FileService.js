import {Logger, Storage} from 'aws-amplify';

const logger = new Logger('FileService', 'INFO');


class FileService {

  static upload = async (filename, file, onProgress) => {
    try {
      const data = await Storage.vault.put(filename, file, {
        progressCallback(progress) {
          onProgress({percent: Math.round(progress.loaded / progress.total * 100).toFixed(2)});
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
      logger.info(data);
      return {
        success: true,
        message: '',
        data: data,
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
}

export default FileService;