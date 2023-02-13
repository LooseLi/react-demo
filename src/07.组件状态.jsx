// 组件状态 类组件作为演示
import React from "react";

class TestComponent extends React.Component {
  // 1. 定义组件状态
  state = {
    name: '测试一下',
    list: [1,2,3,4],
    person: {
      name: 'jack',
      age: 20
    }
  }
  // 3. 修改state中的状态name
  // 注意：不可以直接做赋值修改 必须通过一个方法 setState
  changeName = () => {
    this.setState({
      // 在这里可以定义各种属性 全都是当前组件的状态
      name: 'loose.li',
      list: [...this.state.list, 5],
      person: {
        ...this.state.person,
        name: 'rose'
      },
    })
  }
  removeList = () => {
    this.setState({
      list: this.state.list.filter(item => item !== 2)
    })
  }
  render() {
    // render函数中的this已经被react内部做了修正，这里的this就是指向当前的组件实例对象
    // 2. 使用状态
    return (
      <div>
        <p>this is TestComponent</p>
        <p>当前名字：{this.state.name}</p>
        <ul>
          {this.state.list.map(item => <li key={item}>{item}</li>)}
        </ul>
        <p>{this.state.person.name}</p>
        <button onClick={this.changeName}>修改名称</button>
        <button onClick={this.removeList}>删除数组项</button>
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
