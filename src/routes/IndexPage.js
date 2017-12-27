import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';


import { Link } from 'dva/router';


import { Button } from 'antd';
import 'antd/dist/antd.css';


const ButtonGroup = Button.Group;




function IndexPage() {

	return (
		<div className={styles.normal}>
			<h1 className={styles.title}>Yay! Welcome to dva!</h1>

			<ButtonGroup>
				<Button type="primary" size="large">
					<Link to="/test">go to testpage</Link>
				</Button>
				<Button type="primary" size="large">
					<Link to="/doubleNumber">go to doubleNumber</Link>
				</Button>
			</ButtonGroup>
		</div>
	);
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
