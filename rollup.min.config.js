import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
// eslint-disable-next-line import/extensions
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

const input = 'src/index.ts';
const globals = { react: 'React', 'react-dom': 'ReactDOM', 'styled-components': 'styled' };
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const external = ['react', 'react-dom', 'styled-components'];

export default {
	input,
	output: [
		{
			file: `dist/${pkg.name}.min.es.js`,
			format: 'es'
		}
	],
	external,
	plugins: [
		commonjs({ include: 'node_modules/**' }),
		resolve({ extensions }),
		typescript({ tsconfig: './tsconfig.json', clean: true }),
		svgr(),
		image(),
		url(),
		peerDepsExternal(),
		terser()
	]
};
