/**
 * Hooks的本质：一套能够使函数组件更强大、更灵活的钩子
 * React的设计理念：UI = f(data)
 *
 * Hooks解决的问题：
 * 1. 组件的状态逻辑复用
 * 2. class组件自身的问题(比较难理解)
 */

// useState
// 1. 导入useState函数 react
// 2. 执行这个函数并传入初始值 必须在函数组件中
// 3. [数据, 修改数据的方法]
// 4. 使用数据 修改数据

// 状态的读取和修改
// const [count, setCount] = useState(0);
// 1. useState传过来的参数 作为count的初始值
// 2. [count, setCount] 这里的写法是一个解构赋值 useState返回值是一个数组
//    第一个参数是数据状态 第二个参数是修改数据的方法
// 3. setCount只能用来修改对应的count值

// 首次渲染/更新渲染
// useState 初始值只在首次渲染生效 后续只要调用setCount整个app中代码都会执行，此时count每次拿到的都是最新值

/**
 * useState
 * 1. 可以执行多次 互不影响
 * 2. 只能出现在函数组件中
 * 3. 不能嵌套在if/for其他函数中
 */
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default App;
