

import React from 'react';
import dva, { connect } from 'dva';

import { Table, Button } from 'antd';

import styles from './getData.less';



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





class GetData extends React.Component {

	constructor (props) {
		super(props)
	}


	getData = () => {
		const { dispatch } = this.props;

		dispatch({
			type: 'getdata/updateState',
			payload: {
				showLoading: true,
			}
		})


		dispatch({
			type: 'getdata/getData',
			payload: {
				bb: 1
			}
		})
	}

	render () {

		const { dispatch, getdata } = this.props;

		return (
			<div className={styles.body}>
				<Table
					className={styles.table}
					dataSource={getdata.dataSource}
					columns={columns}
					loading={getdata.showLoading}
					locale={{
						emptyText: '暂无数据',
					}}
				/>
				<Button
					onClick={this.getData}
					type="primary"
					loading={getdata.showLoading}
				>点击加载数据</Button>
			</div>
		)


	}

}

export default connect(({getdata}) => ({getdata}))(GetData);
