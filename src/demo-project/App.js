import {Routes, Route, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import {history} from '@/demo-project/utils/history';
import LayoutPages from '@/demo-project/pages/Layout';
import Login from '@/demo-project/pages/Login';
import {AuthComponent} from '@/demo-project/components/AuthComponent';
import Home from '@/demo-project/pages/Home';
import Article from '@/demo-project/pages/Article';
import Publish from '@/demo-project/pages/Publish';

function App() {
  return (
    <HistoryRouter history={history}>
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
          >
            <Route index element={<Home />}></Route>
            <Route path="article" element={<Article />}></Route>
            <Route path="publish" element={<Publish />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;
