import pwa                  from '@svaio/pwa'
import { setDefaultConfig } from '@svaio/pwa/utils'
import { sveltekit }        from '@sveltejs/kit/vite'
import { defineConfig }     from 'vite'

export default defineConfig( { plugins : [
	pwa( setDefaultConfig( {
		name        : 'my-svelte-app',
		description : 'My Svelte App Description',
	} ) ),
	sveltekit(),
] } )
