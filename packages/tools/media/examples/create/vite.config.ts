import media                     from '@svaio/media'
import { setDefaultMediaConfig } from '@svaio/media/utils'
import { sveltekit }             from '@sveltejs/kit/vite'
import { defineConfig }          from 'vite'

export default defineConfig( { plugins : [
	media( { create : { value : { og : setDefaultMediaConfig( {
		title : 'My Web title',
		desc  : 'My Web description',
		image : 'https://github.com/pigeonposse.png',
		color : {
			primary   : '#3c579d',
			secondary : '#4276b5',
			terciary  : '#347ba4',
			fourth    : '#33a09a',
		},
	} ) } } } ),
	sveltekit(),
] } )
