import Vue from 'vue';
import App from './App.vue';
import { router } from "./routers/index";
import store from "./stores";
import { beforeEach } from "./routers/hooks";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./css/style.css";
import "./css/style.less";

Vue.config.productionTip = false;

Vue.use(Antd);
router.beforeEach(beforeEach);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
