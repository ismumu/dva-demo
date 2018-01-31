
import * as React from 'react';

// highlight
import hljs from 'highlight.js';
import './highlight.9.11.0.github.less';


console.log(hljs)


class CodeBlock extends React.PureComponent {

	constructor(props) {
		super(props)
		this.setRef = this.setRef.bind(this)
	}

	setRef(el) {
		this.codeEl = el
	}

	componentDidMount() {
		this.highlightCode()
	}

	componentDidUpdate() {
		this.highlightCode()
	}

	highlightCode() {
		hljs.highlightBlock(this.codeEl)
	}

	render() {
		return (
			<pre>
				<code ref={this.setRef} className={this.props.language}>
					{this.props.value}
				</code>
			</pre>
		)
	}
}

// module.exports = CodeBlock
export default CodeBlock;
