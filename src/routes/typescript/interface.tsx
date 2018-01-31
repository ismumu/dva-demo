import * as React from 'react'
import BlogTemplate from '../../components/blogTemplate/index';


const source =
`
## 接口初探
\`\`\`
function printLabel(labelledObj: { label: string, size: number }) {
	console.log(labelledObj.label);
}

let my = {
	size: 111,
	label: '111',
}

printLabel(my);
\`\`\`
\`\`\`
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
\`\`\`
## 可选属性
\`\`\`
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
\`\`\`
## 只读属性
\`\`\`js
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
\`\`\`
\`\`\`js
let a: number[] = [1, 2, 3, 4, 5];
let ro: ReadonlyArray<number> = a;

console.log(ro);
ro[0] = 10; // [ts] 类型“ReadonlyArray<number>”中的索引签名仅允许读取
ro.push(5); // [ts] 类型“ReadonlyArray<number>”上不存在属性“push”
ro.length = 100; // [ts] 无法分配到“length”，因为它是常数或只读属性。
\`\`\`
## 函数类型
\`\`\`js
interface SearchFunc {
	(source: string, subString: string): boolean;
}


let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
	let result = source.search(subString);
	return result > -1;
}

console.log(mySearch('abcd','c'));
\`\`\`
## 可索引的类型
\`\`\`js
interface StringArray {
	[index: number]: string;
}

let myArray: StringArray;
myArray = ['aa', 'bbb'];

let myStr: string = myArray[0];

console.log(myStr);
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
