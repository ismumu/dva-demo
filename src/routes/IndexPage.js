import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';


import { Link } from 'dva/router';


import { Button } from 'antd';
import 'antd/dist/antd.css';

function IndexPage() {

	return (
		<div className={styles.normal}>
			<h1 className={styles.title}>Yay! Welcome to dva!</h1>
			<Button type="primary" size="large">
				<Link to="/test">go to testpage</Link>
			</Button>
		</div>
	);
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
