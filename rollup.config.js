import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import svgs from '@svgr/rollup';
// eslint-disable-next-line import/extensions
import pkg from './package.json';

const input = 'src/index.ts';
const globals = { react: 'React', 'react-dom': 'ReactDOM', 'styled-components': 'styled' };
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const external = ['react', 'react-dom', 'styled-components'];

export default {
	input,
	output: [
		{
			file: `dist/${pkg.name}.js`,
			format: 'cjs'
		},
		{
			file: `dist/${pkg.name}.es.js`,
			format: 'esm'
		},
		{
			file: pkg.main,
			format: 'umd',
			name: 'ReactFreeCustomDropDown',
			globals
		}
	],
	external,
	plugins: [
		commonjs({ include: 'node_modules/**' }),
		resolve({ extensions }),
		typescript({ tsconfig: './tsconfig.json', clean: true }),
		svgs()
	]
};
