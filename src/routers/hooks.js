

import { Storage } from '@utils/utils';
import { TOKEN_KEY } from '@constants/constants';
import NProgress from 'nprogress';

const isLoggedIn = () => {
	return !!Storage.get(TOKEN_KEY);
};

export const beforeEach = ((to, from, next) => {

	NProgress.start();

	document.title = to.meta.title;

	if (to.meta.auth && to.path !== '/login') {
		console.log('1');
		if (!isLoggedIn()) {
			console.log(2);
			next({
				path: "/login",
				query: { redirect: to.fullPath }
			});
			NProgress.done();
		} else {
			console.log(3);
			next();
		}
	} else {
		next();
	}
});


export const afterEach = (() => {
	NProgress.done();
});
