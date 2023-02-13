// useEffect：为react函数组件提供副作用处理
import {useState, useEffect} from 'react';

// 需求：修改数据后，把count值放到页面标题中
/**
 * 1.导入useEffect函数
 * 2.在函数组件中执行 传入回调 并且定义副作用
 * 3.当我们通过修改状态更新组件时，副作用也会不断执行
 */

// 依赖项控制副作用的执行时机
/**
 * 1.默认状态(无依赖项)：初始化的时候执行一次 每次数据修改组件更新时就再次执行
 * 2.添加一个空数组依赖项：仅在初始化的时候执行一次
 * 3.依赖特定项：组件初始化的时候执行一次 依赖的特定项发生变化时继续执行
 * 注意事项：在useEffect回调函数中用到的数据状态就应该出现在依赖项数组中，否则可能会有bug
 */

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('LooseLi');
  // 1.默认状态
  // useEffect(() => {
  //   document.title = count;
  // });
  // 2.添加一个空数组依赖项
  // useEffect(() => {
  //   console.log('副作用');
  //   document.title = 1;
  // }, []);
  // 3.依赖特定项
  useEffect(() => {
    document.title = count;
    console.log(name);
  }, [count, name]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setName('Leeson')}>{name}</button>
    </div>
  );
}

export default App;
