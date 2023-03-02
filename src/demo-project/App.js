import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LayoutPages from '@/demo-project/pages/Layout';
import Login from '@/demo-project/pages/Login';
import {AuthComponent} from '@/demo-project/components/AuthComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* Layout需要鉴权处理 */}
          <Route
            path="/"
            element={
              <AuthComponent>
                <LayoutPages />
              </AuthComponent>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
