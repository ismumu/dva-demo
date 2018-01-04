



// import React from 'react';
import * as React from 'react'
// const React = require('react');

// import React from '@types/react';

import dva, { connect } from 'dva';





class TestTs extends React.Component {

	constructor (props) {
		super(props)
	}

	greeter = ( person: string ) => {
		return "Hello, " + person;
	}

	render () {
		return (
			<div>{ this.greeter('typescript') }</div>
		);
	}
}


export default TestTs;
