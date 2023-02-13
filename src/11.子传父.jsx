// 子传父
import React from "react";

function SonF({fn}) {
  const msg = '我是子组件里的数据'
  const sonFn = () => {
    fn(msg)
  }
  return (
    <div>
      <button onClick={sonFn}>父组件中的方法</button>
    </div>
  )
}

class App extends React.Component {
  state = {
  }
  testF = (sonMsg) => {
    console.log(sonMsg);
  }
  render() {
    return (
      <div>
        <SonF fn={this.testF} />
      </div>
    )
  }
}

export default App;
