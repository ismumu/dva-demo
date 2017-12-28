

import React from 'react';
import dva, { connect } from 'dva';

import styles from './importCommonComponents.less';





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


class Transformation extends React.Component {

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



class DemoImportCommonComponents extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {

		const { dispatch, demoImportCommonComponents } = this.props;

		return (
			<div className={styles.body}>
				<Transformation></Transformation>
			</div>
		)

	}

}

export default connect(({demoImportCommonComponents}) => ({demoImportCommonComponents}))(DemoImportCommonComponents);
