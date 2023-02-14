import {useState} from 'react';

// useState 函数作为参数
function Count(props) {
  const [count, setCount] = useState(() => {
    return props.count;
  });
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

function App() {
  return (
    <div>
      <Count count={10} />
      <Count count={16} />
    </div>
  );
}

export default App;
