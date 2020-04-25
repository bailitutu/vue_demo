<template>
	<div class="v-home-content">
		<div class="left-menu">
			<div style="height: 56px;" class="g-flex-ac">
				logo
			</div>
			<a-menu
				:defaultSelectedKeys="['1']"
				:defaultOpenKeys="['sub1']"
				mode="inline"
				theme="dark"
				:collapseable="false"
				style="height: 100%; overflow: auto;"
			>
				<a-menu-item key="1">
					<a-icon type="pie-chart" />
					<span>Option 1</span>
				</a-menu-item>
				<a-menu-item key="2">
					<a-icon type="desktop" />
					<span>Option 2</span>
				</a-menu-item>
				<a-menu-item key="3">
					<a-icon type="inbox" />
					<span>Option 3</span>
				</a-menu-item>
				<a-sub-menu key="sub1">
					<span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
					<a-menu-item key="5">Option 5</a-menu-item>
					<a-menu-item key="6">Option 6</a-menu-item>
					<a-menu-item key="7">Option 7</a-menu-item>
					<a-menu-item key="8">Option 8</a-menu-item>
				</a-sub-menu>
				<a-sub-menu key="sub2">
					<span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
					<a-menu-item key="9">Option 9</a-menu-item>
					<a-menu-item key="10">Option 10</a-menu-item>
					<a-sub-menu key="sub3" title="Submenu">
						<a-menu-item key="11">Option 11</a-menu-item>
						<a-menu-item key="12">Option 12</a-menu-item>
					</a-sub-menu>
				</a-sub-menu>
			</a-menu>
		</div>
		<div class="right-extra">
			<div class="top-header g-flex g-ai-c g-js-sb g-pd-lr-12 g-bg-white">
				<div>
					<a-breadcrumb>
						<a-breadcrumb-item>Home</a-breadcrumb-item>
						<a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
						<a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
						<a-breadcrumb-item>An Application</a-breadcrumb-item>
					</a-breadcrumb>
				</div>
				<a-dropdown>
					<a-avatar
						:size="44"
						icon="user"
						style="border: 2px solid #f2f2f2;"
					/>
					<a-menu slot="overlay">
						<a-menu-item @click="handleCenter">
							<a href="javascript:;" >个人中心</a>
						</a-menu-item>
						<a-menu-item @click="handleCenter">
							<a href="javascript:;">设置</a>
						</a-menu-item>
						<a-menu-item @click="handleQuiet">
							退出
						</a-menu-item>
					</a-menu>
				</a-dropdown>
			</div>
			<div class="container">
				<div class="v-router" style="margin: 12px 12px 0; background:#fff;min-height: calc(100vh - 68px);">
					<router-view/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { setTimeout } from 'timers';
import { Storage } from '@utils/utils';
import { TOKEN_KEY } from '@constants/constants';

export default {
	name: 'home',
	data() {
		return {
		};
	},
	methods: {
		handleCenter() {
			this.$router.push('/setting');
		},
		handleQuiet() {
			 this.$confirm({
				content: '确定退出当前账户吗?',
				onOk: () => {
					// 情况本地登录信息，跳转登录页面
					Storage.remove(TOKEN_KEY);
					this.$router.push('/login');
				},
			});
		}
	}
};
</script>
<style lang="less">
	.v-home-content{
		font-size:18px;
		color: #2e586b;
		height: 100%;
		.left-menu {
			position: fixed;
			top: 0;
			left: 0;
			bottom: 0;
		}
		.right-extra{
			width: 100%;
			height: 100%;
			.top-header {
				position: fixed;
				right: 0;
				top: 0;
				left: 176px;
				z-index: 100;
				height: 56px;
			}
			.container{
				height: 100%;
				width: 100%;
				padding: 56px 0 0 176px;

			}
		}

	}
</style>
