export const settingConfig = [
	{
		name: 'setting',
		path: '/setting',
		meta: {
			title: '设置',
			auth: true
		},
		component: () => import('@components/setting/index.vue'),
	}
];
