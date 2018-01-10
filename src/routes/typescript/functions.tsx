
import * as React from 'react'
import dva, { connect } from 'dva';


const ReactMarkdown = require('react-markdown');


import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/styles/hljs';



const codes = [
`
let myAdd: (x: number, y: number) => number = function (x: number, y: number): number { return x + y };
`,
`
function buildName(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
  }

  let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
`,

];





export default class Functions extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {

		const lang = 'javascript';

		return (
			<div>
				<ReactMarkdown source={`## 函数`} />
				<SyntaxHighlighter language={lang} style={dark}>{ codes[0] }</SyntaxHighlighter>
				<SyntaxHighlighter language={lang} style={dark}>{ codes[1] }</SyntaxHighlighter>
			</div>
		);
	}
}
