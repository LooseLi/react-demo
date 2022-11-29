// 函数组件的创建和渲染
function Hello() {
  return <p>函数组件</p>
}

function App() {
  return (
    <div className="App">
      <Hello></Hello>
    </div>
  );
}

export default App;
