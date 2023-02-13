import './app.css';
// jsx 样式控制
// 1.行内样式 - 在元素身上绑定一个style属性
const style = {
  color: 'red',
  fontSize: '30px',
};
// 2.类名样式 - 在元素身上绑定一个className属性

// 动态类名
const flag = false;

function App() {
  return (
    <div className="App">
      <p style={style}>行内样式</p>
      <p className={flag ? 'active' : ''}>类名样式</p>
    </div>
  );
}

export default App;
