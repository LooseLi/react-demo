import React from 'react';
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import {Outlet} from 'react-router-dom';
import './index.scss';

const {Sider} = Layout;

const LayoutPages: React.FC = () => {
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
      <Layout className="layout-content">
        <Outlet />
      </Layout>
    </Layout>
  );
};
export default LayoutPages;
