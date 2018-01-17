
import * as React from 'react'
import dva, { connect } from 'dva';

const ReactMarkdown = require('react-markdown');

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark, github, githubGist } from 'react-syntax-highlighter/styles/hljs';





export default class Numbers extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

		const lang = 'javascript';

		return (
			<div>
<ReactMarkdown source={`
# 数值的扩展

## 二进制和八进制表示法

`} />
<SyntaxHighlighter language={lang} style={github}>
{`
ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。

0b111110111 === 503 // true
0o767 === 503 // true

`}</SyntaxHighlighter>
<ReactMarkdown source={`
如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法。

`} />
<SyntaxHighlighter language={lang} style={github}>
{`
Number('0b111')  // 7
Number('0o10')  // 8

`}</SyntaxHighlighter>
<ReactMarkdown source={`
# 指数运算符

ES2016 新增了一个指数运算符（**）。

`} />
<SyntaxHighlighter language={lang} style={github}>
{`
2 ** 2 // 4
2 ** 3 // 8

`}</SyntaxHighlighter>
<ReactMarkdown source={`
指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。

`} />
<SyntaxHighlighter language={lang} style={github}>
{`
let a = 1.5;
a **= 2;
// 等同于 a = a * a;

let b = 4;
b **= 3;
// 等同于 b = b * b * b;

`}</SyntaxHighlighter>



			</div>
		);
	}
}
