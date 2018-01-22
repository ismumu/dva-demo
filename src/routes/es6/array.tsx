
import * as React from 'react'
import * as BlogTemplate from '../../components/blogTemplate/index';



const source =
`
# 数组的扩展

## 扩展运算符

扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

\`\`\`js
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
\`\`\`

### 扩展运算符的应用

#### 1.复制数组

数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组。

\`\`\`js
const a1 = [1, 2];
const a2 = a1;

a2[0] = 2;
a1 // [2, 2]
\`\`\`

ES5 只能用变通方法来复制数组。

\`\`\`js
const a1 = [1, 2];
const a2 = a1.concat();

a2[0] = 2;
a1 // [1, 2]
\`\`\`

扩展运算符提供了复制数组的简便写法。

\`\`\`js
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
\`\`\`

#### 2.合并数组

\`\`\`js
// ES5
[1, 2].concat(more)
// ES6
[1, 2, ...more]

var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

// ES5的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
\`\`\`

#### 3.字符串

扩展运算符还可以将字符串转为真正的数组。

\`\`\`js
[...'hello']
// [ "h", "e", "l", "l", "o" ]
\`\`\`

## Array.from()
Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。

\`\`\`js
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
\`\`\`
## Array.of()

Array.of方法用于将一组值，转换为数组。
\`\`\`js
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
\`\`\`
这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
\`\`\`js
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
\`\`\`

## 数组实例的 fill()
fill方法使用给定值，填充一个数组。

\`\`\`js
['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]
\`\`\`
fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
\`\`\`js
['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']
\`\`\`

## 数组实例的 entries()，keys() 和 values()

ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

\`\`\`js
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
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
