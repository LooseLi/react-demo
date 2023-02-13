// 兄弟通信
import React from "react";

function SonA({message}) {
  return (
    <div>
      我是子组件A，{message}
    </div>
  )
}

function SonB({fn}) {
  const msg = '我是子组件B中的数据'
  return (
    <div>
      <button onClick={() => fn(msg)}>将子组件B中的数据传给App</button>
    </div>
  )
}

class App extends React.Component {
  state = {
    message: ''
  }
  getBMsg = (message) => {
    this.setState({
      message
    })
  }
  render() {
    return (
      <div>
        <SonA message={this.state.message} />
        <SonB fn={this.getBMsg} />
      </div>
    )
  }
}

export default App;
