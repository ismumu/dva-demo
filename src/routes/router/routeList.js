
const routeList = [

	{
		path: '/',
		name: '首页',
		parentCode: 'index',
		models: () => [import('../../models/index/index')],
		component: () => import('../index/index'),
	},




	{
		path: '/demo/index',
		name: 'index',
		parentCode: 'demo',
		parentName: 'Demo',
		// models: () => [import('../../models/demo/getData')],
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



	{
		path: '/es6/index',
		name: 'index',
		parentCode: 'es6',
		parentName: 'ES6',
		component: () => import('../es6/index.tsx'),
	},
	{
		path: '/es6/symbol',
		name: 'Symbol',
		parentCode: 'es6',
		parentName: 'ES6',
		component: () => import('../es6/symbol.tsx'),
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
		path: '/typescript/interface',
		name: 'interface 接口',
		parentCode: 'typescript',
		parentName: 'TypeScript',
		component: () => import('../typescript/interface.tsx'),
	},
	{
		path: '/typescript/classes',
		name: 'class 类',
		parentCode: 'typescript',
		parentName: 'TypeScript',
		component: () => import('../typescript/classes.tsx'),
	},
	{
		path: '/typescript/functions',
		name: '函数',
		parentCode: 'typescript',
		parentName: 'TypeScript',
		component: () => import('../typescript/functions.tsx'),
	},
	{
		path: '/typescript/generics',
		name: '泛型',
		parentCode: 'typescript',
		parentName: 'TypeScript',
		component: () => import('../typescript/generics.tsx'),
	},




	{
		path: '/nginx/spa-config',
		name: '在nginx上部署单页面',
		parentCode: 'nginx',
		parentName: 'Nginx',
		component: () => import('../nginx/spa.tsx'),
	},




	{
		path: '*',
		parentCode: 'error',
		component: () => import('../error/index'),
	},
]

export default routeList;
