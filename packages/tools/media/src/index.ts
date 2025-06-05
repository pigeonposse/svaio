
import { enhancedImages } from '@sveltejs/enhanced-img'

import {
	default as createPlugin,
	type VitePlugin as CreateOptions,
} from './create/vite'

import type { PluginOption } from 'vite'

export type Options = {
	/**
	 * Enhanced images
	 *
	 * @default false
	 * @see https://svelte.dev/docs/kit/images#sveltejs-enhanced-img-Basic-usage
	 */
	enhanced? : boolean
	/**
	 * Create Images
	 */
	create?   : CreateOptions
}

/**
 * SvelteKit Media Plugin
 *
 * @param   {Options}      [opts] - An object containing configuration options.
 * @returns {PluginOption}        - The vite plugin instance.
 * @example
 * import media from '@svaio/media'
 * import { sveltekit } from '@sveltejs/kit/vite'
 * import { defineConfig } from 'vite'
 *
 * export default defineConfig( {
 *   plugins: [
 *      media(),
 *      sveltekit()
 *   ],
 * } )
 */
const vitePlugin =  ( opts?: Options ): PluginOption => {

	return [
		opts?.enhanced
			? enhancedImages( )
			: [],
		opts?.create
			? createPlugin( opts.create )
			: [],
	]

}
export default vitePlugin
