
const IndexRoutes = [
	{
		path: '/',
		name: '首页',
		parentCode: 'index',
		models: () => [import('../../models/index/index')],
		component: () => import('../index/index'),
	},
]

export default IndexRoutes;
