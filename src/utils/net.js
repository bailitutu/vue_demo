

import axios from 'axios';
import store from '../stores/index';
import router from "./routers/index";
import { Message } from 'ant-design-vue';

// 环境的切换
if (process.env.NODE_ENV == 'development') {
	axios.defaults.baseURL = 'https://www.baidu.com'; }
else if (process.env.NODE_ENV == 'debug') {
	axios.defaults.baseURL = 'https://www.ceshi.com';
}
else if (process.env.NODE_ENV == 'production') {
	axios.defaults.baseURL = 'https://www.production.com';
}
axios.defaults.timeout = 5000;

// 设置请求头
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";


// 设置请求拦截器

axios.interceptors.request.use(
	config => {
		const token = store.state.token;
		token && (config.headers.Authorization = token);
		return config;
	},
	error => {
		return Promise.error(error);
	}
);

// 设置响应拦截器
axios.interceptors.response.use(
	response => {
		// 否则的话抛出错误
		if (response.status === 200) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(response);
		}
	},
	error => {
		if (error.response.status) {
			switch (error.response.status) {
				case 401:
					router.replace({
						path: '/login',
						query: {
							redirect: router.currentRoute.fullPath
						}
					});
					break;
				default:
					Message.warning(error.response.data.message);

			}
			return Promise.reject(error.response);
		}
	}
);


/**
 * get 对应GET方法
 * @param {String} url 【请求路径】
 * @param {Object} params 【请求参数】
 * @param {Object} options 扩展
 */
export const get = (url, params, options) => {
	return new Promise((resolve, reject) => {
		axios
			.get({
				url,
				params
			})
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data);
			});
	});
};

/**
 * post 对应POST方法
 * @param {String} url 【请求路径】
 * @param {Object} params 【请求参数】
 * @param {Object} options 扩展
 */
export const post = (url, params, options) => {
	return new Promise((resolve, reject) => {
		axios
			.post({
				url,
				params
			})
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data);
			});
	});
};
