<template>
	<div>
		<page-content/>
	</div>
</template>

<script>

import Content from '@components/home/index';

export default {
	name: 'home-main',
	components: {
		'page-content': Content
	},
	data() {
		return {

		};
	}
};
</script>
