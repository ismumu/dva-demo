
import * as React from 'react';
const ReactMarkdown = require('react-markdown');
import * as CodeBlock from './CodeBlock';


interface IAppProps {
	source: string;
}

interface IAppState {}


class BlogTemplate extends React.Component<IAppProps, IAppState> {

	constructor(props) {
		super(props)
	}

	render() {
		return (<ReactMarkdown source={this.props.source} renderers={{code: CodeBlock}} />);
	}

}



export default BlogTemplate;
