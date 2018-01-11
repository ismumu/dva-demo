import React from 'react';
import dva, { connect } from 'dva';
import { Link, withRouter } from 'dva/router';


import styles from './app.css';


import {
	Layout,
	Icon,
} from 'antd';

const { Header, Content, Footer, Sider } = Layout;



import Menus from '../components/menu/menu';


import IndexPage from './index/index';



const App = ({
	children,
	dispatch,
	dvaDemoApp,
	location,
}) => {

	const onCollapse = () => {
		dispatch({
			type: 'dvaDemoApp/updateState',
			payload: {
				collapsed: !dvaDemoApp.collapsed,
			}
		})
	}

	if ( location.pathname !== '/' ) {
		return (
			<Layout className={styles.layout}>
				<Sider
					collapsible
					collapsed={ dvaDemoApp.collapsed }
					onCollapse={ onCollapse }
				>
					<div className={styles.logo}>ismumu</div>
					<Menus pathname={dvaDemoApp.pathname} />
				</Sider>

				<Layout>
					<Header className={styles.header}>

						<Icon
							className={styles.trigger}
							type={dvaDemoApp.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={ onCollapse }
							/>
					</Header>

					<Content className={styles.contentWrap}>
						<div className={styles.content}>
							{children}
						</div>
					</Content>
					<Footer className={styles.footer} >Ant Design ©2016 Created by Ant UED</Footer>
				</Layout>
			</Layout>
		)
	} else {
		// index add hidden
		// var body = document.getElementsByTagName('body')[0];
		// body.style.overflow = 'hidden';

		return <IndexPage></IndexPage>
	}

}

export default withRouter(connect(({dvaDemoApp}) => ({dvaDemoApp}))(App));
