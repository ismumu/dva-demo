import * as React from 'react'
import * as BlogTemplate from '../../components/blogTemplate/index';


const source =
`
## 泛型
\`\`\`js
function identity<T>(any: T): T {
	return any;
}
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
