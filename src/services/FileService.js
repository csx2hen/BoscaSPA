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
      logger.info(data);
      return {
        success: true,
        message: '',
        response: data,
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