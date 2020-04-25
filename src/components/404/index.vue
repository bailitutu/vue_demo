<template>
	<div>
		404, 页面找不到了呢！
		<div @click="handleBack">返回登录</div>
	</div>
</template>


<script>
export default {
	methods: {
		handleBack() {
			this.$router.replace('/login');
		}
	}
};
</script>
