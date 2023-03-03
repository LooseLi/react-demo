import React from 'react';
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import {Outlet, Link, useLocation} from 'react-router-dom';
import './index.scss';

const {Sider} = Layout;

const LayoutPages: React.FC = () => {
  const {pathname} = useLocation();
  return (
    <Layout>
      <Sider>
        <Menu mode="inline" theme="dark" defaultSelectedKeys={[pathname]}>
          <Menu.Item icon={<UserOutlined />} key="/">
            <Link to="/">数据概览</Link>
          </Menu.Item>
          <Menu.Item icon={<UploadOutlined />} key="/article">
            <Link to="/article">内容管理</Link>
          </Menu.Item>
          <Menu.Item icon={<VideoCameraOutlined />} key="/publish">
            <Link to="/publish">发布文章</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="layout-content" style={{padding: 20}}>
        <Outlet />
      </Layout>
    </Layout>
  );
};
export default LayoutPages;
