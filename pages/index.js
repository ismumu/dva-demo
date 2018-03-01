
import React from 'react';
import Link from 'next/link';
import dva, { connect } from 'dva';
import Canvas from './canvas';


// import 'antd/dist/antd.css';
import styles from './index.css';


console.log(styles);


class IndexPage extends React.Component {

	constructor (props) {
		super(props);
	}


	componentDidMount (){
		Canvas(this.canvas);
	}

	render () {

		return (
			<div className={styles.body}>
				<canvas id="canvas" ref={node => this.canvas = node}></canvas>

				<div className={styles.homeContent}>
					<div className={styles.logoWrap}>
						<img className={styles.logo} src="../static/images/wb-02.jpg" alt="logo"/>
					</div>
					<h1>ismumu's home</h1>
					<nav>
						<Link href="/demo/index"><a>Blogs</a></Link>
						<a href="https://github.com/ismumu" target="_blank">GitHub</a>
						<a href="https://www.facebook.com/imumumumu" target="_blank">Facebook</a>
						<a href="http://t.qq.com/Jnanke" target="_blank">Weibo</a>
					</nav>
				</div>
			</div>
		);
	}
}





export default function () {
    const app = dva();
    app.router(() => {
        return <IndexPage/>
    });

    const Component = app.start();
    return (
        <Component />
    );
}
