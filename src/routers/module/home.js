export const homeConfig = [
	{
		name: "home",
		path: "/home",
		meta: { title: "首页" },
		component: () => import("@components/home/index.vue")
	}
];
