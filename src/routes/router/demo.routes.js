
const DemoRoutes = [
	{
		path: '/demo/index',
		name: 'index',
		parentCode: 'demo',
		parentName: 'Demo',
		component: () => import('../demo/index'),
	},
	{
		path: '/demo/getData',
		name: 'get data',
		isShow: true, // 是否展示到menu上面
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
		path: '/demo/regex',
		name: '常用正则',
		parentCode: 'demo',
		parentName: 'Demo',
		component: () => import('../demo/regex.tsx'),
	},
]

export default DemoRoutes;
