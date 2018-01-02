
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

	// 组装数据
	let dataObj = {}
	routeList.map((obj, key) => {
		let code = obj.parentCode;
		dataObj[code] = [...(dataObj[code] || []), obj];
	})

	// 组装menu数组
	let menuArray = [];
	for ( let key in dataObj ) {
		if ( key === 'error' ) break;

		let valueArray = dataObj[key];
		if ( valueArray.length === 1 ) {
			menuArray.push(
				<Menu.Item key={valueArray[0].path}>
					<Link className={styles.link} to={valueArray[0].path}>{valueArray[0].name}</Link>
				</Menu.Item>
			)
		} else {
			let subMenuArray = [];
			valueArray.map((obj, key) => {
				subMenuArray.push(
					<Menu.Item key={obj.path}>
						<Link className={styles.link} to={obj.path}>{obj.name}</Link>
					</Menu.Item>
				)
			})
			menuArray.push(
				<SubMenu
					key={valueArray[0].parentCode}
					title={<span>{valueArray[0].parentName}</span>}
				>
					{ subMenuArray }
				</SubMenu>
			)
		}
	}

	return (
		<Menu theme="dark" mode="inline">
			{ menuArray }
		</Menu>
	)

}


// export default Menus;
export default connect()(Menus);
