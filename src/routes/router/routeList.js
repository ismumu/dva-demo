
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
		path: '/demo/tf-ag-grid-react',
		name: 'Ag-Grid',
		parentCode: 'demo',
		parentName: 'Demo',
		models: () => [import('../../models/demo/tf-ag-grid-react.js')],
		component: () => import('../demo/tf-ag-grid-react.js'),
	},





	{
		path: '/typescript/demo1',
		name: 'demo 1',
		parentCode: 'typescript',
		parentName: 'TypeScript',
		component: () => import('../typescript/demo1.tsx'),
	},
	{
		path: '/typescript/demo2',
		name: '基础类型',
		parentCode: 'typescript',
		parentName: 'TypeScript',
		component: () => import('../typescript/demo2.tsx'),
	},
	{
		path: '/typescript/markdown',
		name: 'interface 接口',
		parentCode: 'typescript',
		parentName: 'TypeScript',
		component: () => import('../typescript/interface.tsx'),
	},




	{
		path: '*',
		parentCode: 'error',
		component: () => import('../error/index'),
	},
]

export default routeList;
