
import * as React from 'react'
import dva, { connect } from 'dva';


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




class TestTs extends React.Component {

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


export default TestTs;
