// 条件渲染
// 三元表达式  逻辑&&运算
const flag = true;

// 模版精简原则
const getHtag = type => {
  if(type === 1) {
    return <h1>this is H1</h1>
  }
  if(type === 2) {
    return <h2>this is H2</h2>
  }
  if(type === 3) {
    return <h3>this is H3</h3>
  }
}

function App() {
  return (
    <div className="App">
      {flag ? <span>this is 三元</span> : null}
      {true && <span>this is &&</span>}
      {getHtag(1)}
      {getHtag(2)}
      {getHtag(3)}
    </div>
  );
}

export default App;
