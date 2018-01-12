
const DemoRoutes = [
	{
		path: '/demo/index',
		name: 'index',
		parentCode: 'demo',
		parentName: 'Demo',
		component: () => import('../demo/index'),
	},
	{
		path: '/demo/importCommonComponents',
		name: '引入公共组件',
		parentCode: 'demo',
		parentName: 'Demo',
		models: () => [import('../../models/demo/importCommonComponents.js')],
		component: () => import('../demo/importCommonComponents.js'),
	},
]

export default DemoRoutes;
