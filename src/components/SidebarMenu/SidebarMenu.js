import React from 'react';
import {Menu} from 'antd';
import {FileOutlined} from '@ant-design/icons';

const SidebarMenu = (props) => {

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<FileOutlined/>}>
        File
      </Menu.Item>
    </Menu>
  );
};

export default SidebarMenu;