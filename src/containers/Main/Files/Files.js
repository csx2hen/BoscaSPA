import React, {useEffect, useState} from 'react';
import FileService from '../../../services/FileService';
import UploadArea from '../../../components/UploadArea/UploadArea';
import FileGridList from '../../../components/FileList/GridList/FileGridList';
import {notification, Space, Spin} from 'antd';

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

  useEffect(() => {
    updateFileList();
  }, []);


  return (
    <Space direction="vertical" size="large" style={{width: '100%'}}>
      <UploadArea/>
      <Spin spinning={loading} tip="Loading..." size="large">
        <FileGridList fileList={fileList}/>
      </Spin>
    </Space>
  );
};

export default Files;