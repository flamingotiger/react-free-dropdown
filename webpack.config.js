const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const srcPath = path.resolve(__dirname, 'src');
const Dev = process.env.NODE_ENV === 'development';
const Prod = process.env.NODE_ENV === 'production';

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'react-free-dropdown',
		libraryTarget: 'umd',
		sourceMapFilename: 'index.map',
		publicPath: 'assets'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			react: require.resolve('./node_modules/react')
		}
	},
	externals: 'react',
	devtool: 'source-map',
	mode: Dev ? 'development' : 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				include: srcPath,
				use: ['babel-loader', 'stylelint-custom-processor-loader']
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				include: srcPath,
				loader: 'ts-loader'
			},
			{
				test: /\.(woff|woff2|otf|ttf|eot|jpe?g|png|gif|svg|json)$/,
				loader: ['file-loader', 'url-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin([{ from: path.resolve(srcPath, 'assets'), to: 'assets' }]),
		Prod && new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
	]
};
