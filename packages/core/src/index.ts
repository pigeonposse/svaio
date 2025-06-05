
import type i18n             from '@svaio/i18n'
import type media            from '@svaio/media'
import type pwa              from '@svaio/pwa'
import type sitemap          from '@svaio/sitemap'
import type unocss           from '@svaio/unocss'
import type { PluginOption } from 'vite'

export type Options = {
	/**
	 * Add unocss support
	 */
	unocss? : false | Parameters<typeof unocss>[0]

	/**
	 * Add sitemap support
	 */
	sitemap? : false | Parameters<typeof sitemap>[0]

	/**
	 * Add PWA support
	 */
	pwa? : false | Parameters<typeof pwa>[0]

	/**
	 * Add i18n support
	 */
	i18n? : false | Parameters<typeof i18n>[0]

	/**
	 * Add Media support
	 */
	media? : false | Parameters<typeof media>[0]
}

/**
 * Vite plugin for integrating support for UnoCSS, Sitemap, PWA, and i18n.
 *
 * @param   {Options} opts - An object containing configuration options for each feature.
 * @returns {Array}        Returns an array of plugins, filtering out any that are not enabled.
 */

const vitePlugin = async ( opts?: Options ): Promise<PluginOption> => [
	opts?.unocss
		? ( await import( '@svaio/unocss' ) ).default( opts.unocss )
		: undefined,
	opts?.sitemap && ( await import( '@svaio/sitemap' ) ).default( opts.sitemap ),
	opts?.pwa
		? ( await import( '@svaio/pwa' ) ).default( opts.pwa )
		: undefined,
	opts?.i18n && ( await import( '@svaio/i18n' ) ).default( opts.i18n ),
	opts?.media && ( await import( '@svaio/media' ) ).default( opts.media ),
]

export default vitePlugin
