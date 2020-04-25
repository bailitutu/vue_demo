import { commonState } from "./common.js";
import { loginState } from "./login.js";
import { settingState } from "./setting.js";

export const storeConfig = {
	...commonState,
	...loginState,
	...settingState
};
