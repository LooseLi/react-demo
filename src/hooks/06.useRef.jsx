import React, {useRef, useEffect} from 'react';
// useRef 获取实例，故只存在于类组件中
class Test extends React.Component {
  render() {
    return <div>this is test</div>;
  }
}

function App() {
  const testRef = useRef(null);
  const h1Ref = useRef(null);
  useEffect(() => {
    console.log(testRef.current);
    console.log(h1Ref.current);
  }, []);
  return (
    <>
      <Test ref={testRef} />
      <h1 ref={h1Ref}>title</h1>
    </>
  );
}

export default App;
