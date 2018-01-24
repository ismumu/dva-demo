import dva from 'dva';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';

import 'antd/dist/antd.css';
import './index.css';


// 1. Initialize
const app = dva({
	history: createHistory(),
});

// 2. Plugins
app.use(createLoading({
	effects: true,
}));

// 3. Model
app.model(require('./models/app.js'));

// 4. Router
app.router(require('./routes/router/index'));

// 5. Start
app.start('#root');
