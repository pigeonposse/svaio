/* eslint-disable @stylistic/object-curly-newline */
import type { UserOptions } from 'sitemap-ts'

export type Options = Omit<UserOptions, 'outDir'> & {
	/**
	 * Output directory for the build files.
	 *
	 * @default '.svelte-kit/output/client'
	 */
	outDir? : string
}

