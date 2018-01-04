
import * as React from 'react'
import dva, { connect } from 'dva';

import * as styles from './demo2.less';


// let s: any = styles


console.log(styles)
console.log(styles.body);
console.log(styles['body']);


class TsDemo2 extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {


		let isDone: boolean = false;
		let isNumber: number = -3.12 + 3.00;

		let name: string = 'Fuzhen';
		let age: number = 18;
		let sentence: string = `Hello, my name is ${name}. I'll be ${ age + 1 } years old next month. `;



		let list: Array<any> = ['1', '2', 3, {a: 1}];


		return (
			<div className={styles['body']}>
				<h1>基础类型</h1>
				<h2>布尔值</h2>
				{ isDone ? 'true' : 'false' }
				<h2>数字</h2>
				{ isNumber } <br />
				<h2>字符串</h2>
				{ sentence } <br />
				<h2>数组</h2>
				{ JSON.stringify(list) } <br />
				<h2>元组 Tuple</h2>
			</div>
		);
	}
}


export default TsDemo2;
