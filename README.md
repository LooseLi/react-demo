# React

所学知识点简要汇总

## {}

- 识别常规的变量
- 原生`js`方法的调用
- 三元运算符

## 列表渲染`map`

```js
<ul>
  {people.map(person => <li key={person.id}>{person.name}</li>)}
</ul>
```
tips: 使用`map`进行列表渲染时，需要指定唯一`key`

## 条件渲染

### 三元表达式

`<div>{flag ? <span>this is 三元</span> : null}</div>`

### 逻辑&&运算

`<div>{true && <span>this is 逻辑&&运算</span>}</div>`

### 模版精简原则

```js
const getHtag = type => {
  if(type === 1) {
    return <h1>this is H1</h1>
  }
  if(type === 2) {
    return <h2>this is H2</h2>
  }
  if(type === 3) {
    return <h3>this is H3</h3>
  }
}

`<div>{getHtag(1)}</div>`
```

## 样式控制

### 行内样式

在元素身上绑定一个`style`属性
```js
const style = {
  color: 'red',
  fontSize: '30px',
};

<p style={style}>行内样式</p>
```

### 类名样式

在元素身上绑定一个className属性
```js
.active {
  color: blue;
}

<p className='active'>类名样式</p>
```

### 动态类名

```js
const flag = false;

<p className={flag ? 'active' : ''}>动态类名</p>
```

## 函数组件

## 事件对象e和自定义传参

## 组件状态

## 受控组件

## 非受控组件

## 通信 - 父传子

## 通信 - 子传父

## 通信 - 兄弟组件

## 通信 - 跨组件

## 生命周期

## hooks

## store

## router