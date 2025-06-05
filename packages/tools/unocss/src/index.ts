import unocss           from 'unocss/vite'
import { PluginOption } from 'vite'

import { Options } from './types'

export type { Options }

/**
 * Vite plugin for UnoCSS & SvelteKit.
 *
 * @template Theme
 * @param   {Options<Theme>}        opts - An object containing configuration options for UnoCSS.
 * @returns {import('vite').Plugin}      The configured UnoCSS plugin instance.
 * @example
 * ```js
 * // ./vite.config.js
 * import { defineConfig } from 'vite'
 * import unocss from '@svaio/unocss'
 *
 * export default defineConfig( {
 *   plugins: [
 *      unocss( {
 *        // Your UnoCSS configuration here.
 *      } ),
 *   ],
 * } )
 * ```
 * ```svelte
 *
 * <!-- src/routes/+layout.svelte -->
 * <script>
 *    import 'uno.css'
 * </script>
 * ```
 */
const vitePlugin = <Theme extends object>( opts?: Options<Theme> ): PluginOption =>
	unocss<Theme>( opts )

export default vitePlugin
