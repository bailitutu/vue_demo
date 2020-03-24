<template>
	<div class="login-item">
		{{ name }}
	</div>
</template>
<script>
import Vue from 'vue';

export default {
	name: 'login',
	data() {
		return {
			name: '登录界面'
		};
	},
	methods: {
		get() {
			console.log(1111);
		}
	}
};
</script>
<style lang="less">
	.login-item {
		font-size:18px;
		color: #999;
	}
</style>
