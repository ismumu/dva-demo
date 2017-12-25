
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';



import IndexPage from './routes/IndexPage';
import Test404Page from './routes/Test404Page';

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/test" exact component={
			dynamic({
				app,
				models: () => import(`./models/testpage`),
				component: () => import('./routes/TestPage'),
			})
		} />
        <Route path="*" exact component={Test404Page} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
