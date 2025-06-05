
import * as utils                          from '@iconify/tools'
import { createExternalPackageIconLoader } from '@iconify/utils/lib/loader/external-pkg.mjs'
import { FileSystemIconLoader }            from '@iconify/utils/lib/loader/node-loaders'

import type * as Utils from '@iconify/tools'

export const getIconsFromPath = ( opts: {
	/**
	 * Directory input for icons
	 */
	input      : string
	/** Transform function */
	transform? : ( svg: string, utils: typeof Utils ) => Promise<string>
} ) => FileSystemIconLoader( opts.input, async value => {

	if ( opts.transform ) await opts.transform( value, utils )

	const {
		parseColors, SVG,
	} = utils
	const svg = new SVG( value )
	await parseColors( svg, { defaultColor: 'currentColor' } )

	return svg.toMinifiedString()

} )

export const getIconsFromIconifyRemotely = async ( opts:{
	/**
	 * Directory input for icons
	 *
	 * @see https://app.unpkg.com/@iconify/json/files/json
	 */
	name     : string
	/**
	 * Set specific version of iconify/json
	 */
	version? : string
} ) => {

	const url = `https://unpkg.com/@iconify/json${opts.version ? `@${opts.version}` : ''}/json/${opts.name}.json`
	const res = await fetch( url )

	return await res.json()

}

export const getIconsFromExternalPackage = ( opts: {
	/**
	 * The package name.
	 */
	packageName  : string
	/**
	 * whether to automatically install the package
	 *
	 * @default true
	 */
	autoInstall? : boolean
	/**
	 * The current working directory
	 */
	cwd?         : string
} ) => createExternalPackageIconLoader( opts.packageName, opts.autoInstall ?? true, opts.cwd )
