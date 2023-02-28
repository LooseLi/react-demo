import {makeAutoObservable} from 'mobx';
import {setToken, getToken} from '@/demo-project/utils/index';

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
}

export default LoginStore;
