const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');
const Dev = process.env.NODE_ENV === 'development';

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'react-free-dropdown',
		libraryTarget: 'umd',
		sourceMapFilename: 'index.map'
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
				test: /\.(js|jsx)$/,
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
				test: /\.(jpe?g|ico|gif|png|svg)$/,
				loader: ['file-loader', 'url-loader']
			}
		]
	},
	plugins: [new CleanWebpackPlugin()]
};
