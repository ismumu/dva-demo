

import React from 'react';
import dva, { connect } from 'dva';
import PropTypes from 'prop-types';

import styles from './TestPage.less';


class TestPage extends React.Component {

	constructor (props) {
		super(props)
	}




	myClick = () => {
		const { dispatch } = this.props;

		dispatch({
			type: 'testpage/updateState',
			payload: {
				aa: 1
			}
		})

		dispatch({
			type: 'testpage/getData',
			payload: {
				bb: 1
			}
		})



	}

	render () {

		const { dispatch, testpage } = this.props;

		return (
			<div onClick={this.myClick}>{testpage.text} { testpage.algin }</div>
		)


	}

}

export default connect(({testpage}) => ({testpage}))(TestPage);
