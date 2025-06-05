
import type {
	createImage,
	setHTML,
} from './core'
import type { ResvgRenderOptions } from '@resvg/resvg-js'
import type satoriFn               from 'satori'

export type CreateImageInput = Parameters<typeof satoriFn>[0]
export type CreateImageOptions = {
	/**
	 * Satori options
	 */
	satori? : Parameters<typeof satoriFn>[1]
	/**
	 * Output directory
	 *
	 * @default './.svelte-kit/output/client/og.png'
	 */
	output? : string
	/**
	 * Render options
	 */
	render? : ResvgRenderOptions
}

export type CreateImageValueFn = (
	( utils: {
		createImage : typeof createImage
		setHTML     : typeof setHTML
		outputFile  : string
	} ) => Promise<void>
)
export type CreateImageValue = {
	input : string
	opts  : Omit<CreateImageOptions, 'output'>
} | CreateImageValueFn

export type CreateImageObject = Record<string, CreateImageValue>

export type Options = {
	/**
	 * Output directory.
	 */
	outDir? : string
	value   : CreateImageObject
}
