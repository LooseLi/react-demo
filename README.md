# React

所学知识点简要汇总

## {}

- 识别常规的变量
- 原生`js`方法的调用
- 三元运算符

## 列表渲染`map`

```
<ul>
  {people.map(person => <li key={person.id}>{person.name}</li>)}
</ul>
```
tips: 使用`map`进行列表渲染时，需要指定`key`
