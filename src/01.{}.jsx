// 1.识别常规的变量
const name = 'loose.li';
// 2.原生js方法调用
const fn = () => {
  return 100;
};
// 3.三元运算符
const flag = true;

function App() {
  return (
    <div className="App">
      {name}
      {fn()}
      {flag ? '真棒' : '真菜'}
    </div>
  );
}

export default App;
