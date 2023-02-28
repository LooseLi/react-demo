import {makeAutoObservable} from 'mobx';

class LoginStore {
  token = '';
  constructor() {
    makeAutoObservable(this);
  }
  getToken = ({username, password}) => {
    console.log(username, password);
    this.token = 'leeson';
  };
}

export default LoginStore;
