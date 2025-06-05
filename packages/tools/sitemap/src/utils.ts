
import type { Options } from './types'

export type DefaultConfig = {
	/**
	 * Hostname for the sitemap.
	 */
	hostname? : string
	/**
	 * Output directory for the build files.
	 *
	 * @default '.svelte-kit/output/client'
	 */
	outDir?   : string
	/**
	 * Array of paths to exclude from the sitemap.
	 *
	 * @example ['/admin/*']
	 */
	exclude?  : string[]
}

export const setDefaultConfig = ( opts?: DefaultConfig ): Options => ( {
	outDir   : opts?.outDir || '.svelte-kit/output/client',
	hostname : opts?.hostname || 'http://localhost/',
	exclude  : opts?.exclude,
	robots   : [
		{
			userAgent : '*',
			disallow  : opts?.exclude,
		},
	],
} )
