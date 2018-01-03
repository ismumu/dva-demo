

import React from 'react';
import dva, { connect } from 'dva';

import styles from './importCommonComponents.less';

import TransformationNumber from '../../components/transformationNumber/index'


class DemoImportCommonComponents extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {

		const { dispatch, demoImportCommonComponents } = this.props;

		return (
			<div className={styles.body}>
				<TransformationNumber></TransformationNumber>
			</div>
		)

	}

}

export default connect(({demoImportCommonComponents}) => ({demoImportCommonComponents}))(DemoImportCommonComponents);
