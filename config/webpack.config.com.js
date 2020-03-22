const APP_ROOT = process.cwd(); // 当前项目的根目录
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
const ENV_IS_DEV = process.env.NODE_ENV === 'development';// 开发模式

module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(APP_ROOT, './src/main.js'),
	},
	output: {
		path: path.resolve(APP_ROOT, './dist'),
		filename: 'js/[name].[hash:8].js', // 导出的文件名
		chunkFilename: 'js/[name].[hash:8].js', // 异步加载模块打包的文件名
	},
	resolve: {
		// webpack 查找模块的规则
		alias: {
			// 自定义路径
			vue$: 'vue/dist/vue.runtime.esm.js', // 以vue结尾的
			'@': path.resolve(APP_ROOT, './src'),
			'@components': path.resolve(APP_ROOT, './src/components'),
		},
		modules: [path.resolve(APP_ROOT, 'src'), 'node_modules'], // 第三方模块查找顺序
		extensions: ['.vue', '.js', '.json', '.less', '.css'], // 自动添加扩展名进行顺序查找
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader',
						options: {
							compilerOptions: {
								preserveWhitespace: false, // 不保留空白
							},
						},
					},
				],
			},
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: ENV_IS_DEV
							? 'vue-style-loader'
							: MiniCssExtractPlugin.loader,
						options: {
							publicPath: './dist/css/',
							hmr: ENV_IS_DEV, // 是否热更新
						},
					},
					'css-loader',
					'postcss-loader',
				],
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: ENV_IS_DEV
							? 'vue-style-loader'
							: MiniCssExtractPlugin.loader,
						options: {
							publicPath: './dist/css/',
							hmr: ENV_IS_DEV,
						},
					},
					'css-loader',
					'postcss-loader',
					'less-loader',
				],
			},
			{
				test: /\.(jpe?g|png|gif)$/i, //图片文件
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,
							fallback: {
								loader: 'file-loader',
								options: {
									name: 'img/[name].[hash:8].[ext]',
								},
							},
						},
					},
				],
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,
							fallback: {
								loader: 'file-loader',
								options: {
									name: 'media/[name].[hash:8].[ext]',
								},
							},
						},
					},
				],
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10240,
							fallback: {
								loader: 'file-loader',
								options: {
									name: 'fonts/[name].[hash:8].[ext]',
								},
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(APP_ROOT, './public/index.html'),
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: ENV_IS_DEV ? '[name].css' : '[name].[hash].css',
			chunkFilename: ENV_IS_DEV ? '[id].css' : '[id].[hash].css',
		}),
		new vueLoaderPlugin(),
	],
};
