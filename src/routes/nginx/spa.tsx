
import * as React from 'react'
import dva, { connect } from 'dva';


const ReactMarkdown = require('react-markdown');


import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/styles/hljs';

let codes = [
`
Nginx配置如下
`,
`
server {
	listen  80;
	server_name ismumu.com;
	location / {
		try_files $uri $uri/ /index.html;
		root /www/dva-demo/dist;
	}
}
`
]




export default class ES6 extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {

		const lang = 'javascript';

		return (
			<div>
				<ReactMarkdown source={codes[0]} />
				<SyntaxHighlighter language={lang} style={dark}>{ codes[1] }</SyntaxHighlighter>
			</div>
		);
	}
}
