
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';


import App from './routes/app';





function RouterConfig({ history, app }) {

	return (
		<Router history={history}>
			<App>
				<Switch>
					<Route path="/" exact component={
						dynamic({
							app,
							models: () => [import('./models/index/index')],
							component: () => import('./routes/index/index'),
						})
					} />
					<Route path="/demo/getData" exact component={
						dynamic({
							app,
							models: () => [import('./models/demo/getData')],
							component: () => import('./routes/demo/getData'),
						})
					} />
					<Route path="/demo/importCommonComponents" exact component={
						dynamic({
							app,
							models: () => [import('./models/demo/importCommonComponents.js')],
							component: () => import('./routes/demo/importCommonComponents.js'),
						})
					} />
					<Route path="*" exact component={
						dynamic({
							app,
							component: () => import('./routes/error/index'),
						})
					} />
				</Switch>
			</App>
		</Router>
	);
}

export default RouterConfig;
