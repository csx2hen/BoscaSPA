import React from 'react';
import {notification, Upload} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import FileService from '../../../services/FileService';


const {Dragger} = Upload;

const Files = (props) => {

  // const [userToken, setUserToken] = useState(null);

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     setUserToken(await getUserToken(props.history));
  //   };
  //   checkAuth();
  // }, []);

  // check user auth
  // const beforeUpload = async () => {
  //   setUserToken(await getUserToken(props.history));
  // };

  // custom upload request
  // const customRequest = ({action, data, file, filename, headers, onError, onProgress, onSuccess, withCredentials}) => {
  //   const formData = new FormData();
  //   if (data) {
  //     Object.keys(data).forEach(key => {
  //       formData.append(key, data[key]);
  //     });
  //   }
  //   formData.append(filename, file);
  //
  //   axios.post(action, formData, {
  //     withCredentials,
  //     headers,
  //     onUploadProgress: ({total, loaded}) => {
  //       onProgress({percent: Math.round(loaded / total * 100).toFixed(2)}, file);
  //     },
  //   })
  //     .then(({data: response}) => {
  //       onSuccess(response, file);
  //     })
  //     .catch(onError);
  //   return {
  //     abort() {
  //       console.log('Upload progress is aborted.');
  //     },
  //   };
  // };

  const customRequest = async ({file, filename, onError, onProgress, onSuccess}) => {
    const result = await FileService.upload(file.name, file, onProgress);
    if (result.success) {
      // onSuccess(result.response);
      notification['success']({
        message: 'Uploaded',
        description: `You have successfully uploaded the file, "${file.name}".`,
        duration: 3,
      });
    } else {
      // onError(result.error);
      notification['error']({
        message: 'Could not upload',
        description: result.message,
        duration: 5,
      });
    }
    return {
      abort() {
        console.log('Upload progress is aborted.');
      },
    };
  };

  const uploadProps = {
    multiple: true,
    showUploadList: false,
    // action: 'https://api.bosca.tyrandee.com/dev/files',
    // headers: {
    //   Authorization: `Bearer ${userToken}`,
    // },
    // beforeUpload: beforeUpload,
    customRequest: customRequest,
  };

  return (
    <div>
      <Dragger {...uploadProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined/>
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </Dragger>
    </div>
  );
};

export default Files;