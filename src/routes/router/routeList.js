


import IndexRoutes from './index.routes';
import DemoRoutes from './demo.routes';
import Es6Routes from './es6.routes';
import TsRoutes from './ts.routes';
import NginxRoutes from './nginx.routes';
import ErrorRoutes from './error.routes';



const routeList = [].concat(
	IndexRoutes,
	DemoRoutes,
	Es6Routes,
	TsRoutes,
	NginxRoutes,
	ErrorRoutes,
);


export default routeList;
