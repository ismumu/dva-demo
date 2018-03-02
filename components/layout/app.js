import React from 'react';
// import dva, { connect } from 'dva';
// import { Link } from 'dva/router';

import 'antd/dist/antd.css';

// nprogress
import 'nprogress/nprogress.css'
import NProgress from 'nprogress';


// import styles from './app.less';


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

		// top scroll progress indicatorDom
		// window.onscroll = function () {

		// 	let windowHeight = document.body.clientHeight; // 屏幕高度
		// 	let bodyHeight =  document.body.scrollHeight; // 内容高度
		// 	let sHeight = bodyHeight - windowHeight;
		// 	let scrollY =  window.scrollY // 滚动条距离顶部的高度

		// 	window.requestAnimationFrame(function(){
		// 		dispatch({
		// 			type: 'dvaDemoApp/updateState',
		// 			payload: {
		// 				progressWidth: Math.max(0, Math.min(1, scrollY / sHeight)) * 100,
		// 			}
		// 		})
		// 	});
		// }

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
			<Layout className="layout">
				<Sider
					collapsible
					collapsed={false}
					onCollapse={this.onCollapse}
				>
					<div>ismumu's home</div>
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
					<Header style={{ background: '#fff', padding: 0 }}>
						<Icon
							className="trigger"
							type={0 ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
					</Header>
					<Content style={{ margin: '0 16px' }}>
						<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
							Bill is a cat.
            			</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Ant Design ©2016 Created by Ant UED
          			</Footer>
				</Layout>
				<style jsx>{`

					.layout {
						min-height: 100vh;
					}

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

					.header {
						background: #fff;
						padding-left: 0;
					}
					.contentWrap {
						margin: 16px;
					}
					.content {
						padding: 24px;
						background: #fff;
						min-height: 360px;
					}

					.breadcrumb {
						margin: 16px 0;
					}

					.footer {
						text-align: center;
					}

					.trigger {
						font-size: 18px;
						line-height: 64px;
						padding: 0 24px;
						cursor: pointer;
						transition: color .3s;
					}

					.trigger:hover {
						color: #1890ff;
					}

					.progressIndicator {
						position: fixed;
						top: 0;
						left: 0;
						z-index: 5;
						height: 3px;
						background: linear-gradient(to right, rgba(24,144,255,0), rgba(24,144,255,1));
					}



						#nprogress .bar {
							background: #1890ff;
						}
						#nprogress .peg {
							box-shadow: 0 0 10px #1890ff, 0 0 5px #1890ff;
						}

						#nprogress .spinner-icon {
							border-top-color: #1890ff;
							border-left-color: #1890ff;
						}

						hr {
							margin: 40px 0;
							border: 1px dashed #eee;
						}

						pre {
							border-radius: 4px;
						}


                `}</style>
			</Layout>
		)
	}

}

// export default withRouter(connect(({dvaDemoApp, loading}) => ({dvaDemoApp, loading}))(App));
export default App;
