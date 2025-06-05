import media            from '@svaio/media'
import { sveltekit }    from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig( { plugins: [ media( { enhanced: true } ), sveltekit() ] } )
