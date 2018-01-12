
const TsRoutes = [
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
]

export default TsRoutes;
