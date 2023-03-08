import './index.scss';
import {Link} from 'react-router-dom';
import {Card, Breadcrumb, Form, Radio, Select, DatePicker, Button, Table, Space} from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import {useEffect, useState} from 'react';
import jsondata from './index.json';

const {Option} = Select;
const {RangePicker} = DatePicker;

function Article() {
  const onFinish = values => {
    console.log(values);
  };
  const [channelList, setChannelList] = useState([]);
  // 文章列表管理 统一管理数据
  const [articleList, setList] = useState({
    list: [],
    count: 0,
  });
  const columns = [
    {
      title: '封面',
      dataIndex: 'cover',
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 200,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 200,
    },
    {
      title: '发布时间',
      dataIndex: 'pubdate',
      width: 200,
    },
    {
      title: '阅读数',
      dataIndex: 'read_count',
    },
    {
      title: '评论数',
      dataIndex: 'comment_count',
    },
    {
      title: '点赞数',
      dataIndex: 'like_count',
    },
    {
      title: '操作',
      dataIndex: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>编辑</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    setChannelList(jsondata.channel_list);
    setList({
      list: jsondata.article_list,
      count: jsondata.article_list.length,
    });
  }, []);
  return (
    <>
      {/* 筛选区域 */}
      <Card
        title={
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link>内容管理</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        <Form onFinish={onFinish} initialValues={{status: -1}}>
          <Form.Item label="状态" name="status">
            <Radio.Group value={1}>
              <Radio value={-1}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={1}>待审核</Radio>
              <Radio value={2}>审核通过</Radio>
              <Radio value={3}>审核失败</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel">
            <Select placeholder="请选择文章频道" style={{width: 160}}>
              {channelList.map(channel => (
                <Option key={channel.id} value={channel.value}>
                  {channel.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {/* 文章列表区域 */}
      <Card style={{marginTop: 20}}>
        <Table rowKey="id" columns={columns} dataSource={articleList.list} />
      </Card>
    </>
  );
}

export default Article;
