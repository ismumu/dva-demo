
const routeList = [
    {
		path: '/',
		name: '首页',
		parentCode: 'index',
		models: () => [import('../../models/index/index')],
		component: () => import('../index/index'),
	},
	{
		path: '/demo/getData',
		name: '获取接口数据',
		parentCode: 'demo',
		parentName: 'Demo',
		models: () => [import('../../models/demo/getData')],
		component: () => import('../demo/getData'),
	},
	{
		path: '/demo/importCommonComponents',
		name: '引入公共组件',
		parentCode: 'demo',
		parentName: 'Demo',
		models: () => [import('../../models/demo/importCommonComponents.js')],
		component: () => import('../demo/importCommonComponents.js'),
	},
	{
		path: '*',
		parentCode: 'error',
		component: () => import('../error/index'),
	},
]

export default routeList;
