// React：框架的核心包
// ReactDom：专门做渲染相关的包
import React from 'react';
import ReactDOM from 'react-dom/client';
// 应用的全局样式文件
// import './index.css';
import './demo-project/index.scss';
// 引入根组件
// import App from './App';
import App from './demo-project/App';

// 渲染根组件App到一个id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 注释严格模式
  <App />
);
