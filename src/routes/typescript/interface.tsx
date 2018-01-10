
import * as React from 'react'
import dva, { connect } from 'dva';


const ReactMarkdown = require('react-markdown');


import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/styles/hljs';



const code = [
`
function printLabel(labelledObj: { label: string, size: number }) {
	console.log(labelledObj.label);
}

let my = {
	size: 111,
	label: '111',
}

printLabel(my);

`,

`
interface LabelledVal {
	label: string;
	size: number;
}

function printLabel (labelledObj: LabelledVal) {
	console.log(labelledObj.label);
}


let myObj = {
	size: 111,
	label: '111',
}

printLabel(myObj);
`,
`
interface SquareConfig {
	color?: string;
	width?: number;
}

function createSquare (config: SquareConfig) : {color: string; area: number} {
	let newSquare = {
		color: 'white',
		area: 100,
	}
	if ( config.color ) {
		newSquare.color = config.color;
	}
	if ( config.width ) {
		newSquare.area = config.width * config.width;
	}

	return newSquare;
}

let mySquare = createSquare({
	color: 'black',
	width: 100,
})


console.log(mySquare);
`,
`
interface Point {
	readonly x: number;
	readonly y: number;
}

let p1: Point = {
	x: 1,
	y: 2,
}


console.log(p1);

p1.x = 5; // [ts] 无法分配到“x”，因为它是常数或只读属性。
`,
`
let a: number[] = [1, 2, 3, 4, 5];
let ro: ReadonlyArray<number> = a;

console.log(ro);
ro[0] = 10; // [ts] 类型“ReadonlyArray<number>”中的索引签名仅允许读取
ro.push(5); // [ts] 类型“ReadonlyArray<number>”上不存在属性“push”
ro.length = 100; // [ts] 无法分配到“length”，因为它是常数或只读属性。

`,
`
interface SearchFunc {
	(source: string, subString: string): boolean;
}


let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
	let result = source.search(subString);
	return result > -1;
}

console.log(mySearch('abcd','c'));
`,

`
interface StringArray {
	[index: number]: string;
}

let myArray: StringArray;
myArray = ['aa', 'bbb'];

let myStr: string = myArray[0];

console.log(myStr);
`,


];



class Interface extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {

		const lang = 'javascript';

		return (
			<div>
				<ReactMarkdown source={`## 接口初探`} />
				<SyntaxHighlighter language={lang} style={dark}>{ code[0] }</SyntaxHighlighter>
				<SyntaxHighlighter language={lang} style={dark}>{ code[1] }</SyntaxHighlighter>
				<ReactMarkdown source={`## 可选属性`} />
				<SyntaxHighlighter language={lang} style={dark}>{ code[2] }</SyntaxHighlighter>
				<ReactMarkdown source={`## 只读属性`} />
				<SyntaxHighlighter language={lang} style={dark}>{ code[3] }</SyntaxHighlighter>
				<SyntaxHighlighter language={lang} style={dark}>{ code[4] }</SyntaxHighlighter>
				<ReactMarkdown source={`## 函数类型`} />
				<SyntaxHighlighter language={lang} style={dark}>{ code[5] }</SyntaxHighlighter>
				<ReactMarkdown source={`## 可索引的类型`} />
				<SyntaxHighlighter language={lang} style={dark}>{ code[6] }</SyntaxHighlighter>
			</div>
		);
	}
}


export default Interface;
