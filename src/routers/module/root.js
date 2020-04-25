import { loginConfig } from "./login.js";
import { homeConfig } from "./home.js";
import { settingConfig } from "./setting.js";

export const routerConfig = {
	mode: "history",
	routes: [
		...loginConfig,
		...homeConfig,
		...settingConfig,
		{
			path: "/",
			redirect: () => {
				return "/login";
			}
		},
		{
			path: "*",
			name: "error",
			meta: { title: "404" },
			component: () => import("@components/404/index.vue")
		}
	]
};
