import './css/style.css';
import './css/style.less';
import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import routerConfig from './routers/root';
Vue.use(Router);
const router = new Router({...routerConfig});
console.log(router);


new Vue({
	router,
	render: h =>h(App)
}).$mount('#app');
