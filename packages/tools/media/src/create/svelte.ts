/* eslint-disable jsdoc/check-tag-names */
import { GLOBAL_CONST_ID } from './const'

/**
 * Get Created Media paths
 *
 * @returns {Record<string, string>} - Object with the paths
 * @experimental
 */
export const getCreateMediaPaths = (): Record<string, string> => {

	// @ts-ignore
	const obj = globalThis?.[GLOBAL_CONST_ID]

	if ( typeof obj === 'object' && obj !== null )
		return obj as Record<string, string>

	return {}

}
