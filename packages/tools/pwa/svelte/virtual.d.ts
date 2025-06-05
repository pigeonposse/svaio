/* WARNING: these virtual modules are meant to be used by integrations and not being consumed directly from applications */

declare module 'virtual:pwa-assets/head' {
	export interface PWAAssetHeadLink {
		id?    : string
		rel    : 'apple-touch-startup-image' | 'apple-touch-icon' | 'icon'
		href   : string
		media? : string
		sizes? : string
		type?  : string
	}

	export interface ColorSchemeMeta {
		name    : string
		content : string
	}

	export interface PWAAssetsHead {
		links       : PWAAssetHeadLink[]
		themeColor? : ColorSchemeMeta
	}

	export const pwaAssetsHead: PWAAssetsHead
}

declare module 'virtual:pwa-assets/icons' {
	import type {
		AppleSplashScreenLink,
		FaviconLink,
		HtmlLink,
		IconAsset,
	} from '@vite-pwa/assets-generator/api'

	export type PWAAssetIcon<T extends HtmlLink> = Omit<IconAsset<T>, 'buffer'>

	export interface PWAAssetsIcons {
		favicon           : Record<string, PWAAssetIcon<FaviconLink>>
		transparent       : Record<string, PWAAssetIcon<HtmlLink>>
		maskable          : Record<string, PWAAssetIcon<HtmlLink>>
		apple             : Record<string, PWAAssetIcon<HtmlLink>>
		appleSplashScreen : Record<string, PWAAssetIcon<AppleSplashScreenLink>>
	}

	export const pwaAssetsIcons: PWAAssetsIcons
}

declare module 'virtual:pwa-info' {
	export interface PwaInfo {
		pwaInDevEnvironment : boolean
		/**
		 * The web manifest will be always here.
		 */
		webManifest: {
			href           : string
			useCredentials : boolean
			/**
			 * The link tag with or without `crossorigin`:
			 * - `<link rel="manifest" href="<webManifestUrl>" />`.
			 * - `<link rel="manifest" href="<webManifestUrl>" crossorigin="use-credentials" />`.
			 */
			linkTag        : string
		}
		/**
		 * The service worker data will be exposed only if required, that's, will **NOT** be exposed if:
		 * - not using `pwaPluginOptions.injectRegister` with `script`, `script-defer` or `inline` values
		 * - if using `pwaPluginOptions.injectRegister` with `auto` (default) and importing any of the virtual modules
		 */
		registerSW?: {
			/**
			 * When this flag is `true` the service worker must be registered via inline script otherwise registered via script with src attribute `registerSW.js`.
			 *
			 * @deprecated From `v0.17.2` this flag is deprecated, use `mode` instead.
			 */
			inline       : boolean
			/**
			 * When this flag is `inline` the service worker must be registered via inline script otherwise registered via script with src attribute `registerSW.js`.
			 */
			mode         : 'inline' | 'script' | 'script-defer'
			/**
			 * The path for the inline script: will contain the service worker url.
			 */
			inlinePath   : string
			/**
			 * The path for the src script for `registerSW.js`.
			 */
			registerPath : string
			/**
			 * The scope for the service worker: only required for `inline: true`.
			 */
			scope        : string
			/**
			 * The type for the service worker: only required for `inline: true`.
			 */
			type         : 'classic' | 'module'
			/**
			 * The script tag if `shouldRegisterSW` returns `true`.
			 */
			scriptTag?   : string
		}
	}
	/**
	 * Return the PWA information if available.
	 *
	 * This property will be `undefined` if:
	 * - SSR build
	 * - PWA is disabled: `pwaPluginOptions.disable = true`
	 * - running `Dev Server` and `pwaPluginOptions.devOptions.enabled = false` (default).
	 *
	 * @returns The PWA information.
	 */
	export const pwaInfo: PwaInfo | undefined
}
