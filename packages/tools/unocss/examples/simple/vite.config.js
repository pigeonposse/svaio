import unocss             from '@svaio/unocss'
import {
	presetWind3,
	extractorSvelte,
	transformerDirectives,
} from '@svaio/unocss/utils'
import { sveltekit }    from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig( { plugins : [
	unocss( {
		presets      : [ presetWind3() ],
		extractors   : [ extractorSvelte() ],
		transformers : [ transformerDirectives() ],
	} ),
	sveltekit(),
] } )
