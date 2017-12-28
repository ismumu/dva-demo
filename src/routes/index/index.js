import React from 'react';
import dva, { connect } from 'dva';
import { Link } from 'dva/router';


import styles from './index.css';


import {
	Layout,
	Menu,
	Breadcrumb,
	Icon,
	Button
} from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


const ButtonGroup = Button.Group;


class IndexPage extends React.Component {

	constructor (props) {
		super(props);
	}

	onCollapse = (collapsed) => {
		const { dispatch } = this.props;
		dispatch({
			type: 'index/updateState',
			payload: {
				collapsed: collapsed,
			}
		})
	}

	toggle = () => {
		const { dispatch, index } = this.props;
		dispatch({
			type: 'index/updateState',
			payload: {
				collapsed: !index.collapsed,
			}
		})
	}

	render () {

		const { dispatch, index } = this.props;

		return (

			<Layout style={{ minHeight: '100vh' }}>
				<Sider
					collapsible
					collapsed={index.collapsed}
					onCollapse={this.onCollapse}
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
							type={index.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
							/>
					</Header>

					<Content style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<div className={styles.content}>
							Welcome
						</div>
					</Content>
					<Footer className={styles.footer} >
						Ant Design ©2016 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>

			// <div className={styles.normal}>
			// 	<h1 className={styles.title}>Yay! Welcome to dva!</h1>

			// 	<ButtonGroup>
			// 		<Button type="primary" size="large">
			// 			<Link to="/test">go to testpage</Link>
			// 		</Button>
			// 		<Button type="primary" size="large">
			// 			<Link to="/demoImportCommonComponents">go to DemoImportCommonComponents</Link>
			// 		</Button>
			// 	</ButtonGroup>
			// </div>
		);
	}
}


export default connect(({index}) => ({index}))(IndexPage);
