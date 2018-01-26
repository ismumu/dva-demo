
import * as React from 'react'
import * as BlogTemplate from '../../components/blogTemplate/index';



const source =
`
# Class 的基本语法

JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。

\`\`\`js
function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.toString = function () {
	return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
\`\`\`

上面的代码用 ES6 的class改写，就是下面这样。

\`\`\`js
//定义类
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}
}

\`\`\`

\`\`\`js

\`\`\`

\`\`\`js

\`\`\`

\`\`\`js

\`\`\`

\`\`\`js

\`\`\`

\`\`\`js

\`\`\`

\`\`\`js

\`\`\`

\`\`\`js

\`\`\`

\`\`\`js

\`\`\`

\`\`\`js

\`\`\`

\`\`\`js

\`\`\`

\`\`\`js

\`\`\`

\`\`\`js

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
