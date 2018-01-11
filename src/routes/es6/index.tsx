
import * as React from 'react'
import dva, { connect } from 'dva';


const ReactMarkdown = require('react-markdown');


import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/styles/hljs';

let codes = [
`
这里是ES6的一些栗子
`,
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

			</div>
		);
	}
}
