import {
	access,
	constants,
	mkdir,
	stat,
} from 'node:fs/promises'
import { generateSitemap } from 'sitemap-ts'
import { PluginOption }    from 'vite'

import { logger } from '../../_shared/log'

import type { Options } from './types'

const existsDir = async ( path: string ): Promise<boolean> => {

	try {

		await access( path, constants.F_OK )
		const stats = await stat( path )
		return stats.isDirectory() // Returns true if it is a directory

	}
	catch ( _error ) {

		return false

	}

}
const ensureDir = async ( path: string ) => {

	const exist = await existsDir( path )
	if ( exist ) return
	try {

		await mkdir( path, { recursive: true } )

	}
	catch ( error ) {

		throw Error( `Error creating the directory: ${error}` )

	}

}
const PLUGIN_ID = 'svaio-sitemap'
const log       = logger( PLUGIN_ID )

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
const vitePlugin = ( opts?: Options ): PluginOption => ( {
	name : PLUGIN_ID,
	async closeBundle() {

		try {

			const outDir = opts?.outDir || '.svelte-kit/output/client'
			await ensureDir( outDir )
			generateSitemap( {
				outDir,
				...opts,
			} )
			log.success( 'Sitemap created successfully! at: ' + outDir )

		}
		catch ( error ) {

			log.error( error )

		}

	},
	transformIndexHtml() {

		return [
			{
				tag      : 'link',
				injectTo : 'head' as 'head' | 'body' | 'head-prepend' | 'body-prepend',
				attrs    : {
					rel   : 'sitemap',
					type  : 'application/xml',
					title : 'Sitemap',
					href  : '/sitemap.xml',
				},
			},
		]

	},
} )

export default vitePlugin
