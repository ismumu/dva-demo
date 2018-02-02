
const BlogsRoutes = [
	{
		path: '/blogs/creat-github-pages',
		name: 'creat github pages',
		parentCode: 'blogs',
		parentName: 'Blogs',
		component: () => import('../blogs/creat-github-pages.tsx'),
	},
	{
		path: '/blogs/regex',
		name: '常用正则',
		parentCode: 'blogs',
		parentName: 'Blogs',
		component: () => import('../blogs/regex.tsx'),
	},
]

export default BlogsRoutes;
