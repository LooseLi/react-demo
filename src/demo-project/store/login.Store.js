import {makeAutoObservable} from 'mobx';
import {setToken, getToken, removeToken} from '@/demo-project/utils/index';

class LoginStore {
  token = getToken() || '';
  constructor() {
    makeAutoObservable(this);
  }
  getToken = ({username, password}) => {
    console.log(username, password);
    this.token = 'leeson';
    // 存入localStorage
    setToken(this.token);
  };
  loginOut = () => {
    this.token = '';
    removeToken();
  };
}

export default LoginStore;
