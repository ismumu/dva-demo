

import React from 'react';
import dva, { connect } from 'dva';

import { Table, Button } from 'antd';
import 'antd/dist/antd.css';


import styles from './DoubleNumber.less';





class Number extends React.Component {

	constructor (props) {
		super(props);
	}

	handleChange = (val) => {
		console.log(val);
	}

	render () {
		return (
			<fieldset>
				<legend>原始数字</legend>
				请输入数字: <input type="number" onChange={this.handleChange} />
			</fieldset>
		)
	}
}

class DoubleNumber extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<fieldset>
				<legend>放大2倍的数字</legend>
				请输入数字: <input type="number" />
			</fieldset>
		)
	}
}



class Transformation extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
				<Number></Number>
				<DoubleNumber></DoubleNumber>
			</div>
		)
	}
}



class Demo1Page extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {

		const { dispatch, doubleNumber } = this.props;

		console.log(doubleNumber);

		return (
			<Transformation></Transformation>
		)

	}

}

export default connect(({doubleNumber}) => ({doubleNumber}))(Demo1Page);
