
import * as React from 'react'
import BlogTemplate from '../../components/blogTemplate/index';



const source =
`
# 对象的扩展

## 属性的简洁表示法

\`\`\`js
const foo = 'bar';
const baz = {foo};
baz // {foo: "bar"}

// 等同于
const baz = {foo: foo};
\`\`\`

除了属性简写，方法也可以简写。

\`\`\`js
const o = {
  method() {
    return "Hello!";
  }
};

// 等同于
const o = {
  method: function() {
    return "Hello!";
  }
};
\`\`\`

## 属性名表达式

ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。

\`\`\`js
let propKey = 'foo';

let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};
\`\`\`
## 方法的 name 属性

函数的name属性，返回函数名。对象方法也是函数，因此也有name属性。
\`\`\`js
const person = {
  sayName() {
    console.log('hello!');
  },
};

person.sayName.name   // "sayName"
\`\`\`

## Object.is()

\`\`\`js
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

\`\`\`

## Object.assign()

### Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。
\`\`\`js
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
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
