
import * as React from 'react'
import BlogTemplate from '../../components/blogTemplate/index';



const source =
`
# async 函数

async 函数是什么？一句话，它就是 Generator 函数的语法糖。

async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。

async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

\`\`\`js
function timeout(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

async function asyncPrint(value, ms) {
	await timeout(ms);
	console.log(value);
}

asyncPrint('hello world', 50);
\`\`\`

async函数返回一个 Promise 对象。

async函数内部return语句返回的值，会成为then方法回调函数的参数。

\`\`\`js
async function f() {
	return 'hello world';
}

f().then(v => console.log(v))
// "hello world"
\`\`\`
## await 命令

正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象。

\`\`\`js
async function f() {
	return await 123;
}

f().then(v => console.log(v))
// 123
\`\`\`


### 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。

\`\`\`js
let foo = await getFoo();
let bar = await getBar();
\`\`\`
上面代码中，getFoo和getBar是两个独立的异步操作（即互不依赖），被写成继发关系。
这样比较耗时，因为只有getFoo完成以后，才会执行getBar，完全可以让它们同时触发。
\`\`\`js
// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
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
