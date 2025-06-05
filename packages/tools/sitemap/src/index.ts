import { PluginOption } from 'vite'
import sitemap          from 'vite-plugin-sitemap'

import type { Options } from './types'

export type { Options }

/**
 * Sitemap plugin for Vite and SvelteKit.
 *
 * @param   {Options}                     opts - An object containing configuration options for the
 *                                             sitemap plugin.
 * @returns {import('vite').PluginOption}      The configured sitemap plugin instance.
 * @example
 * import { sitemapPlugin } from '@svaio/sitemap'
 * import { defineConfig }  from 'vite'
 *
 * export default defineConfig( {
 *   plugins: [
 *      sitemapPlugin( {
 *        hostname: 'https://example.com',
 *        outDir  : 'dist/web',
 *      } ),
 *   ],
 * } )
 */
const vitePlugin = ( opts?: Options ): PluginOption =>
	sitemap( opts )

export default vitePlugin
