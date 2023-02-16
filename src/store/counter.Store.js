/**
 * 初始化mobx
 * 1. 定义数据状态(state)
 * 2. 数据响应式处理
 * 3. 定义action函数(修改函数)
 * 4. 实例化并导出实例
 */
import {makeAutoObservable} from 'mobx';
class CounterStore {
  // 定义数据
  count = 0;
  list = [1, 2, 3, 4, 5, 6];
  constructor() {
    // 把数据弄成响应式
    makeAutoObservable(this);
  }
  // 计算属性computed
  get filterList() {
    return this.list.filter(item => item > 2);
  }
  // 修改list
  addList = () => {
    this.list.push(7, 8, 9);
  };
  // 定义action函数，修改数据
  addCount = () => {
    this.count++;
  };
}

export {CounterStore};
