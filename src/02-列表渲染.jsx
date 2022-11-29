// 列表渲染
// map
const people = [
  {
    id: 0,
    name: '小润'
  },
  {
    id: 1,
    name: '杰克'
  },
  {
    id: 2,
    name: '莫妮卡'
  },
];

function App() {
  return (
    <div className="App">
      <ul>
        {people.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
