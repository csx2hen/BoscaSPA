import React, {useEffect, useState} from 'react';
import FileService from '../../../services/FileService';
import UploadArea from '../../../components/UploadArea/UploadArea';
import FileGridList from '../../../components/FileList/GridList/FileGridList';
import {notification, Space} from 'antd';
import downloadURI from '../../../utils/downloadURI';

const Files = (props) => {

  // check user auth
  // const [userToken, setUserToken] = useState(null);
  // useEffect(() => {
  //   const checkAuth = async () => {
  //     setUserToken(await getUserToken(props.history));
  //   };
  //   checkAuth();
  // }, []);

  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateFileList = async () => {
    setLoading(true);
    const result = await FileService.list('');
    setLoading(false);
    if (result.success) {
      setFileList(result.fileList);
    } else {
      notification['error']({
        message: 'Could not load file list',
        description: result.message,
        duration: 5,
      });
    }
  };

  const downloadHandler = async (key) => {
    const result = await FileService.download(key);
    if (result.success) {
      const url = result.url;
      downloadURI(url, key);
    } else {
      notification['error']({
        message: `Could not download the file, ${key}`,
        description: result.message,
        duration: 5,
      });
    }
  };

  const deleteHandler = async (key) => {
    const result = await FileService.delete(key);
    if (result.success) {
      updateFileList();
      notification['success']({
        message: 'Removed',
        description: `You have successfully deleted the file, ${key}.`,
        duration: 3,
      });
    } else {
      notification['error']({
        message: `Could not delete the file, ${key}`,
        description: result.message,
        duration: 5,
      });
    }
  };

  useEffect(() => {
    updateFileList();
  }, []);

  return (
    <Space direction="vertical" size="large" style={{width: '100%'}}>
      <UploadArea/>
      <FileGridList fileList={fileList}
                    download={downloadHandler}
                    delete={deleteHandler}
                    loading={loading}

      />

    </Space>
  );
};

export default Files;