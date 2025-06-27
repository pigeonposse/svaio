import {
	setConfig,
	setSvelteConfig,
} from '@dovenv/theme-pigeonposse/eslint'

export default setConfig(
	{
		general   : 'ts',
		vue       : true,
		toml      : true,
		json      : true,
		package   : true,
		yaml      : true,
		jsdoc     : true,
		md        : true,
		gitignore : true,
		ignore    : [
			'**/docs/**/*.md',
			'**/README.md',
			'**/docs/data/**/*.md',
			'**/CHANGELOG.md',
			'**/examples/**/partials/*',
			'**/.dovenv/**/partials/*',
			'**/.dovenv/**/templates/*',
			'**/packages/create/data/**',
			'**/packages/config/**/tests/**',
		],
	},
	async c => ( [ ...c, ...( await setSvelteConfig( { ts: true } ) ) ] ),
)

