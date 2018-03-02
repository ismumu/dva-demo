
import React from 'react';

import App from '../../components/layout/app';



class DemoIndex extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {

		return (
			<App>
				<div>
					<p>demo index page</p>
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
			</App>
		)
	}

}

export default DemoIndex;
