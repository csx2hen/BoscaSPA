import React from 'react';
import {Layout} from 'antd';
import './MainLayout.css';

const {Header, Sider, Content} = Layout;

const MainLayout = (props) => {

  return (
    <Layout id="main-layout" style={{height: '100vh'}}>
      {/*left part*/}
      <Sider breakpoint="lg" collapsedWidth="0">
        {props.logo}
        {props.menu}
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