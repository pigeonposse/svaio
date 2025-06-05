import sitemap          from '@svaio/sitemap'
import { sveltekit }    from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig( { plugins : [
	sitemap( {
		hostname : 'https://example.com',
		i18n     : {
			defaultLanguage : 'en',
			languages       : [ 'en', 'es' ],
		},
		robots : [
			{
				userAgent : '*',
				allow     : '/',
				disallow  : '/admin/*',
			},
		],
	} ),
	sveltekit(),
] } )
