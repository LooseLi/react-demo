import useWindowScroll from './hooks/demo-useWindowScroll';
import useLocalStorage from './hooks/demo-useLocalStorage';

function App() {
  const [y] = useWindowScroll();
  const [message, setMessage] = useLocalStorage('hook-message', 'test');
  setTimeout(() => {
    setMessage('Leeson');
  }, 3000);
  return (
    <div style={{height: '2000px'}}>
      {y}---{message}
    </div>
  );
}

export default App;
