import {getToken} from '@/demo-project/utils/index';
import {Navigate} from 'react-router-dom';

/**
 * 1.判断token是否存在
 * 2.如果存在 正常渲染组件
 * 3.如果不存在 重定向到登录路由
 */

function AuthComponent({children}) {
  const hasToken = getToken();
  if (hasToken) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}

export {AuthComponent};
