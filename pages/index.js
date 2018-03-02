
import React from 'react';
import Link from 'next/link';
import dva, { connect } from 'dva';
import Canvas from './canvas';


import 'antd/dist/antd.css';
// import styles from './index.less';


class IndexPage extends React.Component {

	constructor (props) {
		super(props);
	}


	componentDidMount (){
		Canvas(this.canvas);
	}

	render () {

		return (
			<div className="body">
				<canvas id="canvas" ref={node => this.canvas = node}></canvas>

				<div className="homeContent">
					<div className="logoWrap">
						<img className="logo" src="../static/images/wb-02.jpg" alt="logo"/>
					</div>
					<h1>ismumu's home</h1>
					<nav>
						<Link href="/demo/welcome"><a>Blogs</a></Link>
						<a href="https://github.com/ismumu" target="_blank">GitHub</a>
						<a href="https://www.facebook.com/imumumumu" target="_blank">Facebook</a>
						<a href="http://t.qq.com/Jnanke" target="_blank">Weibo</a>
					</nav>
				</div>
				<style jsx>{`
					.body {
						overflow: hidden;
						background: #262b2e;
					}


					.canvas {
						position: absolute;
						top: 0;
						left: 0;
						z-index: 1;
					}
					.canvasbg {
						position: absolute;
						top: 0;
						left: 0;

						z-index: -10;
						-webkit-filter: blur(3px);
						-moz-filter: blur(3px);
						-o-filter: blur(3px);
						filter: blur(3px);
						opacity: 0.6;
					}

					.homeContent {
						position: absolute;
						top: 150px;
						left: 0;
						width: 100%;
						text-align: center;
						color: #FFF;
					}

					.homeContent .logoWrap {
						background: #fff;
						border: 5px solid #fff;
						border-radius: 12px;
						box-shadow: 0 1px 1px rgba(136,153,166,0.15);
						height: 180px;
						width: 180px;

						margin: 0 auto;
						opacity: 0.9;
						margin-bottom: 50px;
					}

					.homeContent .logo {
						width: 100%;
						border-radius: 8px;
						display: block;
					}

					.homeContent h1 {
						font-family: 'Verdana';
						font-weight: normal;
						font-size: 40px;
						opacity: 0.9;
						color: #F9F9F9;
						text-transform: capitalize;
					}


					.homeContent nav {
						margin-top: 60px;
					}
					.homeContent nav a {
						color: #FFF;
						font-size: 16px;
						display: inline-block;
						padding: 10px 15px;
						position: relative;
						-webkit-transition: color .3s;
						transition: color .3s;
						/*opacity: 0.6;*/
						margin: 0 15px;
					}

					.homeContent nav a:after,.homeContent nav a:before {
						position: absolute;
						left: 0;
						width: 100%;
						height: 2px;
						background: #fff;
						content: '';
						opacity: 0;
						-webkit-transition: opacity .3s,-webkit-transform .3s;
						transition: opacity .3s,-webkit-transform .3s;
						transition: opacity .3s,transform .3s;
						transition: opacity .3s,transform .3s,-webkit-transform .3s;
						-webkit-transform: translateY(-10px);
						transform: translateY(-10px)
					}

					.homeContent nav a:before {
						top: 0;
						-webkit-transform: translateY(-10px);
						transform: translateY(-10px)
					}

					.homeContent nav a:after {
						bottom: 0;
						-webkit-transform: translateY(10px);
						transform: translateY(10px)
					}

					.homeContent nav a:hover {
						color: #fff;
						opacity: 1;
					}

					.homeContent nav a:hover:after,.homeContent nav a:hover:before {
						opacity: 1;
						-webkit-transform: translateY(0);
						transform: translateY(0)
					}

                `}</style>
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
