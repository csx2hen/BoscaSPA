import React from 'react';
import {Layout, Menu} from 'antd';
import {FileOutlined} from '@ant-design/icons';
import './MainLayout.css';

const {Header, Sider, Content} = Layout;

const MainLayout = (props) => {

  return (
    <Layout id="main-layout" style={{height: '100vh'}}>
      {/*left part*/}
      <Sider breakpoint="lg" collapsedWidth="0">
        {props.logo}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<FileOutlined/>}>
            File
          </Menu.Item>
        </Menu>
      </Sider>

      {/*right part*/}
      <Layout>
        <Header className="header">
          {props.header}
        </Header>
        <Content className="content">
          {props.content}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;