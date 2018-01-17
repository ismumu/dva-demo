
import * as React from 'react'
import dva, { connect } from 'dva';

const ReactMarkdown = require('react-markdown');

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark, github, githubGist } from 'react-syntax-highlighter/styles/hljs';




export default class Functions extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

		const lang = 'javascript';

		return (
			<div>
<ReactMarkdown source={`
# 函数的扩展

## 作用域

一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。

`} />
<SyntaxHighlighter language={lang} style={github}>
{`
var x = 1;

function f(x, y = x) {
  console.log(y);
}

f(2) // 2

// 上面代码中，参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2。

`}</SyntaxHighlighter>



			</div>
		);
	}
}
