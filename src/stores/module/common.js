const state = {
	token: ''
};
const mutations = {
	LOGIN_SET_TOKEN_SUCCESS(state, { info }) {
		state.token = info;
	}
};

export const commonState = {
	state: { ...state },
	mutations
};
