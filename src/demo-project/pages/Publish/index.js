import {Card, Breadcrumb, Form, Button, Radio, Input, Upload, Space, Select} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import './index.scss';

const {Option} = Select;

const Publish = () => {
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>发布文章</Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        <Form labelCol={{span: 4}} wrapperCol={{span: 16}} initialValues={{type: 1}}>
          <Form.Item label="标题" name="title" rules={[{required: true, message: '请输入文章标题'}]}>
            <Input placeholder="请输入文章标题" />
          </Form.Item>
          <Form.Item label="频道" name="channel" rules={[{required: true, message: '请输入文章频道'}]}>
            <Select placeholder="请选择文章频道" style={{width: 160}}>
              {/* {channelList.map(channel => (
                <Option key={channel.id} value={channel.value}>
                  {channel.name}
                </Option>
              ))} */}
              <Option value={0}>推荐</Option>
            </Select>
          </Form.Item>
          <Form.Item label="内容" name="content" rules={[{required: true, message: '请输入文章内容'}]}>
            <Input placeholder="请输入文章标题" />
          </Form.Item>

          <Form.Item wrapperCol={{offset: 4}}>
            <Space>
              <Button type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Publish;
