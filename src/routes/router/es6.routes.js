
const Es6Routes = [
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
]

export default Es6Routes;
