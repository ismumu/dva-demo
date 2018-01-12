
const ErrorRoutes = [
	{
		path: '*',
		parentCode: 'error',
		component: () => import('../error/index'),
	},
]

export default ErrorRoutes;
