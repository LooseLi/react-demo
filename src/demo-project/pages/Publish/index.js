import {Card, Breadcrumb, Form, Button, Radio, Input, Upload, Space, Select} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import './index.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useState} from 'react';

const {Option} = Select;

const Publish = () => {
  // 存放上传图片的列表
  const [fileList, setFileList] = useState([]);
  const onUploadChange = ({fileList}) => {
    // 采取受控的写法：在最后一次log里response
    // 最终react state fileList中存放的数据有response.data.url
    setFileList(fileList);
    console.log(fileList);
  };
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
        <Form labelCol={{span: 4}} wrapperCol={{span: 16}} initialValues={{type: 1, content: '请输入内容'}}>
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
          <Form.Item label="上传" name="cover" rules={[{required: true, message: '请上传照片'}]}>
            <Upload
              name="image"
              listType="picture-card"
              className=""
              showUploadList
              action=""
              fileList={fileList}
              onChange={onUploadChange}
            >
              <div>
                <PlusOutlined />
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="内容" name="content" rules={[{required: true, message: '请输入文章内容'}]}>
            <ReactQuill theme="snow" />
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
