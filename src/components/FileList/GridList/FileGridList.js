import React from 'react';
import {Card, Col, List, Modal, Progress, Row, Tooltip} from 'antd';
import {DeleteOutlined, DownloadOutlined, ExclamationCircleOutlined, SettingOutlined} from '@ant-design/icons';
import FileTypeIcon from '../../FileTypeIcon/FileTypeIcon';

const {Meta} = Card;
const {confirm} = Modal;

const FileGridList = (props) => {

  const listGridLayout = {
    gutter: 16,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 4,
    xxl: 6,
  };

  const showDeleteConfirm = (key) => {
    confirm({
      title: 'Are you sure to delete this file?',
      icon: <ExclamationCircleOutlined/>,
      content: `The file, ${key}, will be removed permanently.`,
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        props.delete(key);
      },
    });
  };


  const renderItem = (item) => {
    if (item.loading) {
      return (
        <List.Item>
          <Card size="small"
                actions={[(
                  <Row justify="center">
                    <Col span={22}>
                      <Progress percent={props.uploadProgress.get(item.key)} showInfo={false}/>
                    </Col>
                  </Row>
                )]}
          >
            <Meta avatar={<FileTypeIcon fileName={item.key}/>}
                  title={
                    (
                      <Tooltip placement="topLeft" title={item.key}>
                        <span>{item.key}</span>
                      </Tooltip>
                    )
                  }
            />
          </Card>
        </List.Item>
      );
    }

    return (
      <List.Item>
        <Card hoverable
              size="small"
              actions={[
                <DownloadOutlined key="download" onClick={() => props.download(item.key)}/>,
                <SettingOutlined key="setting"/>,
                <DeleteOutlined key="delete" onClick={() => showDeleteConfirm(item.key)}/>,
              ]}
        >
          <Meta avatar={<FileTypeIcon fileName={item.key}/>}
                title={
                  (
                    <Tooltip placement="topLeft" title={item.key}>
                      <span>{item.key}</span>
                    </Tooltip>
                  )
                }
                description={item.lastModified.toLocaleString('en-US')}/>
        </Card>
      </List.Item>
    );
  };

  return (
    <div>
      <List grid={listGridLayout}
            dataSource={props.fileList}
            renderItem={renderItem}
            pagination={{pageSize: 16}}
            loading={{
              spinning: props.loading,
              tip: 'Loading...',
              size: 'large',
            }}
      />
    </div>
  );
};

export default FileGridList;