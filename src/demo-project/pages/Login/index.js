import {Button, Card, Checkbox, Form, Input, message} from 'antd';
// 导入样式文件
import './index.scss';
import {useStore} from '@/demo-project/store';
import {useNavigate} from 'react-router-dom';

function Login() {
  const {loginStore} = useStore();
  const navigate = useNavigate();
  const onFinish = values => {
    // todo: 登录
    console.log('Success:', values);
    const {username, password} = values;
    loginStore.getToken({
      username,
      password,
    });
    // 跳转首页
    navigate('/');
    // 提示用户
    message.success('登录成功');
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login">
      <Card className="login-container">
        <p className="title">管理系统</p>
        <Form
          validateTrigger={['onBlur', 'onChange']}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入手机号',
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入正确的手机号',
                validateTrigger: 'onBlur',
              },
            ]}
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
              {
                len: 6,
                message: '请输入6位密码',
                validateTrigger: 'onBlur',
              },
            ]}
          >
            <Input.Password placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="login-checkbox-label">我已阅读并同意「用户协议」和「隐私条款」</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
