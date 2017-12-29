import React from 'react';
import dva, { connect } from 'dva';
import { Link, withRouter } from 'dva/router';


import styles from './app.css';


import {
	Layout,
	Menu,
	Breadcrumb,
	Icon,
} from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;



const App = ({
	children,
	dispatch,
	app,
	location,
}) => {


	// console.log(React.Children);

	// children.map( (a, b) => {
	// 	console.log(a)
	// 	console.log(b)
	// })


	const onCollapse = () => {
		dispatch({
			type: 'app/updateState',
			payload: {
				collapsed: !app.collapsed,
			}
		})
	}



	return (
		<Layout className={styles.layout}>
			<Sider
				collapsible
				collapsed={ app.collapsed }
				onCollapse={ onCollapse }
			>
				<div className={styles.logo}>Dva-demo</div>

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
			</Sider>

			<Layout>
				<Header className={styles.header}>

					<Icon
						className={styles.trigger}
						type={app.collapsed ? 'menu-unfold' : 'menu-fold'}
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
				<Footer className={styles.footer} >
					Ant Design ©2016 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
}



// export default connect()(App);
export default connect(({app}) => ({app}))(App);

// export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
// export default withRouter(connect(({ app, loading }) => {

// 	// console.log(app);

// 	return {
// 		app, loading
// 	}
// })(App))
