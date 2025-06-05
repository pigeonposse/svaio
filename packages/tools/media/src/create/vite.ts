/* eslint-disable jsdoc/check-tag-names */

import { join } from 'node:path'

import {
	GLOBAL_CONST_ID,
	PLUGIN_ID,
} from './const'
import { createImages } from './core'
import { Options }      from './types'

import type {
	PluginOption,
	ResolvedConfig,
} from 'vite'

export type VitePlugin = Options & {
	/*
	 * Throw Error if fail
	 */
	throw?   : boolean
	/**
	 * Activate creation on dev
	 *
	 * @default false
	 * @experimental
	 */
	devMode? : boolean
}

const msg = ( m: string, p?:string ) => ( p ? `${p} ` : '' ) + `[${PLUGIN_ID}] ${m}`

const vitePlugin = ( opts?: VitePlugin ): PluginOption => {

	let config: ResolvedConfig
	return {
		name        : PLUGIN_ID,
		closeBundle : async () => {

			try {

				if ( !opts ) return
				if ( opts.devMode && config.command === 'serve' ) console.log( msg( 'Dev mode activated', 'ℹ' ) )

				if ( opts.devMode || ( !opts.devMode && config.command === 'build' ) ) {

					await createImages( opts )
					console.log( msg( 'Create images succesfully!', '🎉' ) )

				}

			}
			catch ( e ) {

				const message = e instanceof Error ? e.message : 'Unexpected error'
				const error   = msg( message, '⚠️' )
				if ( opts?.throw ) throw error
				else console.warn( error )

			}

		},
		configResolved( resolvedConfig ) {

			config = resolvedConfig

		},

		config : () => {

			const publicPath = '/'
			return { define : { [GLOBAL_CONST_ID] : !opts?.value
				? {} // Si opts.value es undefined o nulo, se define como un objeto vacío
				: Object.fromEntries(
					Object.entries( opts.value ).map(
						( [ k ] ) => [
							k,
							join(
								publicPath,
								k + '.png',
							),
						],
					),
				) } }

		},
	}

}

export default vitePlugin
