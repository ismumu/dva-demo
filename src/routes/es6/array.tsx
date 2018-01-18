
import * as React from 'react'
import * as BlogTemplate from '../../components/blogTemplate/index';



const source =
`
# Some heading!

And a paragraph

\`\`\`js
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]
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
