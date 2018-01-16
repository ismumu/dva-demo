
import * as React from 'react'
import dva, { connect } from 'dva';

const ReactMarkdown = require('react-markdown');

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark, github, githubGist } from 'react-syntax-highlighter/styles/hljs';





export default class Yield extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

		const lang = 'javascript';

		return (
			<div>
				<ReactMarkdown source={`
# 理解 ES6 语法中 yield 关键字的返回值

在 ES6 中新增了生成器函数的语法，本文解释了生成器函数内 yield 关键字的返回值。

## 描述

`} />
				<SyntaxHighlighter language={lang} style={githubGist}>
					{`
根据语法规范，yield 关键字用来暂停和继续执行一个生成器函数。当外部调用生成器的 next() 方法时，yield 关键字右侧的表达式才会执行。

执行结果会转化为一个对象（包含两个属性， value 和 done），作为 next() 方法的返回值。

对于  var foo = yield expression 语句，yield 左侧变量 foo 的值将在下一次调用 next() 方法时获得，并且等于调用时 next() 方法的参数。

`}</SyntaxHighlighter>
				<ReactMarkdown source={`
## 举例

首先构造一个生成器函数。
`} />
				<SyntaxHighlighter language={lang} style={github}>
					{`
function* numbers() {
    console.log('function start.');

    var v1 = yield 0;
    console.log('v1 = ' + v1);

    var v2 = yield 1;
    console.log('v2 = ' + v2);

    return 5;
}

var nums = numbers();

`}</SyntaxHighlighter>
				<ReactMarkdown source={`
下面调用生成器函数。
`} />
<SyntaxHighlighter language={lang} style={github}>
{`
// 第 1 次调用 next, v1 的值还没有返回.
console.log(nums.next(2));

// 程序输出如下。
function start.
{ value: 0, done: false }

`}</SyntaxHighlighter>
<SyntaxHighlighter language={lang} style={github}>
{`
// 第 2 次调用 next, next 参数作为上一次 yield 值返回给 v1.
console.log(nums.next(3));

// 此时程序输出如下。
v1 = 3
{ value: 1, done: false }

`}</SyntaxHighlighter>
<SyntaxHighlighter language={lang} style={github}>
{`
// 第 3 次调用 next, 此时 done 的值为 true, 直接返回 return 的值.
console.log(nums.next(4));

// 此时程序输出如下。
v2 = 4
{ value: 5, done: true }

`}</SyntaxHighlighter>

			</div>
		);
	}
}
