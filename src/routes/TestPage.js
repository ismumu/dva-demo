

import React from 'react';
import dva, { connect } from 'dva';
import PropTypes from 'prop-types';

import { Table, Button } from 'antd';
import 'antd/dist/antd.css';


import styles from './TestPage.less';



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


	getData = () => {
		const { dispatch } = this.props;

		dispatch({
			type: 'testpage/updateState',
			payload: {
				showLoading: true,
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
			<div className={styles.body}>
				<Table
					className={styles.table}
					dataSource={testpage.dataSource}
					columns={columns}
					loading={testpage.showLoading}
					locale={{
						emptyText: '暂无数据',
					}}
				/>
				<Button
					onClick={this.getData}
					type="primary"
					loading={testpage.showLoading}
				>点击加载数据</Button>
			</div>
		)


	}

}

export default connect(({testpage}) => ({testpage}))(TestPage);
