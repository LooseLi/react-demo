import React from "react";

// 函数组件的创建和渲染
function Hello() {
  const helloClick = () => {
    console.log('函数组件事件');
  }
  return <p onClick={helloClick}>函数组件</p>
}

// 类组件的创建和渲染
class HelloComponent extends React.Component{
  // 事件回调函数(标准写法 避免this指向问题)
  helloComponentClick = () => {
    console.log('类组件事件');
  }
  render() {
    return <p onClick={this.helloComponentClick}>类组件</p>
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
