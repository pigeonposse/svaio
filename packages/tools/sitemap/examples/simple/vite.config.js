import sitemap              from '@svaio/sitemap'
import { setDefaultConfig } from '@svaio/sitemap/utils'
import { sveltekit }        from '@sveltejs/kit/vite'
import { defineConfig }     from 'vite'

export default defineConfig( { plugins: [ sitemap( setDefaultConfig( ) ), sveltekit() ] } )
