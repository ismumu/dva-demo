import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import TestPage from './routes/TestPage';
import Test404Page from './routes/Test404Page';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/test" exact component={TestPage} />
        <Route path="*" exact component={Test404Page} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;