// 导入counterStore
// 导入中间件，完成响应式变化
import {observer} from 'mobx-react-lite';
import {counterStore} from './counter';

function App() {
  return (
    <div>
      <h1>app</h1>
      <span>{counterStore.count}</span>
      <button onClick={counterStore.addCount}>+</button>
    </div>
  );
}

export default observer(App);
