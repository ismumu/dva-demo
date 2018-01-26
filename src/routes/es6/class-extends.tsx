
import * as React from 'react'
import * as BlogTemplate from '../../components/blogTemplate/index';



const source =
`
# Class 的继承

## 简介

Class 可以通过extends关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。

\`\`\`js
class Point {
}

class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y); // 调用父类的constructor(x, y)
		this.color = color;
	}

	toString() {
		return this.color + ' ' + super.toString(); // 调用父类的toString()
	}
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
