

import React from 'react';
import dva, { connect } from 'dva';
import PropTypes from 'prop-types';

import { Table } from 'antd';
import 'antd/dist/antd.css';


import styles from './TestPage.less';




const dataSource = [{
	key: '1',
	name: '胡彦斌',
	age: 32,
	address: '西湖区湖底公园1号'
  }, {
	key: '2',
	name: '胡彦祖',
	age: 42,
	address: '西湖区湖底公园1号'
  }];

  const columns = [{
	title: '姓名',
	dataIndex: 'name',
	key: 'name',
  }, {
	title: '年龄',
	dataIndex: 'age',
	key: 'age',
  }, {
	title: '住址',
	dataIndex: 'address',
	key: 'address',
  }];





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
			<div>
				<div onClick={this.myClick}>{testpage.text} { testpage.algin }</div>
				<Table className={styles.table} dataSource={dataSource} columns={columns} />
			</div>
		)


	}

}

export default connect(({testpage}) => ({testpage}))(TestPage);
