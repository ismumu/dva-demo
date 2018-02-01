import React from 'react';
import dva, { connect } from 'dva';
import { Link, withRouter } from 'dva/router';

// nprogress
import 'nprogress/nprogress.css'
import NProgress from 'nprogress';


import styles from './app.less';


import {
	Layout,
	Icon,
	BackTop,
} from 'antd';

const { Header, Content, Footer, Sider } = Layout;



import Menus from '../components/menu/menu';
import IndexPage from './index/index';
import ghs from '../assets/images/ghs.png';



class App extends React.Component {

	constructor ( props ) {
		super (props);


		const { dispatch } = props;

		// top scroll progress indicatorDom
		window.onscroll = function () {

			let windowHeight = document.body.clientHeight; // 屏幕高度
			let bodyHeight =  document.body.scrollHeight; // 内容高度
			let sHeight = bodyHeight - windowHeight;
			let scrollY =  window.scrollY // 滚动条距离顶部的高度

			window.requestAnimationFrame(function(){
				dispatch({
					type: 'dvaDemoApp/updateState',
					payload: {
						progressWidth: Math.max(0, Math.min(1, scrollY / sHeight)) * 100,
					}
				})
			});
		}

	}

	componentWillUpdate () {

		const { dvaDemoApp, dispatch, location } = this.props;

		let _routers = dvaDemoApp.routers;


		if ( _routers[_routers.length -1] != location.pathname ) {
			// router更新后返回页面顶部
			window.scrollTo(0, 0);
			NProgress.start();
		}

	}

	componentDidUpdate () {

		const { loading } = this.props;
		if ( !loading.global ) {
			NProgress.done();
		}

	}

	onCollapse = () => {
		// 折叠左侧菜单
		const { dvaDemoApp, dispatch } = this.props;
		dispatch({
			type: 'dvaDemoApp/updateState',
			payload: {
				collapsed: !dvaDemoApp.collapsed,
			}
		})
	}

	render () {

		const { dvaDemoApp, children, location, loading } = this.props;

		if ( location.pathname !== '/' ) {
			return (
				<Layout className={styles.layout}>
					<Sider
						collapsible
						collapsed={ dvaDemoApp.collapsed }
						onCollapse={ this.onCollapse }
					>
						<div className={styles.logo}>ismumu's home</div>
						<Menus pathname={location.pathname} />
					</Sider>

					<Layout>
						<Header className={styles.header}>

							<Icon
								className={styles.trigger}
								type={dvaDemoApp.collapsed ? 'menu-unfold' : 'menu-fold'}
								onClick={ this.onCollapse }
								/>
						</Header>

						<Content className={styles.contentWrap}>
							<div className={styles.content}>
								{children}
							</div>
						</Content>

						<Footer className={styles.footer} >Contact Email：ismmm@qq.com | <img src={ghs} alt="ghs" /> 浙公网安备 33010402001108号</Footer>
					</Layout>
					<BackTop />
					<div className={styles.progressIndicator} style={{'width': dvaDemoApp.progressWidth + '%'}}></div>
				</Layout>
			)
		} else {
			return <IndexPage></IndexPage>
		}
	}

}

export default withRouter(connect(({dvaDemoApp, loading}) => ({dvaDemoApp, loading}))(App));
