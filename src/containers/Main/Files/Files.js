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
  const [uploadProgress, setUploadProgress] = useState(new Map());

  const updateFileList = async () => {
    setLoading(true);
    const result = await FileService.list('');
    setLoading(false);
    if (result.success) {
      const list = result.fileList.sort((a, b) => {
        if (a.lastModified > b.lastModified) return -1;
        if (a.lastModified < b.lastModified) return 1;
        return 0;
      });
      setFileList(list);
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

  const putUploadingPlaceholder = (key) => {
    const newFileList = [...fileList];
    newFileList.unshift({
      loading: true,
      key: key,
    });
    setFileList(newFileList);
  };

  const updateUploadProgress = (key, percent) => {
    const newProgress = new Map(uploadProgress);
    newProgress.set(key, percent);
    setUploadProgress(newProgress);
  };

  useEffect(() => {
    updateFileList();
  }, []);

  return (
    <Space direction="vertical" size="large" style={{width: '100%'}}>
      <UploadArea onUploadStart={putUploadingPlaceholder}
                  onUploadFinish={updateFileList}
                  onProgress={updateUploadProgress}
      />
      <FileGridList fileList={fileList}
                    download={downloadHandler}
                    delete={deleteHandler}
                    loading={loading}
                    uploadProgress={uploadProgress}
      />

    </Space>
  );
};

export default Files;