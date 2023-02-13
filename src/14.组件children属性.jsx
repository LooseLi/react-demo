// 跨组件通信
import React from 'react';

function ListItem({list, children}) {
  return (
    <>
      <p>{children}</p>
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

class App extends React.Component {
  state = {
    list: [
      {id: 0, title: '四级听力真题'},
      {id: 1, title: '四级阅读真题'},
      {id: 2, title: '考研阅读真题'},
    ],
  };
  render() {
    return (
      <>
        <ListItem list={this.state.list}>this is list</ListItem>
      </>
    );
  }
}

export default App;
