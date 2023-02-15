// 1.导入useNavigate
import {useNavigate} from 'react-router-dom';

function Login() {
  // 2.执行useNavigate得到一个跳转函数
  const navigate = useNavigate();
  // 跳转到关于页
  function goAbout() {
    // 3.调用跳转函数传入目标路径
    navigate('/about');
  }
  return (
    <div>
      <h1>this is login</h1>
      <button onClick={goAbout}>跳转到关于页</button>
    </div>
  );
}

export default Login;
