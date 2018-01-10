
import * as React from 'react'
import dva, { connect } from 'dva';


const ReactMarkdown = require('react-markdown');


import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/styles/hljs';



const codes = [
`
function identity<T>(any: T): T {
	return any;
}
`

];


export default class Generics extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {

		const lang = 'javascript';

		return (
			<div>
				<ReactMarkdown source={`## 泛型`} />
				<SyntaxHighlighter language={lang} style={dark}>{ codes[0] }</SyntaxHighlighter>
			</div>
		);
	}
}
