

import React from 'react';
import dva, { connect } from 'dva';

import Link from 'next/link';

import TransformationNumber from '../../src/components/transformationNumber/index'


class DemoImportCommonComponents extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {

		const { dispatch, demoImportCommonComponents } = this.props;

		return (
			<div className="body">
				<TransformationNumber></TransformationNumber>
				<Link href="/">
                    <a>Go to /index</a>
                </Link>
				<style>{`
					fieldset {
						width: 500px;
						padding: 20px;
						border: 2px solid #aaa;
						margin-bottom: 30px;
					}

					fieldset legend {
						width: auto;
					}
                `}</style>
			</div>
		)

	}

}

// export default connect(({demoImportCommonComponents}) => ({demoImportCommonComponents}))(DemoImportCommonComponents);
export default DemoImportCommonComponents;
