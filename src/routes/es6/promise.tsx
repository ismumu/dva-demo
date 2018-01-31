
import * as React from 'react'
import BlogTemplate from '../../components/blogTemplate/index';




const source =
`
# Promise 对象


## 缺点

1. 无法取消Promise，一旦新建它就会立即执行，无法中途取消。
2. 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
3. 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

## 基本用法

ES6 规定，Promise对象是一个构造函数，用来生成Promise实例

\`\`\`js
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

// Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
promise.then(function(value) {
	// success
}, function(error) {
	// failure
});
\`\`\`
Promise 新建后就会立即执行。
\`\`\`js
let promise = new Promise(function(resolve, reject) {
	console.log('Promise');
	resolve();
});

promise.then(function() {
	console.log('resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// resolved
\`\`\`

\`\`\`js
const p1 = new Promise(function (resolve, reject) {
	setTimeout(() => reject(new Error('fail')), 5000)
})

const p2 = new Promise(function (resolve, reject) {
	setTimeout(() => resolve(p1), 1000)
})

p2.then(result => console.log(result))
  .catch(error => console.log(error))
\`\`\`
注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。
\`\`\`js
new Promise((resolve, reject) => {
	resolve(1);
	console.log(2);
}).then(r => {
	console.log(r);
});
// 2
// 1
\`\`\`

## Promise.prototype.then()

	then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。

## Promise.all()

	Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

\`\`\`js
const p = Promise.all([p1, p2, p3]);
\`\`\`
### p的状态由p1、p2、p3决定，分成两种情况。
1. 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
2. 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

## Promise.resolve()

有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。

\`\`\`js
const jsPromise = Promise.resolve($.ajax('/whatever.json'));
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
