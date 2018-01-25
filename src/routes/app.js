import React from 'react';
import dva, { connect } from 'dva';
import { Link, withRouter } from 'dva/router';

import $ from "jquery";

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




// let progressIndicatorDom = '';

class App extends React.Component {

	constructor ( props ) {
		super (props);
	}

	componentDidMount () {



		// top scroll progress indicatorDom

		// $(function(){
		// 	var $w = $(window);
		// 	var $prog = $(progressIndicatorDom);
		// 	var wh = $w.height();
		// 	var h = $('.ant-layout').height();
		// 	var sHeight = h - wh;

		// 	$w.on('scroll', function() {
		// 		window.requestAnimationFrame(function(){
		// 			var perc = Math.max(0, Math.min(1, $w.scrollTop() / sHeight));
		// 			$prog.css({width: perc * 100 + '%'});
		// 		});
		// 	});
		// })


	}



	componentWillUpdate () {
		// router更新后返回页面顶部
		window.scrollTo(0, 0);

		NProgress.start();
	}

	componentDidUpdate () {
		const { loading } = this.props;
		if ( !loading.global ) {
			NProgress.done();
		}
	}

	updateNode = (node) => {
		// progressIndicatorDom = node;
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
						<div className={styles.logo}>ismumu</div>
						<Menus pathname={dvaDemoApp.pathname} />
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

						<Footer className={styles.footer} ><img src={ghs} alt="ghs" />浙公网安备 33010402001108号</Footer>
					</Layout>
					<BackTop />
					<div className={styles.progressIndicator} ref={ (node) => { this.updateNode(node) } }></div>
				</Layout>
			)
		} else {
			return <IndexPage></IndexPage>
		}
	}

}

export default withRouter(connect(({dvaDemoApp, loading}) => ({dvaDemoApp, loading}))(App));
