import * as React from 'react'
import * as BlogTemplate from '../../components/blogTemplate/index';


const source =
`
## Symbol
\`\`\`js
let mySymbol1 = Symbol();
let mySymbol2 = Symbol();

let myObj = {
	a: 1,
	b: 2,
}

myObj['mySymbol1'] = 1111;
myObj['mySymbol2'] = 1222;

console.log(myObj['mySymbol2'])
\`\`\`
### 注意，Symbol 值作为对象属性名时，不能用点运算符。
\`\`\`js
const mySymbol = Symbol();
const a = {};

a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
\`\`\`
上面代码中，因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个 Symbol 值。
\`\`\`js
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

console.log(s1 === s2) // true
\`\`\`
\`\`\`js
Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。
Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，但是调用Symbol("cat")30 次，会返回 30 个不同的 Symbol 值。
\`\`\`
\`\`\`js
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined
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
