import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '@/demo-project/pages/Layout';
import Login from '@/demo-project/pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
