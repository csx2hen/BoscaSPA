import React from 'react';
import {Card, List} from 'antd';
import {DeleteOutlined, DownloadOutlined, SettingOutlined} from '@ant-design/icons';
import FileTypeIcon from '../../FileTypeIcon/FileTypeIcon';

const {Meta} = Card;

const FileGridList = (props) => {

  const listGridLayout = {
    gutter: 16,
    xs: 1,
    sm: 2,
    md: 4,
    lg: 4,
    xl: 4,
    xxl: 6,
  };

  const renderItem = (item) => {
    return (
      <List.Item>
        <Card hoverable
              size="small"
              actions={[
                <DownloadOutlined key="download"/>,
                <SettingOutlined key="setting"/>,
                <DeleteOutlined key="delete"/>,
              ]}
        >
          <Meta avatar={<FileTypeIcon fileName={item.key}/>}
                title={item.key}
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
      />
    </div>
  );
};

export default FileGridList;