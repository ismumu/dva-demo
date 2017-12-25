

import React from 'react';
import dva, { connect } from 'dva';
import PropTypes from 'prop-types';

import styles from './TestPage.less';


class TestPage extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {

		console.log(this.props)

		return (
			<div>11111{this.props.value}</div>
		)

	}

}

export default connect(({testpage}) => ({testpage}))(TestPage);
