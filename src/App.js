import './App.css';
import React from 'react';
import 'antd/dist/reset.css';
import {Input, Table} from 'antd';

const {Search} = Input;

class App extends React.Component {
  // 搜索
  onSearch = value => console.log(value);
  // 数据加载
  initData = () => {
    const arr = [
      {
        key: 1,
        id: 1,
        name: '小润',
        des: '松鼠',
      },
      {
        key: 2,
        id: 2,
        name: '亚美',
        des: '鸭子',
      },
      {
        key: 3,
        id: 3,
        name: '史培亚',
        des: '狼🐺',
      },
    ];
    this.setState({
      list: arr,
    });
  };
  state = {
    list: [],
    columns: [
      {
        title: '任务编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '任务描述',
        dataIndex: 'des',
        key: 'des',
      },
      {
        title: '操作',
        dataIndex: 'do',
        key: 'do',
      },
    ],
  };
  componentDidMount() {
    this.initData();
  }
  render() {
    return (
      <div className="App">
        <Search placeholder="input search text" allowClear enterButton="Search" size="large" onSearch={this.onSearch} />
        <Table dataSource={this.state.list} columns={this.state.columns} />;
      </div>
    );
  }
}

export default App;
