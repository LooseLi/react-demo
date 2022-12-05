// 受控组件
import React from "react";

class TestComponent extends React.Component {
  state = {
    message: 'test'
  }
  inputChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type='text' value={this.state.message} onChange={this.inputChange} />
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <TestComponent />
    </div>
  );
}

export default App;

/**
 * 总结
 * 1. 编写组件其实就是编写原生js类或函数
 * 2. 定义状态必须通过state实例属性的方法，提供一个对象，名称是固定的就叫做state
 * 3. 修改state中的任何属性，都不可以通过直接赋值 必须走setState方法，这个方法来自于继承
 * 4. 这里的this关键词很容易出现指向错误的问题
 */
