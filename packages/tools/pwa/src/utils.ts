/* eslint-disable camelcase */
import {
	createAppleSplashScreens,
	minimal2023Preset,
} from '@vite-pwa/assets-generator/config'

import type {
	ManifestOptions,
	Options,
} from './types'

export type DefaultConfig = {
	/**
	 * The name of the PWA.
	 */
	name         : string
	/**
	 * The description of the PWA.
	 */
	description? : string
	/**
	 * The path to the input image.
	 *
	 * Path relative to root folder where to find the image to use for generating PWA assets.
	 *
	 * @default 'static/favicon.png'
	 */
	inputImage?  : string
	/**
	 * Add custom manifest options.
	 */
	manifest?    : ManifestOptions
}

/**
 * Configures the default settings for a Progressive Web App (PWA).
 *
 * @param             opts - An object containing default configuration options for the PWA.
 * @returns {Options}      The configured PWA options.
 */

export const setDefaultConfig = ( opts: DefaultConfig ): Options => ( {
	srcDir         : './src',
	mode           : 'development',
	injectRegister : 'script-defer',
	registerType   : 'autoUpdate',
	injectManifest : { globPatterns: [ '**/*.{js,css,ico,png,svg,webp,woff,woff2}' ] },
	workbox        : { globPatterns: [ '**/*.{css,js,html,svg,png,ico,txt,woff2}' ] },
	// experimental   : { includeAllowlist: true },
	devOptions     : {
		enabled          : true,
		suppressWarnings : true,
		navigateFallback : '/',
	},
	pwaAssets : {
		preset : {
			...minimal2023Preset,
			appleSplashScreens : createAppleSplashScreens( {
				padding       : 0.3,
				resizeOptions : {
					fit        : 'contain',
					background : 'white',
				},
				darkResizeOptions : {
					fit        : 'contain',
					background : 'black',
				},
				linkMediaOptions : {
					log            : true,
					addMediaScreen : true,
					xhtml          : true,
				},
			}, [ 'iPad Air 9.7"' ] ),
		},
		image : opts.inputImage || 'static/favicon.png',
	},
	manifest : {
		short_name       : opts.name,
		name             : opts.name,
		description      : opts.description,
		start_url        : '/?source=pwa',
		scope            : '/',
		display          : 'standalone',
		theme_color      : 'white',
		background_color : 'black',
		...opts.manifest || {},
	},
} )
