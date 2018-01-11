

import React from 'react';
import dva, { connect } from 'dva';



class DemoIndex extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {

		const { dispatch, getdata } = this.props;

		return (
			<div>demo index page</div>
		)


	}

}

export default connect()(DemoIndex);
