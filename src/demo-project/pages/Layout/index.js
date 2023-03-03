import React from 'react';
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';
import './index.scss';

const {Header, Content, Sider} = Layout;

const LayoutPages: React.FC = () => {
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <Layout>
      <Sider>
        <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']}>
          <Menu.Item icon={<UserOutlined />} key="1">
            数据概览
          </Menu.Item>
          <Menu.Item icon={<UploadOutlined />} key="2">
            内容管理
          </Menu.Item>
          <Menu.Item icon={<VideoCameraOutlined />} key="3">
            发布文章
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='layout-content'>内容</Layout>
    </Layout>
  );
};
export default LayoutPages;
