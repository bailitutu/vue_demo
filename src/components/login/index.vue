<template>
	<div class="login-item">
		{{ name }}
	</div>
</template>
<script>
export default {
	name: 'login',
	data(){
		return {
			name: '登录界面'
		}
	}
}
</script>
<style lang="less">
	.login-item {
		font-size:18px;
		color: #999;
	}
</style>
