
import * as React from 'react'
import BlogTemplate from '../../components/blogTemplate/index';

const source =
`
# 常用的正则表达式

\`\`\`js

// 匹配允许0的正整数，但是不允许01， 001格式
/^([1-9]\d*|[0]{1,1})$/

\`\`\`


`;

export default class extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return <BlogTemplate source={source} />;
	}

}
