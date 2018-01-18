
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
	{
		path: '/es6/yield',
		name: 'yield',
		parentCode: 'es6',
		parentName: 'ES6',
		component: () => import('../es6/yield.tsx'),
	},
	{
		path: '/es6/number',
		name: 'number',
		parentCode: 'es6',
		parentName: 'ES6',
		component: () => import('../es6/number.tsx'),
	},
	{
		path: '/es6/function',
		name: 'function',
		parentCode: 'es6',
		parentName: 'ES6',
		component: () => import('../es6/function.tsx'),
	},
	{
		path: '/es6/array',
		name: 'array',
		parentCode: 'es6',
		parentName: 'ES6',
		component: () => import('../es6/array.tsx'),
	},
]

export default Es6Routes;
