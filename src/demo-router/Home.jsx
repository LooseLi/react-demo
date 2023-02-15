import {Outlet} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>this is home</h1>
      <Outlet />
    </div>
  );
}

export default Home;
