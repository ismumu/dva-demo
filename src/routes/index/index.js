import React from 'react';
import dva, { connect } from 'dva';

import styles from './index.css';



class IndexPage extends React.Component {

	constructor (props) {
		super(props);
	}


	render () {

		const { dispatch, modelsIndex } = this.props;

		return (
			<div>welcome to index page.</div>
		);
	}
}

export default connect(({modelsIndex}) => ({modelsIndex}))(IndexPage);
