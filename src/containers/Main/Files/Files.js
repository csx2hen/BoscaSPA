import React, {useEffect, useState} from 'react';
import {Upload} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import getUserToken from '../../../utils/getUserToken';
import axios from 'axios';


const {Dragger} = Upload;

const Files = (props) => {

  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      setUserToken(await getUserToken(props.history));
    };
    checkAuth();
  }, []);

  // check user auth
  const beforeUpload = async () => {
    setUserToken(await getUserToken(props.history));
  };

  const customRequest = ({action, data, file, filename, headers, onError, onProgress, onSuccess, withCredentials}) => {
    const formData = new FormData();
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
    }
    formData.append(filename, file);

    axios.post(action, formData, {
      withCredentials,
      headers,
      onUploadProgress: ({total, loaded}) => {
        onProgress({percent: Math.round(loaded / total * 100).toFixed(2)}, file);
      },
    })
      .then(({data: response}) => {
        onSuccess(response, file);
      })
      .catch(onError);
    return {
      abort() {
        console.log('Upload progress is aborted.');
      },
    };
  };

  const uploadProps = {
    multiple: true,
    action: 'https://api.bosca.tyrandee.com/dev/files',
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    beforeUpload: beforeUpload,
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