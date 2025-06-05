import i18n                                     from '@svaio/i18n'
import media                                    from '@svaio/media'
import { setDefaultMediaConfig as mediaConfig } from '@svaio/media/utils'
import pwa                                      from '@svaio/pwa'
import { setDefaultConfig as pwaConfig }        from '@svaio/pwa/utils'
import sitemap                                  from '@svaio/sitemap'
import { setDefaultConfig as sitemapConfig }    from '@svaio/sitemap/utils'
import unocss                                   from '@svaio/unocss'
import {
	presetWind3,
	transformerDirectives,
	extractorSvelte,
} from '@svaio/unocss/utils'
import { sveltekit }    from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig( { plugins : [
	// i18n(),
	media( {
		enhanced : true,
		create   : {
			devMode : true,
			value   : { og : mediaConfig( {
				title : 'dovenvv',
				desc  : 'Complex projects should be easier',
				text  : 'Toolkit for make your code workspace easier',
				image : 'https://dovenv.pigeonposse.com/logo.png',
				color : {
					primary   : '#3c579d',
					secondary : '#4276b5',
					terciary  : '#347ba4',
					fourth    : '#33a09a',
				},
			} ) },
		},
	} ),
	sitemap( sitemapConfig( ) ),
	pwa( pwaConfig( {
		name        : 'Example APP',
		description : 'Example app desc',
	} ) ),
	unocss( {
		presets      : [ presetWind3() ],
		extractors   : [ extractorSvelte() ],
		transformers : [ transformerDirectives() ],
	} ),
	sveltekit(),
] } )
