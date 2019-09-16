const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	],
	output: {
		publicPath: '/'
	},
	devServer: {
		hot: true,
		historyApiFallback: true
	},
	devtool: 'source-map',
};