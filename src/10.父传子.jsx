// 组件通信 父传子
import React from "react";

/**
 * props
 * 满足单项数据流，只读
 */

function SonF({msg, list, person, fn}) {
  return (
    <div>
      <h3>函数子组件, {msg}</h3>
      <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>
      <p>{person.name}</p>
      <button onClick={fn}>父组件中的方法</button>
    </div>
  )
}

class SonC extends React.Component {
  render() {
    const {msg, list, person, fn} = this.props;
    return (
      <div>
      <h3>类子组件, {msg}</h3>
      <ul>{list.map(item => <li key={item}>{item}</li>)}</ul>
      <p>{person.name}</p>
      <button onClick={fn}>父组件中的方法</button>
    </div>
    )
  }
}

class App extends React.Component {
  state = {
    message: '父组件数据',
    list: [1, 2, 3, 4, 5],
    personObj: {
      name: 'loose.li'
    }
  }
  testF = () => {
    console.log('父组件中的方法');
  }
  render() {
    return (
      <div>
        <SonF msg={this.state.message} list={this.state.list} person={this.state.personObj} fn={this.testF} />
        <SonC msg={this.state.message} list={this.state.list} person={this.state.personObj} fn={this.testF} />
      </div>
    )
  }
}

export default App;
