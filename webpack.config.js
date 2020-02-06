const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');
const Dev = process.env.NODE_ENV === 'development';
const webpackDevServer = Dev
	? {
			devServer: {
				contentBase: path.resolve('./build'),
				index: 'index.html',
				port: 5000
			}
	  }
	: {};

const splitChunk = !Dev
	? {}
	: {
			splitChunks: {
				chunks: 'async',
				minSize: 30000,
				maxSize: 0,
				minChunks: 1,
				maxAsyncRequests: 6,
				maxInitialRequests: 4,
				automaticNameDelimiter: '~',
				automaticNameMaxLength: 30
			}
	  };

module.exports = {
	entry: './index.ts',
	output: {
		filename: Dev ? '[name].js' : '[name].min.js',
		path: path.resolve(__dirname, 'build'),
		library: 'react-free-dropdown',
		libraryTarget: 'umd',
		sourceMapFilename: '[name].map'
	},
	...webpackDevServer,
	node: {
		process: false
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	devtool: 'source-map',
	mode: Dev ? 'development' : 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: srcPath,
				use: ['babel-loader', 'stylelint-custom-processor-loader']
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				include: srcPath,
				loader: 'ts-loader'
			},
			{
				test: /\.(jpe?g|ico|gif|png|svg)$/,
				loader: ['file-loader', 'url-loader']
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: 'index.html'
		}),
		new CleanWebpackPlugin()
	],
	optimization: {
		...splitChunk
	}
};
