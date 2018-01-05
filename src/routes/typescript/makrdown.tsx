
import * as React from 'react'
import dva, { connect } from 'dva';


const ReactMarkdown = require('react-markdown');


import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/styles/hljs';


const textContent =
`
# some text

`;




class Markdown extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {

		return (
			<div>
				<ReactMarkdown source={ textContent } />
				<SyntaxHighlighter language='javascript' style={dark}>
					{
						'(num) => num + 1'
					}
				</SyntaxHighlighter>
			</div>
		);
	}
}


export default Markdown;
