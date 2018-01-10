
import * as React from 'react'
import dva, { connect } from 'dva';


const ReactMarkdown = require('react-markdown');


import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/styles/hljs';



const code = [
`
class Greeter {
	greeting: string;
	constructor (message: string) {
		this.greeting = message;
	}
	greet () {
		return ( 'Hello, ' + this.greeting );
	}
}

let greeter = new Greeter('world');

console.log(greeter.greet());
`,
`
class Animal {
	move (distanceInMeters: number = 0) {
		console.log(\`Animal moved \${distanceInMeters}m.\`);
	}
}

class Dog extends Animal {
	bark () {
		console.log(\`Worf! Worf!\`);
	}
}

const dog = new Dog();

dog.bark();
dog.move(10);
dog.bark();
`,

`
class Animal {
	name: string;
	constructor (theName: string) {
		this.name = theName;
	}
	move (distanceInMeters: number = 0) {
		console.log(\`\${this.name} moved \${distanceInMeters}m.\`);
	}
}

class Snake extends Animal {
	constructor (name: string) {
		super(name);
	}
	move ( distanceInMeters = 5 ) {
		console.log("Slithering...");
		super.move(distanceInMeters);
	}
}


class Horse extends Animal {
	constructor (name: string) {
		super(name);
	}
	move ( distanceInMeters = 45 ) {
		console.log("Galloping...");
		super.move(distanceInMeters);
	}
}

let sam = new Snake('Sammy the Python');
let tom: Animal = new Horse("Tommy the Palomino");


sam.move(1111);
tom.move(2222);
`,
`
class Person {
	protected name: string;
	constructor (name: string) {
		this.name = name;
	}
}

class Employee extends Person {
	private department: string;
	constructor (name: string, department: string) {
		super(name);
		this.department = department;
	}
	getElevatorPitch () {
		return \`Hello, my name is \${this.name} and I work in \${this.department}.\`;
	}
}

let howard = new Employee('Howard', 'Sales');
console.log(howard.getElevatorPitch())
console.log(howard.department); // [ts] 属性“department”为私有属性，只能在类“Employee”中访问
`,
`
let passcode = "secret passcode";
class Employee {
	private _fullName: string;
	get fullName (): string {
		return this._fullName;
	}
	set fullName (newName: string) {
		if ( passcode && passcode == "secret passcode" ) {
			this._fullName = newName;
		} else {
			console.log('Error: Unauthorized update of employee!');
		}
	}
}

let employee = new Employee();

employee.fullName = "Bob Smith";

if (employee.fullName) {
    console.log(employee.fullName);
}
`,

];


class Classes extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {

		const lang = 'javascript';

		return (
			<div>
				<ReactMarkdown source={`## 类`} />
				<SyntaxHighlighter language={lang} style={dark}>{ code[0] }</SyntaxHighlighter>
				<ReactMarkdown source={`## 继承`} />
				<SyntaxHighlighter language={lang} style={dark}>{ code[1] }</SyntaxHighlighter>
				<SyntaxHighlighter language={lang} style={dark}>{ code[2] }</SyntaxHighlighter>
				<ReactMarkdown source={`## 公共，私有与受保护的修饰符`} />
				<SyntaxHighlighter language={lang} style={dark}>{ code[3] }</SyntaxHighlighter>
				<ReactMarkdown source={`## 存取器`} />
				<SyntaxHighlighter language={lang} style={dark}>{ code[4] }</SyntaxHighlighter>
			</div>
		);
	}
}


export default Classes;
