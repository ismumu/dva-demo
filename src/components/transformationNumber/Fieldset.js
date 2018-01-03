import React from 'react';
import dva, { connect } from 'dva';


class Fieldset extends React.Component {

	constructor (props) {
		super(props);
	}

	handleChange = (e) => {
		let value = e.target.value;
		this.props.onFieldsetChange({
			value: value,
			idCode: this.props.idCode,
		});
	}

	render () {
		return (
			<fieldset>
				<legend>{this.props.titleText}</legend>
				请输入数字: <input type="number" onChange={this.handleChange} value={this.props.showValue} />
			</fieldset>
		)
	}
}

export default Fieldset;
