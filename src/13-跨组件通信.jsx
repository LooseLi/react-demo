// 跨组件通信
import React, {createContext} from "react";

const {Provider, Consumer} = createContext()

function SonA() {
  return (
    <div>
      我是组件A
      <SonB/>
    </div>
  )
}

function SonB() {
  return (
    <div>
      我是组件B
      <Consumer>
        {value => <p>{value}</p>}
      </Consumer>
    </div>
  )
}

class App extends React.Component {
  state = {
    message: 'App中的数据'
  }
  render() {
    return (
      <div>
      <Provider value={this.state.message}>
        <SonA />
      </Provider>
      </div>
    )
  }
}

export default App;
