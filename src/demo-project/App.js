import {lazy, Suspense} from 'react';
import {Routes, Route, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import {history} from '@/demo-project/utils/history';
import {AuthComponent} from '@/demo-project/components/AuthComponent';
// 按需导入
const Home = lazy(() => import('@/demo-project/pages/Home'));
const Login = lazy(() => import('@/demo-project/pages/Login'));
const Article = lazy(() => import('@/demo-project/pages/Article'));
const Publish = lazy(() => import('@/demo-project/pages/Publish'));
const LayoutPages = lazy(() => import('@/demo-project/pages/Layout'));

function App() {
  return (
    <HistoryRouter history={history}>
      <div className="app">
        <Suspense fallback={<div style={{textAlign: 'center', marginTop: 200}}>loading...</div>}>
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
        </Suspense>
      </div>
    </HistoryRouter>
  );
}

export default App;
