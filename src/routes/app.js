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
} from 'antd';

const { Header, Content, Footer, Sider } = Layout;



import Menus from '../components/menu/menu';


import IndexPage from './index/index';


import ghs from '../assets/images/ghs.png';

let currHref = '';

const App = ({
	children,
	dispatch,
	dvaDemoApp,
	location,
	loading,
}) => {

    const href = window.location.href;
    if (currHref !== href) {
		NProgress.start();
		// loading.global 为 false 时表示加载完毕
        if (!loading.global) {
            NProgress.done();
            currHref = href;
        }
    }

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
					<Footer className={styles.footer} ><img src={ghs} alt="ghs" /> 浙公网安备 33010402001108号</Footer>
				</Layout>
			</Layout>
		)
	} else {
		return <IndexPage></IndexPage>
	}

}

export default withRouter(connect(({dvaDemoApp, loading}) => ({dvaDemoApp, loading}))(App));
