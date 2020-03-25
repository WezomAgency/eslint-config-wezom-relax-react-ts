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
		'plugin:@typescript-eslint/recommended'
	],
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/interface-name-prefix': [ 2, 'always' ],
		'@typescript-eslint/generic-type-naming': [ 2, '^G([A-Z][a-zA-Z]*)?$' ],
		'@typescript-eslint/no-empty-interface': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-unused-vars': [
			2,
			{
				'vars': 'all',
				'args': 'none',
				'caughtErrors': 'all'
			}
		],
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'jsx-a11y/anchor-is-valid': 0,
		'no-extra-boolean-cast': 0,
		'no-sequences': 2,
		'no-tabs': 0,
		'no-unused-vars': 0,
		'react/prop-types': 0,
		'semi': [
			'error',
			'always'
		]
	}
};
