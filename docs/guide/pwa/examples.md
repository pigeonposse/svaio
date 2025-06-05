# `@svaio/pwa` - Examples

## Simple Usage

### ./vite.config.js

```js
import pwa                  from '@svaio/pwa'
import { setDefaultConfig } from '@svaio/pwa/utils'
import { sveltekit }        from '@sveltejs/kit/vite'
import { defineConfig }     from 'vite'

export default defineConfig( { plugins : [
	pwa( setDefaultConfig( {
		name        : 'my-svelte-app',
		description : 'My Svelte App Description',
	} ) ),
	sveltekit(),
] } )

```

### ./src/routes/+layout.svelte

```svelte
<script>
	import { Head } from '@svaio/pwa/svelte'
</script>

<svelte:head>
	<Head />
</svelte:head>

```



## Advanced Usage

### ./vite.config.js

```js
import pwa                  from '@svaio/pwa'
import { setDefaultConfig } from '@svaio/pwa/utils'
import { sveltekit }        from '@sveltejs/kit/vite'
import { defineConfig }     from 'vite'

export default defineConfig( { plugins : [
	pwa( setDefaultConfig( {
		name        : 'my-svelte-app',
		description : 'My Svelte App Description',
	} ) ),
	sveltekit(),
] } )

```

### ./src/routes/+layout.svelte

```svelte
<script lang="ts">

	import { pwaAssetsHead } from 'virtual:pwa-assets/head'
	import { pwaInfo } from 'virtual:pwa-info'

</script>

{@html pwaInfo ? pwaInfo.webManifest.linkTag : ''}
{#if pwaAssetsHead.themeColor}
	<meta
		name="theme-color"
		content={pwaAssetsHead.themeColor.content}
	/>
{/if}
{#each pwaAssetsHead.links as link}
	<link {...link} />
{/each}


```

### ./src/app.d.ts

Set types fot vitrual files

```ts
/// <reference types="@svaio/pwa/types" />

declare global {
	namespace App {
		// ...
	}
}

```



