
import { Resvg }     from '@resvg/resvg-js'
import { writeFile } from 'node:fs/promises'
import { join }      from 'node:path'
import satoriFn      from 'satori'
import { html }      from 'satori-html'

import {
	CreateImageInput,
	CreateImageOptions,
	Options,
} from './types'
import { getGoogleFontData } from './utils'

export const setHTML = html

const dir = '.svelte-kit/output/client'
const EXT = '.png' as const
export const createImage = async ( input: CreateImageInput, opts?: CreateImageOptions ) => {

	const {
		output = join( dir, 'og' + EXT ),
		satori,
		render,
	} = opts || {}

	const fontWeight = {
		text  : 400,
		desc  : 600,
		title : 700,
	} as const
	const fontFamily = 'Open+Sans'

	const svg = await satoriFn( input, satori || {
		embedFont : true,
		width     : 1200,
		height    : 600,
		fonts     : await Promise.all( Object.values( fontWeight ).map( async w => ( {
			name   : fontFamily,
			data   : await getGoogleFontData( fontFamily, w ),
			style  : 'normal',
			weight : w,
		} ) ) ),
	} )

	const resvg     = new Resvg( svg, render )
	const pngData   = resvg.render()
	const pngBuffer = pngData.asPng()

	await writeFile( output, pngBuffer )

	return {
		buffer : pngBuffer,
		path   : output,
	}

}

export const createImages = async ( opts: Options ) => {

	const output = opts?.outDir || dir
	const obj    = opts?.value

	if ( !obj || !Object.values( obj ).length )
		throw new Error( 'Keys for create image does not exist' )

	for ( const [ key, value ] of Object.entries( obj ) ) {

		const outputFile = join( output, key + EXT )

		if ( typeof value !== 'function' ) await createImage( value.input, {
			output : outputFile,
			...value.opts,
		} )
		else await value( {
			outputFile,
			createImage,
			setHTML,
		} )

	}

}
