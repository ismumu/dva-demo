
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
	{
		path: '/es6/object',
		name: 'object',
		parentCode: 'es6',
		parentName: 'ES6',
		component: () => import('../es6/object.tsx'),
	},
	{
		path: '/es6/set-map',
		name: 'Set 和 Map',
		parentCode: 'es6',
		parentName: 'ES6',
		component: () => import('../es6/set-map.tsx'),
	},
	{
		path: '/es6/promise',
		name: 'Promise 对象',
		parentCode: 'es6',
		parentName: 'ES6',
		component: () => import('../es6/promise.tsx'),
	},
	{
		path: '/es6/generator',
		name: 'Generator',
		parentCode: 'es6',
		parentName: 'ES6',
		component: () => import('../es6/generator.tsx'),
	},
	{
		path: '/es6/async',
		name: 'async',
		parentCode: 'es6',
		parentName: 'ES6',
		component: () => import('../es6/async.tsx'),
	},
]

export default Es6Routes;
