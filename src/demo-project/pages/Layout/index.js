import React, {useEffect} from 'react';
import {UploadOutlined, UserOutlined, VideoCameraOutlined, LogoutOutlined} from '@ant-design/icons';
import {Layout, Menu, Popconfirm} from 'antd';
import {Outlet, Link, useLocation, useNavigate} from 'react-router-dom';
import './index.scss';
import {useStore} from '@/demo-project/store';
import {observer} from 'mobx-react-lite';

const {Sider, Header} = Layout;

const LayoutPages: React.FC = () => {
  const {pathname} = useLocation();
  const {userStore, loginStore} = useStore();
  useEffect(() => {
    userStore.getUserInfo();
  }, [userStore]);
  const navigate = useNavigate();
  const confirm = e => {
    console.log(e);
    loginStore.loginOut();
    navigate('/login');
  };
  return (
    <Layout>
      <Header className="header">
        <p className="logo">React后台系统</p>
        <div className="info">
          <span className="username">{userStore.userInfo.username}</span>
          <span>
            <Popconfirm title="登出" description="确定要退出吗？" onConfirm={confirm} okText="退出" cancelText="取消">
              <LogoutOutlined />
              退出
            </Popconfirm>
          </span>
        </div>
      </Header>
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
    </Layout>
  );
};
export default observer(LayoutPages);
