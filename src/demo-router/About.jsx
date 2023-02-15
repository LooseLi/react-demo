// useSearchParams
import {useSearchParams, useNavigate} from 'react-router-dom';

function About() {
  /**
   * params是一个对象 对象里有一个get的方法
   */
  const [params] = useSearchParams();
  const id = params.get('id');

  const navigate = useNavigate();
  function goLogin() {
    navigate('/login/2000');
  }
  return (
    <div>
      <h1>this is about</h1>
      <p>Login路由传参id：{id}</p>
      <button onClick={goLogin}>跳转到登录页params传参</button>
    </div>
  );
}

export default About;
