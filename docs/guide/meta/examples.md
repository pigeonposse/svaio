# `@svaio/meta` - Examples

## Simple Usage

**svelte-meta-tags** wrapper. [See more](https://oekazuma.github.io/svelte-meta-tags/)

### Meta tags (opengraph, facebook, twiiter etc)

See more: https://oekazuma.github.io/svelte-meta-tags/meta-tags-properties/

```svelte
<script lang="ts">
	import { Seo } from '@svaio/meta'
</script>

<svelte:head>
	<Seo
		meta={{
			title       : 'My site',
			description : 'My example site',
		}}
	/>
</svelte:head>

```

### JSON LD Schemas

See more: https://oekazuma.github.io/svelte-meta-tags/json-ld/

```svelte
<script lang="ts">
	import { Seo } from '@svaio/meta'
</script>

<svelte:head>
	<Seo
		jsonld={{ schema : {
			'@type'           : 'BreadcrumbList',
			'itemListElement' : [
				{
					'@type'    : 'ListItem',
					'position' : 1,
					'name'     : 'Books',
					'item'     : 'https://example.com/books',
				},
				{
					'@type'    : 'ListItem',
					'position' : 2,
					'name'     : 'Science Fiction',
					'item'     : 'https://example.com/books/sciencefiction',
				},
				{
					'@type'    : 'ListItem',
					'position' : 3,
					'name'     : 'Award Winners',
				},
			],
		} }}
	/>
</svelte:head>

```



