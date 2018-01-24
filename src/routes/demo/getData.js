

import React from 'react';
import dva, { connect } from 'dva';

import { Table, Button } from 'antd';

import styles from './getData.less';



const columns = [{
	title: '姓名',
	dataIndex: 'name',
	key: 'name',
}, {
	title: '邮件',
	dataIndex: 'email',
	key: 'email',
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
		})


		dispatch({
			type: 'getdata/getData',
			payload: {
				bb: 1
			}
		})
	}

	render () {

		const { dispatch, getdata, loading } = this.props;
		const isLoading = loading.effects['getdata/getData'];

		return (
			<div>
				<Table
					className={styles.table}
					dataSource={getdata.dataSource}
					columns={columns}
					loading={isLoading}
					locale={{
						emptyText: '暂无数据',
					}}
					pagination={{
						pageSize: 5,
					}}
				/>
				<Button
					onClick={this.getData}
					type="primary"
					loading={isLoading}
				>点击加载数据</Button>
			</div>
		)


	}

}

export default connect(({getdata, loading}) => ({getdata, loading}))(GetData);
