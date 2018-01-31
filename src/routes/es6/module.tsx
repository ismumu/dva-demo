
import * as React from 'react';
import BlogTemplate from '../../components/blogTemplate/index';


const source =
`
# Module 的语法

\`\`\`js
// CommonJS模块
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
\`\`\`

上面代码的实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取 3 个方法。这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。

\`\`\`js
// ES6模块
import { stat, exists, readFile } from 'fs';
\`\`\`
上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。

通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。

------

\`\`\`js
function v1() { ... }
function v2() { ... }

export {
	v1 as streamV1,
	v2 as streamV2,
	v2 as streamLatestVersion
};
\`\`\`
上面代码使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。

-----

如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。

\`\`\`js
import { lastName as surname } from './profile.js';
\`\`\`
注意，import命令具有提升效果，会提升到整个模块的头部，首先执行。

\`\`\`js
foo();

import { foo } from 'my_module';
\`\`\`

上面的代码不会报错，因为import的执行早于foo的调用。这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。

-----

## 模块的整体加载

除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

下面是一个circle.js文件，它输出两个方法area和circumference。

\`\`\`js
// circle.js

export function area(radius) {
	return Math.PI * radius * radius;
}

export function circumference(radius) {
	return 2 * Math.PI * radius;
}
\`\`\`
现在，加载这个模块。
\`\`\`js
// main.js

import { area, circumference } from './circle';

console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));
\`\`\`
上面写法是逐一指定要加载的方法，整体加载的写法如下。
\`\`\`js
import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));
\`\`\`


----

## export default 命令

为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。

\`\`\`js
// export-default.js
export default function () {
	console.log('foo');
}
\`\`\`
上面代码是一个模块文件export-default.js，它的默认输出是一个函数。

其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。

\`\`\`js
// import-default.js
import customName from './export-default';
customName(); // 'foo'
\`\`\`

\`\`\`js
// 正确
export var a = 1;

// 正确
var a = 1;
export default a;

// 错误
export default var a = 1;
\`\`\`
上面代码中，export default a的含义是将变量a的值赋给变量default。所以，最后一种写法会报错。

同样地，因为export default命令的本质是将后面的值，赋给default变量，所以可以直接将一个值写在export default之后。
\`\`\`js
// 正确
export default 42;

// 报错
export 42;
\`\`\`
如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样
\`\`\`js
import _, { each, each as forEach } from 'lodash';
\`\`\`

----

## 跨模块常量

const声明的常量只在当前代码块有效。如果想设置跨模块的常量（即跨多个文件），或者说一个值要被多个模块共享，可以采用下面的写法。

\`\`\`js
// constants.js 模块
export const A = 1;
export const B = 3;
export const C = 4;

// test1.js 模块
import * as constants from './constants';
console.log(constants.A); // 1
console.log(constants.B); // 3

// test2.js 模块
import {A, B} from './constants';
console.log(A); // 1
console.log(B); // 3
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
