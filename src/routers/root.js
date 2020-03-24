import { loginConfig } from "./module/login.js";
import { settingConfig } from "./module/setting.js";

export default {
	mode: "history",
	routes: [
		...loginConfig,
		...settingConfig,
		{
			path: "/",
			redirect: () => {
				return "/login";
			}
		}
	]
};
