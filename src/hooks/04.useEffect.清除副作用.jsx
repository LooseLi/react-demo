import {useEffect, useState} from 'react';

// useEffect 清除副作用
function Count() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('setInterval');
    }, 1000);
    // 清除副作用
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>this is count</div>;
}

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      {flag ? <Count /> : null}
      <button onClick={() => setFlag(!flag)}>{flag ? 1 : 0}</button>
    </div>
  );
}

export default App;
