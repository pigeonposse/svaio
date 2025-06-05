import { paraglide } from '@inlang/paraglide-sveltekit/vite'

import type { PluginOption } from 'vite'

export type Options = Parameters<typeof paraglide>[0]

/**
 * SvelteKit i18n Plugin
 *
 * @param   {Options}      opts - An object containing configuration options.
 * @returns {PluginOption}      - The configured vite plugin.
 * @example
 * ```js
 * // ./vite.config.js
 * import i18nPlugin from '@svaio/i18n'
 * import { sveltekit } from '@sveltejs/kit/vite'
 * import { defineConfig } from 'vite'
 *
 * export default defineConfig( {
 *   plugins: [
 *      i18nPlugin(),
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
const vitePlugin = ( opts?: Options ): PluginOption =>
	paraglide( opts || {
		project : './project.inlang',
		outdir  : './src/locales',
	} )

export default vitePlugin
