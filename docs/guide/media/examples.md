# `@svaio/media` - Examples

## Enhance Usage

### ./vite.config.js

```ts
import media            from '@svaio/media'
import { sveltekit }    from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig( { plugins: [ media( { enhanced: true } ), sveltekit() ] } )

```

### ./src/app.d.ts

```ts
/// <reference types="@svaio/media/types" />

declare global {
	namespace App {
		// ...
	}
}

```

### ./src/*.svelte

```svelte
<script>
	import logoImage from '$lib/images/logo.png?enhanced'
</script>

<enhanced:img
	style="width:100%; height:100%; object-fit:cover"
	alt="some alt text"
	src={logoImage}
/>

```



## Create Images Usage

### ./vite.config.js

```ts
import media                     from '@svaio/media'
import { setDefaultMediaConfig } from '@svaio/media/utils'
import { sveltekit }             from '@sveltejs/kit/vite'
import { defineConfig }          from 'vite'

export default defineConfig( { plugins : [
	media( { create : { value : { og : setDefaultMediaConfig( {
		title : 'My Web title',
		desc  : 'My Web description',
		image : 'https://github.com/pigeonposse.png',
		color : {
			primary   : '#3c579d',
			secondary : '#4276b5',
			terciary  : '#347ba4',
			fourth    : '#33a09a',
		},
	} ) } } } ),
	sveltekit(),
] } )

```

### ./src/*.svelte

```svelte
<script>
	const createImagePath = '/og.png'
</script>

<img
	style="width:100%; height:100%; object-fit:cover"
	alt="some alt text"
	src={createImagePath}
/>

```

### Experimetal usage

```svelte
<script>

	import { getCreateMediaPaths } from '@svaio/media/svelte'

	const createImagePath = getCreateMediaPaths()

</script>

<img
	style="width:100%; height:100%; object-fit:cover"
	alt="some alt text"
	src={createImagePath['og']}
/>

```



