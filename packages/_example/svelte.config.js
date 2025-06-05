import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = { kit : {
	adapter : adapter( ),
	alias   : { $locales: 'src/locales' },
} }

export default config
