
import * as React from 'react';

class Student {
	fullName: string;
	constructor ( public firstName, public middleInitial, public lastName ) {
		this.fullName = firstName + middleInitial + lastName;
	}
}

interface Person {
	firstName: string;
	middleInitial: string;
	lastName: string;
}




class TsDemo1 extends React.Component {

	constructor (props) {
		super(props)
	}

	greeter = ( person: Person ) => {
		return "Hello, " + person.middleInitial + person.lastName + '.' + person.firstName;
	}

	render () {

		let user = new Student ('Cui', 'Fu', 'Zhen');

		return (
			<div>{ this.greeter(user) }</div>
		);
	}
}


export default TsDemo1;
