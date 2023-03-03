import {makeAutoObservable} from 'mobx';

class UserStore {
  userInfo = {};
  constructor() {
    makeAutoObservable(this);
  }
  getUserInfo = () => {
    const info = {
      username: 'leeson',
      age: 2,
      phone: 18811111111,
    };
    this.userInfo = info;
  };
}

export default UserStore;
