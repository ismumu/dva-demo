
import * as React from 'react'
import BlogTemplate from '../../components/blogTemplate/index';



const source=
`
# let和const命令

### 基本用法

ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。


\`\`\`js
{
	let a = 10;
	var b = 1;
}

a // ReferenceError: a is not defined.
b // 1

\`\`\`
上面代码在代码块之中，分别用let和var声明了两个变量。然后在代码块之外调用这两个变量，结果let声明的变量报错，var声明的变量返回了正确的值。这表明，let声明的变量只在它所在的代码块有效。

for循环的计数器，就很合适使用let命令。
\`\`\`js
for (let i = 0; i < 10; i++) {}

console.log(i);
//ReferenceError: i is not defined
\`\`\`
上面代码中，计数器i只在for循环体内有效，在循环体外引用就会报错。

下面的代码如果使用var，最后输出的是10。
\`\`\`js
var a = [];
for (var i = 0; i < 10; i++) {
	a[i] = function () {
    	console.log(i);
	};
}
a[6](); // 10
\`\`\`
上面代码中，变量i是var声明的，在全局范围内都有效。所以每一次循环，新的i值都会覆盖旧值，导致最后输出的是最后一轮的i的值。

如果使用let，声明的变量仅在块级作用域内有效，最后输出的是6。
\`\`\`js
var a = [];
for (let i = 0; i < 10; i++) {
	a[i] = function () {
		console.log(i);
	};
}
a[6](); // 6
\`\`\`
上面代码中，变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。

另外，for循环还有一个特别之处，就是循环语句部分是一个父作用域，而循环体内部是一个单独的子作用域。
\`\`\`js

for (let i = 0; i < 3; i++) {
	let i = 'abc';
	console.log(i);
}
// abc
// abc
// abc
\`\`\`
上面代码输出了3次abc，这表明函数内部的变量i和外部的变量i是分离的。

-----

### 不存在变量提升

var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。

为了纠正这种现象，let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

\`\`\`js

// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;

\`\`\`

上面代码中，变量foo用var命令声明，会发生变量提升，即脚本开始运行时，变量foo已经存在了，但是没有值，所以会输出undefined。变量bar用let命令声明，不会发生变量提升。这表示在声明它之前，变量bar是不存在的，这时如果用到它，就会抛出一个错误。

-----

### 暂时性死区

只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。


\`\`\`js

var tmp = 123;

if (true) {
	tmp = 'abc'; // ReferenceError
	let tmp;
}

\`\`\`

上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。

ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。


\`\`\`js
if (true) {
	// TDZ开始
	tmp = 'abc'; // ReferenceError
	console.log(tmp); // ReferenceError

	let tmp; // TDZ结束
	console.log(tmp); // undefined

	tmp = 123;
	console.log(tmp); // 123
}
\`\`\`

上面代码中，在let命令声明变量tmp之前，都属于变量tmp的“死区”。

“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。

\`\`\`js

typeof x; // ReferenceError
let x;

\`\`\`

上面代码中，变量x使用let命令声明，所以在声明之前，都属于x的“死区”，只要用到该变量就会报错。因此，typeof运行时就会抛出一个ReferenceError。

作为比较，如果一个变量根本没有被声明，使用typeof反而不会报错。

------

### 不允许重复声明

let不允许在相同作用域内，重复声明同一个变量。

\`\`\`js

// 报错
function () {
	let a = 10;
	var a = 1;
}

// 报错
function () {
	let a = 10;
	let a = 1;
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
