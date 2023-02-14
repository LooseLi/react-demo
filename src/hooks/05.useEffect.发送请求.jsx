import {useEffect} from 'react';

// useEffect 发送请求
// 注意事项：async 只能加在自定义函数中
function App() {
  useEffect(() => {
    async function initData() {
      const res = await fetch('');
      console.log(res);
    }
    initData();
  }, []);
  return <div></div>;
}

export default App;
