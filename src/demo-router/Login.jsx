// 1.导入useNavigate
import {useNavigate, useParams} from 'react-router-dom';

function Login() {
  // 2.执行useNavigate得到一个跳转函数
  const navigate = useNavigate();
  // 跳转到关于页
  function goAbout() {
    // 3.调用跳转函数传入目标路径
    navigate('/about?id=1000');
  }

  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>this is login</h1>
      <p>About路由传参id：{params.id}</p>
      <button onClick={goAbout}>跳转到关于页useParams传参</button>
    </div>
  );
}

export default Login;
