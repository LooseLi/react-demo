import React from "react";

// 函数组件的创建和渲染
function Hello() {
  // 事件对象e
  const helloClick = (e) => {
    e.preventDefault();
    console.log(`函数组件事件`, e);
  }
  return <p><a onClick={helloClick} href="http://baidu.com">函数组件</a></p>
}

// 类组件的创建和渲染
class HelloComponent extends React.Component{
  // 事件回调函数(标准写法 避免this指向问题)

  // 如何传递自定义参数
  // 1. 只需要额外参数 {click} -> {() => click('自定义的参数')}
  // 2. 既需要e，也需要额外参数 {() => click('自定义的参数')} -> {(e) => click(e, '自定义的参数')}
  helloComponentClick = (e, msg) => {
    console.log(`类组件`, e, msg);
  }
  render() {
    return <p onClick={(e) => this.helloComponentClick(e, '自定义传参')}>类组件</p>
  }
}
function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <HelloComponent></HelloComponent>
    </div>
  );
}

export default App;
