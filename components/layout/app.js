import React from 'react';
// import dva, { connect } from 'dva';
// import { Link } from 'dva/router';

import 'antd/dist/antd.css';

// nprogress
import 'nprogress/nprogress.css'
import NProgress from 'nprogress';


import './app.css';


import {
	Layout,
	Icon,
	BackTop,
	Menu,
} from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const SubMenu = Menu.SubMenu;

// import Menus from '../components/menu/menu';
// import IndexPage from './index/index';
// import ghs from '../assets/images/ghs.png';



class App extends React.Component {

	constructor(props) {
		super(props);


		const { dispatch } = props;


	}

	componentWillUpdate() {

		const { dvaDemoApp, dispatch, location } = this.props;

		let _routers = dvaDemoApp.routers;


		if (_routers[_routers.length - 1] != location.pathname) {
			// router更新后返回页面顶部
			window.scrollTo(0, 0);
			NProgress.start();
		}

	}

	componentDidUpdate() {

		// const { loading } = this.props;
		// if (!loading.global) {
		// 	NProgress.done();
		// }

	}

	onCollapse = () => {
		// 折叠左侧菜单
		// const { dvaDemoApp, dispatch } = this.props;
		// dispatch({
		// 	type: 'dvaDemoApp/updateState',
		// 	payload: {
		// 		collapsed: !dvaDemoApp.collapsed,
		// 	}
		// })
	}

	render() {

		const { dvaDemoApp, children, location, loading } = this.props;

		return (
			<div>
			<Layout style={{minHeight: '100vh'}}>
				<Sider
					collapsible
					collapsed={false}
					onCollapse={this.onCollapse}
				>
					<div className="logo">ismumu's home</div>
					<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
						<Menu.Item key="1">
							<Icon type="pie-chart" />
							<span>Option 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="desktop" />
							<span>Option 2</span>
						</Menu.Item>
						<SubMenu
							key="sub1"
							title={<span><Icon type="user" /><span>User</span></span>}
						>
							<Menu.Item key="3">Tom</Menu.Item>
							<Menu.Item key="4">Bill</Menu.Item>
							<Menu.Item key="5">Alex</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={<span><Icon type="team" /><span>Team</span></span>}
						>
							<Menu.Item key="6">Team 1</Menu.Item>
							<Menu.Item key="8">Team 2</Menu.Item>
						</SubMenu>
						<Menu.Item key="9">
							<Icon type="file" />
							<span>File</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{background: '#fff', padding: 0}}>
						<Icon
							className="trigger"
							type={0 ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
					</Header>
					<Content style={{ margin: '16px' }}>
						<div className="content">
							Bill is a cat.
            			</div>
					</Content>
					<Footer style={{textAlign: 'center'}} >Contact Email：ismmm@qq.com | <img src="../../static/images/ghs.png" alt="ghs" /> 浙公网安备 33010402001108号</Footer>
				</Layout>

			</Layout>
			<style jsx>{`
					.logo {
						height: 32px;
						background: rgba(255,255,255,.2);
						margin: 16px;
						text-align: center;
						line-height: 32px;
						color: #FFF;
						font-size: 16px;
						overflow: hidden;
						font-family: 'Verdana';
						border-radius: 4px;
						text-transform: capitalize;
					}
					.content {
						padding: 24px;
						background: #fff;
						min-height: 360px;
					}

					.breadcrumb {
						margin: 16px 0;
					}
                `}</style>
			</div>
		)
	}

}

// export default withRouter(connect(({dvaDemoApp, loading}) => ({dvaDemoApp, loading}))(App));
export default App;
