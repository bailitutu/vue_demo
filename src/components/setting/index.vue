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
			name: '设置页面'
		}
	}
}
</script>
<style lang="less">
	.login-item {
		font-size:18px;
		color: red;
	}
</style>
