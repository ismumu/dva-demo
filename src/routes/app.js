import React from 'react';
import dva, { connect } from 'dva';
import { Link, withRouter } from 'dva/router';


import styles from './app.css';

import {
	Layout,
	Breadcrumb,
	Icon,
} from 'antd';

const { Header, Content, Footer, Sider } = Layout;



import Menus from '../components/menu/menu'



const App = ({
	children,
	dispatch,
	dvaDemoApp,
	location,
}) => {

	const onCollapse = () => {
		dispatch({
			type: 'app/updateState',
			payload: {
				collapsed: !dvaDemoApp.collapsed,
			}
		})
	}


	return (
		<Layout className={styles.layout}>
			<Sider
				collapsible
				collapsed={ dvaDemoApp.collapsed }
				onCollapse={ onCollapse }
			>
				<div className={styles.logo}>Dva-demo</div>
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
					<Breadcrumb className={styles.breadcrumb}>
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb>
					<div className={styles.content}>
						{children}
					</div>
				</Content>
				<Footer className={styles.footer} >Ant Design ©2016 Created by Ant UED</Footer>
			</Layout>
		</Layout>
	);
}



// export default App;
export default withRouter(connect(({dvaDemoApp}) => ({dvaDemoApp}))(App));

// export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
// export default withRouter(connect(({ app, loading }) => {

// 	// console.log(app);

// 	return {
// 		app, loading
// 	}
// })(App))
