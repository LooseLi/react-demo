// 组合子模块
// 封装统一导出的供业务使用的方法
import React from 'react';
import {ListStore} from './list.Store';
import {CounterStore} from './counter.Store';

// 1.声明一个rootStore
class RootStore {
  constructor() {
    // 对子模块进行实例化操作
    this.listStore = new ListStore();
    this.counterStore = new CounterStore();
  }
}

// 实例化root
const rootStore = new RootStore();
// 使用react context机制 完成统一方法封装
const context = React.createContext(rootStore);
// 通过 useContext 拿到rootStore实例对象并返回
const useStore = () => React.useContext(context);

export {useStore};
