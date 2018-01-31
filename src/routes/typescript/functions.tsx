
import * as React from 'react'
import BlogTemplate from '../../components/blogTemplate/index';


const source =
`
## 函数
\`\`\`js
let myAdd: (x: number, y: number) => number = function (x: number, y: number): number { return x + y };
\`\`\`

\`\`\`js
function buildName(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
  }

  let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
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
