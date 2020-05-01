module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019,
		ecmaFeatures: {
			jsx: true
		}
	},
	extends: [
		'react-app',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'wezom-relax-ts'
	],
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'jsx-a11y/anchor-is-valid': 0,
		'react/prop-types': 0
	}
};
