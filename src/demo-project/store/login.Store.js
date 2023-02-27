import {makeAutoObservable} from 'mobx';

class LoginStore {
  token = '';
  constructor() {
    makeAutoObservable(this);
  }
  setToken = ({username, password}) => {};
}

export default LoginStore;
