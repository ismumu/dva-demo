
import React from 'react';
import dva, { connect } from 'dva';
import { Link } from 'dva/router';

import {
	Layout,
	Menu,
	Icon,
} from 'antd';


import routeList from '../../routes/router/routeList';

import styles from './Menu.css';


const SubMenu = Menu.SubMenu;


const Menus = function () {

	console.log(1111);

	// routeList.map((obj, key) => {
	// 	console.log(obj);
	// 	console.log(key);
	// })


	return (
		<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
			<Menu.Item key="1">
				<Icon type="user" />
				<Link className={styles.link} to="/">index</Link>
			</Menu.Item>
			<SubMenu
				key="sub-demo"
				title={<span><Icon type="appstore-o" /><span>Demo</span></span>}
			>
				<Menu.Item key="sub-demo-1">
					<Link className={styles.link} to="/demo/getData">getData</Link>
				</Menu.Item>
				<Menu.Item key="sub-demo-2">
					<Link className={styles.link} to="/demo/importCommonComponents">importCommonComponents</Link>
				</Menu.Item>
			</SubMenu>
		</Menu>
	)

}


// export default Menus;
export default connect()(Menus);
