
import * as React from 'react'
import BlogTemplate from '../../components/blogTemplate/index';



const source =
`
# Generator 函数的语法

\`\`\`js
function* helloWorldGenerator() {
	yield 'hello';
	yield 'world';
	return 'ending';
}

var hw = helloWorldGenerator();


hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
\`\`\`
\`\`\`js
function* gen() {
	yield  123 + 456;
}
// yield后面的表达式123 + 456，不会立即求值，只会在next方法将指针移到这一句时，才会求值。
\`\`\`
for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。
\`\`\`js
function* foo() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
	return 6;
}

for (let v of foo()) {
	console.log(v);
}
// 1 2 3 4 5
\`\`\`
一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象，所以上面代码的return语句返回的6，不包括在for...of循环之中。
`;


export default class extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return <BlogTemplate source={source} />;
	}

}
