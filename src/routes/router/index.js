
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';


import App from '../app';

import routeList from './routeList';


function RouterConfig({ history, app }) {

	return (
		<Router history={history}>
			<App>
				<Switch>
					{
						routeList.map(({ path, ...dynamics }, key) => (
							<Route key={key}
								exact
								path={path}
								component={dynamic({
									app,
									...dynamics,
								})}
							/>
						))
					}
				</Switch>
			</App>
		</Router>
	);
}

export default RouterConfig;
