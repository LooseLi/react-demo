import React from 'react';
import UserStore from './user.Store';
import LoginStore from './login.Store';

// 把所有的模块做统一处理
// 导出一个统一的方法 useStore
class RootStore {
  constructor() {
    this.userStore = new UserStore();
    this.loginStore = new LoginStore();
  }
}

const rootStore = new RootStore();
const context = React.createContext(rootStore);

const useStore = () => React.useContext(context);

export {useStore};
