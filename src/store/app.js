// 导入counterStore
// 导入中间件，完成响应式变化
import {observer} from 'mobx-react-lite';
import {useStore} from './index';

function App() {
  const rootStore = useStore();
  console.log(rootStore);
  return (
    <div>
      <h1>app</h1>
      <div>
        <span>{rootStore.listStore.list.join(',')}</span>
        <button onClick={rootStore.listStore.addList}>+</button>
      </div>
      <div>
        <span>{rootStore.counterStore.count}</span>
        <button onClick={rootStore.counterStore.addCount}>+</button>
      </div>
    </div>
  );
}

export default observer(App);
