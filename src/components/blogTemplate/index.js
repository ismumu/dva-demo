
import React from 'react';

const ReactMarkdown = require('react-markdown');
import CodeBlock from './CodeBlock';



class BlogTemplate extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (<ReactMarkdown source={this.props.source} renderers={{code: CodeBlock}} />);
	}

}



export default BlogTemplate;
