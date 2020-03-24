<template>
	<div>
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'app',
	data(){
		return {
			name: 'vue'
		};
	}
};
</script>
<style>
	#container {
		color: red;
		font-size: 20px;
	}
</style>
