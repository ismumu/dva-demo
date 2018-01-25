
const NginxRoutes = [
	{
		path: '/nginx/spa-config',
		name: '在nginx上部署单页面',
		parentCode: 'nginx',
		parentName: 'Nginx',
		component: () => import('../nginx/spa.tsx'),
	},
	{
		path: '/nginx/gzip',
		name: 'Nginx开启gzip',
		parentCode: 'nginx',
		parentName: 'Nginx',
		component: () => import('../nginx/gzip.tsx'),
	},
]

export default NginxRoutes;
