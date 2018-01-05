
import * as React from 'react'
import dva, { connect } from 'dva';

import * as styles from './demo2.less';


let _class: any = styles;


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

		let x: [string, number];
		x = ['hello', 112,];



		enum Color { Red = 3, Blue, Green }
		let c = Color.Blue;
		let colorName: string = Color[3];


		return (
			<div className={_class.body}>
				<h1>基础类型</h1>

				<h2>布尔值</h2>
				{ isDone ? 'true' : 'false' }

				<h2>数字</h2>
				{ isNumber } <br />

				<h2>字符串</h2>
				{ sentence } <br />

				<h2>数组</h2>
				{ JSON.stringify(list) }

				<h2>元组 Tuple</h2>
				{ x[0].substr(1) }

				<h2>枚举</h2>
				{ c + ', ' + colorName }

				<h2>Any</h2>
				{ '...' }

				<h2>Void</h2>
				{ '...' }

				<h2>Null 和 Undefined</h2>
				{ '...' }

				<h2>Never</h2>
				{ '...' }


			</div>
		);
	}
}


export default TsDemo2;
