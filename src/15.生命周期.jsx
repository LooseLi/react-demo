/**
 * 生命周期(类组件需要实例化，所以有生命周期；函数组件不需要实例化，所以没有生命周期)
 * 挂载时 钩子函数：constructor render componentDidMount
 * 更新时(setState) 钩子函数：render componentDidUpdate
 * 卸载时 钩子函数：componentWillUnmount
 *
 * Render阶段(constructor、render)：纯净且不包含副作用
 * Commit阶段(componentDidMount、componentDidUpdate、钩子函数：componentWillUnmount)：可以使用DOM、运行副作用、发请求等
 */
import React from 'react';

// 卸载阶段(删除定时器等等)
class Test extends React.Component {
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return <p>111</p>;
  }
}

class App extends React.Component {
  // constructor 最早执行 (该钩子函数已不常用)
  constructor() {
    super();
    console.log('constructor');
  }
  // !!!组件完全挂载完毕，类似vue mounted
  componentDidMount() {
    console.log('componentDidMount');
  }
  // 组件更新后执行(DOM渲染完毕)
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  state = {
    count: 0,
    flag: true,
  };
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
      flag: !this.state.flag,
    });
  };
  // 每次组件渲染都会触发(只负责渲染UI)
  render() {
    console.log('render');
    return (
      <>
        <p>lala</p>
        <button onClick={this.clickHandler}>{this.state.count}</button>
        {this.state.flag ? <Test /> : ''}
      </>
    );
  }
}

export default App;
