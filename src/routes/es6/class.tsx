
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

ES6 的类，完全可以看作构造函数的另一种写法。

\`\`\`js
class Point {
	// ...
}

typeof Point // "function"
Point === Point.prototype.constructor // true
\`\`\`
构造函数的prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面。
\`\`\`js
class Point {
	constructor() {
		// ...
	}

	toString() {
		// ...
	}

	toValue() {
		// ...
}
}

// 等同于
Point.prototype = {
	constructor() {},
	toString() {},
	toValue() {},
};
\`\`\`

## constructor 方法

constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

\`\`\`js
class Point {
}

// 等同于
class Point {
	constructor() {}
}
\`\`\`
采用 Class 表达式，可以写出立即执行的 Class。
\`\`\`js
let person = new class {
	constructor(name) {
		this.name = name;
	}

	sayName() {
		console.log(this.name);
	}
}('张三');

person.sayName(); // "张三"
\`\`\`

私有方法是常见需求，但 ES6 不提供，只能通过变通方法模拟实现。

利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。
\`\`\`js
const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass{

	// 公有方法
	foo(baz) {
		this[bar](baz);
	}

	// 私有方法
	[bar](baz) {
		return this[snaf] = baz;
	}

	// ...
};
\`\`\`

## this 的指向

类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。


\`\`\`js
class Logger {
	printName(name = 'there') {
		this.print(\`Hello ${name}\`);
	}

	print(text) {
		console.log(text);
	}
}

const logger = new Logger();
const { printName } = logger;
printName(); // TypeError: Cannot read property 'print' of undefined
\`\`\`
## Class 的取值函数（getter）和存值函数（setter）
\`\`\`js
class MyClass {
	constructor() {
		// ...
	}
	get prop() {
		return 'getter';
	}
	set prop(value) {
		console.log('setter: '+value);
	}
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'
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
