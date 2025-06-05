# `@svaio/sitemap` - Examples

## Simple Usage

### vite.config.js

```js
import sitemap              from '@svaio/sitemap'
import { setDefaultConfig } from '@svaio/sitemap/utils'
import { sveltekit }        from '@sveltejs/kit/vite'
import { defineConfig }     from 'vite'

export default defineConfig( { plugins: [ sitemap( setDefaultConfig( ) ), sveltekit() ] } )

```



## Advanced Usage

### vite.config.js

```js
import sitemap          from '@svaio/sitemap'
import { sveltekit }    from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig( { plugins : [
	sitemap( {
		hostname : 'https://example.com',
		i18n     : {
			defaultLanguage : 'en',
			languages       : [ 'en', 'es' ],
		},
		robots : [
			{
				userAgent : '*',
				allow     : '/',
				disallow  : '/admin/*',
			},
		],
	} ),
	sveltekit(),
] } )

```



