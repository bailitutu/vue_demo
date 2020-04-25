<template>
	<div class="login-item">
		<p>{{ name }}</p>
		<a-form-model
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			v-bind="layout"
			class="form-item"

		>
			<a-form-model-item has-feedback label="用户名" prop="account">
				<a-input v-model="ruleForm.account" type="text" autocomplete="off" />
			</a-form-model-item>
			<a-form-model-item has-feedback label="密码" prop="password">
				<a-input v-model="ruleForm.password" type="password" autocomplete="off" />
			</a-form-model-item>
			<a-form-model-item class="g-flex-ac">
				<a-button type="primary" @click="submitForm('ruleForm')">
					登录
				</a-button>
				<a-button type="primary"  style="margin-left: 10px;">
					注册
				</a-button>
			</a-form-model-item>
		</a-form-model>
	</div>
</template>
<script>
import { Storage } from '@utils/utils';
import { TOKEN_KEY } from '@constants/constants';

export default {
	name: 'login',
	data() {
		let validatePassward = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'));
			} else {
				callback();
			}
		};
		let validateAccount = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入用户名'));
			} else {
				callback();
			}
		};
		return {
			name: '登录界面',
			ruleForm: {
				password: '',
				account: '',
			},
			rules: {
				account: [{ validator: validateAccount, trigger: 'change' }],
				password: [{ validator: validatePassward, trigger: 'change' }],
			},
			layout: {
				labelCol: { span: 4 },
				wrapperCol: { span: 16 },
			},
		};
	},
	methods: {
		handleLogin() {
			if (redirect) {
				this.$router.push(redirect);
			} else {
				this.$router.push({
					path: '/setting'
				});
			}
		},
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					let { redirect } = this.$route.query || '';
					Storage.set(TOKEN_KEY, '1123123');
					if (redirect) {
						this.$router.push(redirect);
					} else {
						this.$router.push({
							path: '/home'
						});
					}
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		},
	}
};
</script>
<style lang="less">
	.login-item {
		font-size:18px;
		color: #999;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 100px;
		.form-item{
			width: 300px;
		}
	}

</style>
