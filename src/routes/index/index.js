import React from 'react';
import dva, { connect } from 'dva';
import { Link } from 'dva/router';

import styles from './index.css';


import Canvas from './canvas';


// images
import logo_wb from '../../assets/images/wb-02.jpg';

class IndexPage extends React.Component {

	constructor (props) {
		super(props);
	}


	componentDidMount (){
		Canvas(this.canvas);
	}

	render () {

		const { dispatch, modelsIndex } = this.props;

		return (
			<div className={styles.body}>
				<canvas id="canvas" ref={node => this.canvas = node}></canvas>

				<div className={styles.homeContent}>
					<div className={styles.logoWrap}><img className={styles.logo} src={logo_wb} alt="logo"/></div>
					<h1>ismumu's home</h1>
					<nav>
						<Link to="/demo/index">Blogs</Link>
						<a href="https://github.com/ismumu" target="_blank">GitHub</a>
						<a href="https://www.facebook.com/imumumumu" target="_blank">Facebook</a>
						<a href="http://t.qq.com/Jnanke" target="_blank">Weibo</a>
					</nav>
				</div>
			</div>
		);
	}
}

export default connect(({modelsIndex}) => ({modelsIndex}))(IndexPage);
