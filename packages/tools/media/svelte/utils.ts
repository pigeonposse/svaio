/* eslint-disable jsdoc/check-tag-names */

import type { GLOBAL_CONST_ID } from '../src/create/const'

/**
 * Get Created Media paths
 *
 * @returns {Record<string, string>} - Object with the paths
 * @experimental
 */
export const getCreateMediaPaths = (): Record<string, string> => {

	const ID: typeof GLOBAL_CONST_ID = '__SVAIO_CREATE_MEDIA_PATHS__'
	// @ts-ignore
	const obj = globalThis?.[ID]

	if ( typeof obj === 'object' && obj !== null )
		return obj as Record<string, string>

	return {}

}
