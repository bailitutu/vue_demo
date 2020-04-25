<template>
	<div class="login-item">
		<div style="width: 200px;">{{ name }}</div>
	</div>
</template>
<script>
export default {
	name: 'login',
	data() {
		return {
			name: '设置页面'
		};
	},
	created() {

	},
	methods: {

	}
};
</script>
<style lang="less">
	.login-item {
		font-size:18px;
		color: red;
	}
</style>
