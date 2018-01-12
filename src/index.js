import dva from 'dva';

import 'antd/dist/antd.css';

import './index.css';

import createLoading from 'dva-loading';

import createHistory from 'history/createBrowserHistory';


// Ajax进度条
import 'nprogress/nprogress.css'
import nprogressDva from 'dva-nprogress';



// 1. Initialize
const app = dva({
	history: createHistory(),
});

// 2. Plugins
// app.use({});
app.use(nprogressDva());

// 3. Model
app.model(require('./models/app.js'));

// 4. Router
app.router(require('./routes/router/index'));

// 5. Start
app.start('#root');
