module.exports = {
	// The root of your source code, typically /src
	// `<rootDir>` is a token Jest substitutes
	roots: ['<rootDir>/src/__test__'],
	// Jest transformations -- this adds support for TypeScript
	// using ts-jest
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	// Runs special logic, such as cleaning up components
	// when using React Testing Library and adds special
	// extended assertions to Jest
	setupFilesAfterEnv: ['@testing-library/react/dont-cleanup-after-each', '@testing-library/jest-dom/extend-expect'],
	preset: 'ts-jest',
	transformIgnorePatterns: ['./node_modules/'],
	// Test spec file resolution pattern
	// Matches parent folder `__tests__` and filename
	// should contain `test` or `spec`.
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	// Module file extensions for importing
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	// jest image error : error and resolved it by creating a assetsTransformer.js
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/assetsTransformer.js',
		'\\.(css|less)$': '<rootDir>/assetsTransformer.js'
	}
};
