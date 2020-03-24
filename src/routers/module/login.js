export const loginConfig = [
	{
		name: 'login',
		path: '/login',
		meta: { title: '登录' },
		component: () => import('@components/login/index.vue')
	}
];
