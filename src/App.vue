<template>
	<div id="container">
		<a-config-provider :locale="zh_CN">
			<router-view />
		</a-config-provider>
	</div>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
export default {
	name: 'app',
	data() {
		return {
			zh_CN
		};
	}
};
</script>
<style>
	#container {
		font-size: 20px;
		height: 100%;
		background: #f2f2f2;
	}
</style>
