import { SvelteKitPWA } from '@vite-pwa/sveltekit'

import type { Options }      from './types'
import type { PluginOption } from 'vite'

export type { Options }

/**
 * SvelteKit PWA Plugin
 *
 * @param   {Options}      opts - An object containing configuration options.
 * @returns {PluginOption}      - The configured vite plugin.
 * @example
 * ```js
 * // ./vite.config.js
 * import pwaPlugin            from '@svaio/pwa'
 * import { setDefaultConfig } from '@svaio/pwa/config'
 * import { sveltekit }        from '@sveltejs/kit/vite'
 * import { defineConfig }     from 'vite'
 *
 * export default defineConfig( {
 *   plugins: [
 *      pwaPlugin( setDefaultConfig({name: 'my-svelte-app'}) ),
 *      sveltekit()
 *   ],
 * } )
 * ```
 * ```svelte
 *
 * <!-- src/routes/+layout.svelte -->
 * <script>
 *   import { pwaInfo } from 'virtual:pwa-info'
 * </script>
 *
 * <svelte:head>
 *   {@html pwaInfo ? pwaInfo.webManifest.linkTag : ''}
 * </svelte:head>
 * ```
 */
const vitePlugin = ( opts: Options ): PluginOption =>
	SvelteKitPWA( opts )

export default vitePlugin
