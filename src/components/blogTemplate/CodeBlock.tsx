
import * as React from 'react';

// highlight
import * as hljs from 'highlight.js';
import 'highlight.js/styles/ocean.css';


interface IAppProps {
	language: string;
	value: string;
}

interface IAppState {

}


class CodeBlock extends React.PureComponent<IAppProps, IAppState> {

	constructor(props: IAppProps) {
		super(props);
	}

	// 暂存dom节点
	codeEl: string = '';

	setRef = (el) => {
		this.codeEl = el;
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
				<code ref={(node) => this.setRef(node)} className={this.props.language}>
					{this.props.value}
				</code>
			</pre>
		)
	}
}

export default CodeBlock;
