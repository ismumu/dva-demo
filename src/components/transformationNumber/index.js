import React from 'react';
import dva, { connect } from 'dva';


import Fieldset from './Fieldset';


class TransformationNumber extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			value: '',
			idCode: '',
		}
	}

	handleChange = (obj) => {
		this.setState({
			...obj
		})
	}

	render () {
		let idCode = this.state.idCode;
		let value = parseFloat(this.state.value);

		let oneData, doubleData;

		if ( idCode === 'one' && value ) {
			oneData = value;
			doubleData = value * 2;
		} else if ( idCode === 'double' && value ) {
			oneData = value / 2;
			doubleData = value;
		} else {
			oneData = '';
			doubleData = '';
		}


		return (
			<div>
				<Fieldset titleText="1倍数字" idCode="one" onFieldsetChange={this.handleChange} showValue={oneData}></Fieldset>
				<Fieldset titleText="2倍数字" idCode="double" onFieldsetChange={this.handleChange} showValue={doubleData}></Fieldset>
			</div>
		)
	}
}

export default TransformationNumber;
