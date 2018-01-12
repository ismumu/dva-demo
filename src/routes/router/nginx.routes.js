
const NginxRoutes = [
	{
		path: '/nginx/spa-config',
		name: '在nginx上部署单页面',
		parentCode: 'nginx',
		parentName: 'Nginx',
		component: () => import('../nginx/spa.tsx'),
	},
]

export default NginxRoutes;
