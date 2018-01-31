
import * as React from 'react'
import BlogTemplate from '../../components/blogTemplate/index';



const source =
`
# Set 和 Map 数据结构

## 1. Set

	ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
	Set 本身是一个构造函数，用来生成 Set 数据结构。


\`\`\`js
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
\`\`\`

**向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。**

**Set 内部判断两个值是否不同，使用的算法叫做“Same-value equality”，它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。**

\`\`\`js
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}
\`\`\`

### Set 结构的实例有以下属性。

- Set.prototype.constructor：构造函数，默认就是Set函数。
- Set.prototype.size：返回Set实例的成员总数。

### Set 实例的方法

- add(value)：添加某个值，返回 Set 结构本身。
- delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
- has(value)：返回一个布尔值，表示该值是否为Set的成员。
- clear()：清除所有成员，没有返回值。

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员

## 2. WeakSet

WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

首先，WeakSet 的成员只能是对象，而不能是其他类型的值。

\`\`\`js
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]}

// 上面代码中，a是一个数组，它有两个成员，也都是数组。将a作为 WeakSet 构造函数的参数，a的成员会自动成为 WeakSet 的成员。
// 注意，是a数组的成员成为 WeakSet 的成员，而不是a数组本身。这意味着，数组的成员只能是对象。

const b = [3, 4];
const ws = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…)
\`\`\`

## 3. Map

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。

如果你需要“键值对”的数据结构，Map 比 Object 更合适。

\`\`\`js
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
\`\`\`

### Map 结构的实例

- size属性返回 Map 结构的成员总数。
- set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。
- get方法读取key对应的键值，如果找不到key，返回undefined。
- has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
- delete方法删除某个键，返回true。如果删除失败，返回false。
- clear方法清除所有成员，没有返回值。

## 4. WeakMap

WeakMap结构与Map结构类似，也是用于生成键值对的集合。

\`\`\`js
// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap();
const key = {foo: 1};
wm1.set(key, 2);
wm1.get(key) // 2

// WeakMap 也可以接受一个数组，
// 作为构造函数的参数
const k1 = [1, 2, 3];
const k2 = [4, 5, 6];
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
wm2.get(k2) // "bar"
\`\`\`

WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。

**WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。**

注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。

\`\`\`js
const wm = new WeakMap();
let key = {};
let obj = {foo: 1};

wm.set(key, obj);
obj = null;
wm.get(key)
// Object {foo: 1}
\`\`\`
`;


export default class extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return <BlogTemplate source={source} />;
	}

}
